import React from "react";

import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import ErrorIcon from "@mui/icons-material/Error";

import { MyText } from "../../components";
import ROUTES from "../../routes";
import ThemeMain from "../../theme";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
}));

const ErrorPayment = () => {
    const navigate = useNavigate();

    return (
        <Root>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <MyText variant="h6">Оплата не прошла</MyText>
                <ErrorIcon sx={{ color: "red", ml: 1 }} />
            </Box>
            <Button
                sx={{ mt: 3, bgcolor: ThemeMain.palette.primary.main }}
                variant="contained"
                onClick={() => navigate(ROUTES.HOME)}
            >
                Вернуться на главную страницу
            </Button>
            {/* <MyText variant="body1"></MyText> */}
        </Root>
    );
};

export default ErrorPayment;
