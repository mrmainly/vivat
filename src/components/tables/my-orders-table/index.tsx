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
    CircularProgress,
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

interface MyOrdersTableProps {
    data?: any;
    loading?: boolean;
    navigate_to?: any;
}

const MyOrdersTable: React.FC<MyOrdersTableProps> = ({
    data,
    loading,
    navigate_to,
}) => {
    const navigate = useNavigate();
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Номер</TableCell>
                        <TableCell align="center">Дата</TableCell>
                        <TableCell align="center">Сумма</TableCell>
                        <TableCell align="center">Адрес аптеки</TableCell>
                        <TableCell align="center">Статус</TableCell>
                        <TableCell align="center">Действие</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row: any, index: number) => (
                        <TableRow
                            key={index}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {row.num === null ? "Нету" : row.num}
                            </TableCell>
                            <TableCell align="center">{row.created}</TableCell>
                            <TableCell align="center">
                                {row.total_price === null
                                    ? "Нету"
                                    : row.total_price}
                            </TableCell>
                            <TableCell align="center">ыфыв</TableCell>
                            <TableCell align="center">
                                {row.orderStatus}
                            </TableCell>
                            <TableCell align="center">
                                <Arrow
                                    onClick={() =>
                                        navigate(`${navigate_to}/${row.id}`)
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
};

export default MyOrdersTable;
