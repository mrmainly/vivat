import React from "react";
import { styled } from "@mui/system";
import { Container, IconButton, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { toast } from "react-toastify";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import ThemeMain from "../../../theme";
import ROUTES from "../../../routes";
import { drawersSlice } from "../../../reducer/drawers_slice";

const MobileWrapper = styled(Container)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
}));

const ButtonCustom = styled(Button)(({ theme }) => ({
    color: ThemeMain.palette.primary.main,
    borderColor: ThemeMain.palette.primary.main,
    width: "max-content",
    mr: 1,
    fontSize: 14,
    [theme.breakpoints.down("sm")]: {
        fontSize: 12,
    },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginLeft: "-10px",
}));

const Mobile = () => {
    const jwttoken = cookie.get("jwttoken");
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { handleMainDrawerOpen } = drawersSlice.actions;

    return (
        <MobileWrapper>
            <IconWrapper>
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() => dispatch(handleMainDrawerOpen(true))}
                    size="small"
                >
                    <MenuIcon sx={{ color: "#55CD61" }} fontSize="large" />
                </IconButton>

                <img
                    src="/img/Frame60.png"
                    style={{ height: 48, objectFit: "cover", marginLeft: 5 }}
                />
            </IconWrapper>
            <Box sx={{ display: "flex" }}>
                <ButtonCustom
                    variant="outlined"
                    onClick={() => {
                        jwttoken
                            ? navigate(ROUTES.STATUS_PRODUCT)
                            : toast.error(
                                  "данная операция доступно только при авторизации"
                              );
                    }}
                >
                    Статус заказа
                </ButtonCustom>
            </Box>
        </MobileWrapper>
    );
};

export default Mobile;
