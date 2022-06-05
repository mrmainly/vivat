import React, { useContext, useState } from "react";

import { Box, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

import { DispatchContext } from "../../../store";
import MyContainer from "../../container";
import {
    ProfileDrawer,
    FavoritesDrawer,
    SignInModal,
    SignUpModal,
    ForgotPasswordModal,
} from "../..";
import ROUTES from "../../../routes";

const MobileBox = styled(Box)(({ theme }) => ({
    background: "white",
    height: 48,
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "block",
    },
    boxShadow: "0px -1px 12px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    bottom: 0,
    width: "100%",
}));

const MobileDown = () => {
    const [profileDrawer, setProfileDrawer] = useState(false);
    const [favoriteDrawer, setFavotiteDrawer] = useState(false);
    const [state, setState] = useState({
        login: false,
        register: false,
        forgot: false,
    });

    const { login, register, forgot } = state;

    const handleLoginClose = () =>
        setState((prevState) => ({ ...prevState, login: false }));
    const handleLoginOpen = () =>
        setState((prevState) => ({ ...prevState, login: true }));

    const handleRegisterClose = () =>
        setState((prevState) => ({ ...prevState, register: false }));
    const handleRegisterOpen = () =>
        setState((prevState) => ({ ...prevState, register: true }));

    const handleForgotClose = () =>
        setState((prevState) => ({ ...prevState, forgot: false }));
    const handleForgotOpen = () =>
        setState((prevState) => ({ ...prevState, forgot: true }));

    const handleProfileDrawerClose = () => setProfileDrawer(false);
    const handleFavoriteDrawerClose = () => setFavotiteDrawer(false);

    const dispatch = useContext(DispatchContext);
    const jwttoken = cookie.get("jwttoken");
    const navigate = useNavigate();
    return (
        <MobileBox>
            <MyContainer wrapper={false}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <IconButton onClick={() => navigate(ROUTES.HOME)}>
                        <img src="/img/darhboard.png" />
                    </IconButton>
                    <IconButton>
                        <img src="/img/Component17.png" />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            jwttoken
                                ? setFavotiteDrawer(true)
                                : handleLoginOpen();
                        }}
                    >
                        <img src="/img/Favorite_light.png" />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            jwttoken
                                ? setProfileDrawer(true)
                                : handleLoginOpen();
                        }}
                    >
                        <img src="/img/User_cicrle_light.png" />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            jwttoken
                                ? navigate(ROUTES.BASKET)
                                : handleLoginOpen();
                        }}
                    >
                        <img src="/img/Bag_light.png" />
                    </IconButton>
                </Box>
            </MyContainer>

            <SignUpModal
                registerModal={register}
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
                state={profileDrawer}
                handleClose={handleProfileDrawerClose}
            />
            {jwttoken ? (
                <FavoritesDrawer
                    state={favoriteDrawer}
                    handleClose={handleFavoriteDrawerClose}
                />
            ) : favoriteDrawer ? (
                <FavoritesDrawer
                    state={favoriteDrawer}
                    handleClose={handleFavoriteDrawerClose}
                />
            ) : (
                ""
            )}
        </MobileBox>
    );
};

export default MobileDown;
