import React from "react";

import { Drawer, Box, MenuItem, IconButton } from "@mui/material";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

import { MyLink, BorderLine, MyText } from "../..";
import ROUTES from "../../../routes";
import { ModalAndDrawer } from "../../../interface";
import ThemeMain from "../../../theme";

const ProfileDrawer: React.FC<ModalAndDrawer> = ({ state, handleClose }) => {
    const navigate = useNavigate();

    return (
        <Drawer
            {...{
                anchor: "right",
                open: state,
                onClose: handleClose,
            }}
        >
            <Box
                style={{
                    width: 300,
                    padding: 15,
                    height: "100%",
                    color: "#20B12E",
                }}
            >
                <Box
                    sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}
                >
                    <IconButton onClick={() => handleClose()}>
                        <CloseIcon
                            sx={{ color: ThemeMain.palette.primary.main }}
                            fontSize="large"
                        />
                    </IconButton>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", ml: 1.5 }}>
                    <img src="/img/User_cicrle_light.png" />
                    <MyText variant="h6" sx={{ ml: 1 }}>
                        {cookie.get("name")
                            ? cookie.get("name")
                            : "Заполните профиль"}
                    </MyText>
                </Box>
                <BorderLine sx={{ mb: 2, mt: 2 }} />
                <MenuItem
                    onClick={() => {
                        navigate(ROUTES.MYORDERS);
                        handleClose();
                    }}
                    sx={{ color: "#20B12E" }}
                >
                    МОИ ЗАКАЗЫ
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        navigate(ROUTES.BASICINFORMATION);
                        handleClose();
                    }}
                    sx={{ color: "#20B12E" }}
                >
                    МОИ ДАННЫЕ
                </MenuItem>
                <BorderLine sx={{ mb: 2, mt: 2 }} />
                <MenuItem
                    onClick={() => {
                        cookie.remove("jwttoken");
                        handleClose();
                        navigate("/");
                    }}
                >
                    Выйти
                </MenuItem>
            </Box>
        </Drawer>
    );
};

export default ProfileDrawer;
