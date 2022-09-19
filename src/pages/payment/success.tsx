import React from "react";

import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import AddTaskIcon from "@mui/icons-material/AddTask";

import { MyText } from "../../components";
import ROUTES from "../../routes";
import ThemeMain from "../../theme";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
}));

const SuccessPayment = () => {
    const navigate = useNavigate();

    return (
        <Root>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <MyText variant="h6">Оплата прошла успешно</MyText>
                <AddTaskIcon
                    sx={{ color: ThemeMain.palette.primary.main, ml: 1 }}
                />
            </Box>
            <Button
                sx={{ mt: 3, bgcolor: ThemeMain.palette.primary.main }}
                variant="contained"
                onClick={() => navigate(ROUTES.STATUS_PRODUCT)}
            >
                Посмотреть статус заказа
            </Button>
        </Root>
    );
};

export default SuccessPayment;
