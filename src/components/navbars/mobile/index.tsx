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
            <Box sx={{ display: "flex" }}>
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={() => handleDrawerOpen()}
                >
                    <MenuIcon sx={{ color: "#55CD61" }} fontSize="large" />
                </IconButton>
                <MenuItem>
                    <img src="/img/Frame60.png" style={{ height: 48 }} />
                </MenuItem>
            </Box>
            <Box sx={{ display: "flex" }}>
                <Button
                    sx={{
                        color: ThemeMain.palette.primary.main,
                        borderColor: ThemeMain.palette.primary.main,
                        width: "max-content",
                        mr: 1,
                    }}
                    variant="outlined"
                >
                    Статус заказа
                </Button>
            </Box>
        </MobileWrapper>
    );
};

export default Mobile;
