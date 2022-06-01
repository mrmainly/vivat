import React, { useState } from "react";
import { styled } from "@mui/system";
import { Container, IconButton, Box, MenuItem, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import ThemeMain from "../../../theme";
import { MyDrawer } from "../..";

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
    const [state, setState] = useState({
        drawerOpen: false,
    });

    const { drawerOpen } = state;

    const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
    const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));

    return (
        <MobileWrapper>
            <MyDrawer state={drawerOpen} handleClose={handleDrawerClose} />
            <IconWrapper>
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() => handleDrawerOpen()}
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
                <ButtonCustom variant="outlined">Статус заказа</ButtonCustom>
            </Box>
        </MobileWrapper>
    );
};

export default Mobile;
