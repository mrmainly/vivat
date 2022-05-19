import * as React from "react";

import {
    Paper,
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table,
    Button,
    Box,
} from "@mui/material";
import { styled } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

import ROUTES from "../../../routes";

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    id: number
) {
    return { name, calories, fat, carbs, id };
}

const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 1),
    createData("Ice cream sandwich", 237, 9.0, 37, 2),
    createData("Eclair", 262, 16.0, 24, 3),
    createData("Cupcake", 305, 3.7, 67, 4),
    createData("Gingerbread", 356, 16.0, 49, 5),
];

const Arrow = styled(Box)(({ theme }) => ({
    cursor: "pointer",
    transition: "all 0.5s ease",
    color: "#55CD61",
    "&:hover": {
        color: "red",
    },
}));

export default function BasicTable() {
    const navigate = useNavigate();
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Номер и дата</TableCell>
                        <TableCell align="right">Сумма</TableCell>
                        <TableCell align="right">Адрес аптеки</TableCell>
                        <TableCell align="right">Статус</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">
                                <Arrow
                                    onClick={() =>
                                        navigate(
                                            `${ROUTES.STATUS_PRODUCT_DETAIL}/${row.id}`
                                        )
                                    }
                                >
                                    <ArrowForwardIosIcon />
                                </Arrow>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
