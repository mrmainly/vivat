import React, { useContext } from "react";

import { Drawer, Box, MenuItem, IconButton } from "@mui/material";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

import { MyLink, BorderLine, MyText } from "../..";
import ROUTES from "../../../routes";
import { ModalAndDrawer } from "../../../interface";

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
                        <img src="/img/Close_round_light.png" />
                    </IconButton>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", ml: 1.5 }}>
                    <img src="/img/User_cicrle_light.png" />
                    <MyText variant="h6" sx={{ ml: 1 }}>
                        {cookie.get("name")}
                    </MyText>
                </Box>
                <BorderLine sx={{ mb: 2, mt: 2 }} />
                <MyLink href={ROUTES.MYORDERS} sx={{ color: "#20B12E" }}>
                    МОИ ЗАКАЗЫ
                </MyLink>
                <MyLink
                    href={ROUTES.BASICINFORMATION}
                    sx={{ color: "#20B12E", mt: 1 }}
                >
                    МОИ ДАННЫЕ
                </MyLink>
                <MyLink href="" sx={{ color: "#20B12E", mt: 1 }}>
                    ПРОГРАММА ЛОЯЛЬНОСТИ
                </MyLink>
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
