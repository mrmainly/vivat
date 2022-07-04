import React, { useState, useContext, useEffect } from "react";

import { AppBar, Box, Container, LinearProgress } from "@mui/material";
import { styled } from "@mui/system";
import cookie from "js-cookie";

import {
    MyText,
    MyDrawer,
    BorderLine,
    ProfileDrawer,
    FavoritesDrawer,
    SignInModal,
    SignUpModal,
    ForgotPasswordModal,
} from "../..";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";
import API from "../../../api";

const Main = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
}));

const DesktopWrapper = styled(Container)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const Header = () => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        drawerOpen: false,
        drawerProfileOpen: false,
        drawerFavoritesOpen: false,
        statusProduct: false,
        subProductDrawer: false,
        login: false,
        registerModal: false,
        forgot: false,
    });

    const jwttoken = cookie.get("jwttoken");

    const {
        drawerOpen,
        drawerProfileOpen,
        drawerFavoritesOpen,
        login,
        registerModal,
        forgot,
    } = state;

    const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
    const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));

    const handleProfileDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerProfileOpen: false }));
    const handleProfileDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerProfileOpen: true }));

    const handleFavoritesDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerFavoritesOpen: false }));
    const handleFavoritesDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerFavoritesOpen: true }));

    const handleLoginClose = () =>
        setState((prevState) => ({ ...prevState, login: false }));
    const handleLoginOpen = () =>
        setState((prevState) => ({ ...prevState, login: true }));

    const handleRegisterClose = () =>
        setState((prevState) => ({ ...prevState, registerModal: false }));
    const handleRegisterOpen = () =>
        setState((prevState) => ({ ...prevState, registerModal: true }));

    const handleForgotClose = () =>
        setState((prevState) => ({ ...prevState, forgot: false }));
    const handleForgotOpen = () =>
        setState((prevState) => ({ ...prevState, forgot: true }));

    // useEffect(() => {
    //     API.getCartsList()
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    bgcolor: "white",
                    color: "#222222",
                    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.25);",
                    pt: 0.5,
                    // pb: 0.5,
                }}
            >
                <DesktopWrapper>
                    <Main aria-label="mailbox folders">
                        <Top />
                        <BorderLine />
                        <Middle />
                        <BorderLine />
                        <Bottom
                            handleDrawerOpen={handleDrawerOpen}
                            handleFavoritesDrawerOpen={
                                handleFavoritesDrawerOpen
                            }
                            handleLoginOpen={handleLoginOpen}
                            setLoading={setLoading}
                        />
                    </Main>
                </DesktopWrapper>
                {loading ? <LinearProgress /> : ""}
            </AppBar>
            <MyDrawer state={drawerOpen} handleClose={handleDrawerClose} />

            <SignUpModal
                registerModal={registerModal}
                setRegisterClose={handleRegisterClose}
                setRegisterOpen={handleRegisterOpen}
                setLoginOpen={handleLoginOpen}
            />
            <SignInModal
                login={login}
                setLoginClose={handleLoginClose}
                setRegisterClose={handleRegisterClose}
                setRegisterOpen={handleRegisterOpen}
                setForgotOpen={handleForgotOpen}
            />

            <ForgotPasswordModal
                forgot={forgot}
                setForgotClose={handleForgotClose}
                setLoginOpen={handleLoginOpen}
            />

            <ProfileDrawer
                state={drawerProfileOpen}
                handleClose={handleProfileDrawerClose}
            />
            {jwttoken ? (
                <FavoritesDrawer
                    state={drawerFavoritesOpen}
                    handleClose={handleFavoritesDrawerClose}
                />
            ) : drawerFavoritesOpen ? (
                <FavoritesDrawer
                    state={drawerFavoritesOpen}
                    handleClose={handleFavoritesDrawerClose}
                />
            ) : (
                ""
            )}
        </>
    );
};

export default Header;
