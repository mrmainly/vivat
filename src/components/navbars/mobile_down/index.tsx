import React, { useContext, useState } from "react";

import {
    Box,
    IconButton,
    TextField,
    Button,
    LinearProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import ThemeMain from "../../../theme";
import MyContainer from "../../container";
import {
    FavoritesDrawer,
    SignInModal,
    SignUpModal,
    Form,
    ForgotPasswordModal,
} from "../..";
import ROUTES from "../../../routes";
import API from "../../../api";

const MobileBox = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        display: "block",
        background: "white",
        height: 48,
        boxShadow: "0px -1px 12px rgba(0, 0, 0, 0.1)",
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 1,
    },
}));

const SearchBox = styled(TextField)(({ theme }) => ({
    position: "fixed",
    zIndex: 1,
    top: 90,
    width: "90%",
    background: "white",
    boxShadow: "1px 1px 11px -3px rgba(34, 60, 80, 0.2)",
    borderRadius: 5,
}));

const MobileDown = () => {
    const [favoriteDrawer, setFavotiteDrawer] = useState(false);
    const [searchStatus, setSearchStatus] = useState(false);
    const [loading, setLoading] = useState(false);

    const [state, setState] = useState({
        login: false,
        registerModal: false,
        forgot: false,
    });

    const { login, registerModal, forgot } = state;

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

    const handleFavoriteDrawerClose = () => setFavotiteDrawer(false);

    const jwttoken = cookie.get("jwttoken");
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    });

    const onSubmit = async (data: any) => {
        setLoading(true);
        await API.productsSearch(data.name)
            .then((res) => {
                navigate(ROUTES.SEARCH_PAGE, {
                    state: { data: res.data, title: data.name },
                });
            })
            .catch((error) => {
                toast.error("error");
            });
        setLoading(false);
        console.log(data);
    };

    return (
        <MobileBox>
            {loading ? <LinearProgress /> : ""}
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
                    <IconButton onClick={() => setSearchStatus(!searchStatus)}>
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
                                ? navigate(ROUTES.BASICINFORMATION)
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
            {searchStatus && (
                <Form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{
                        marginTop: "-1px",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <SearchBox
                        variant="outlined"
                        label="Поиск лекарства"
                        size="small"
                        fullWidth
                        {...register("name")}
                        InputProps={{
                            endAdornment: (
                                <Button
                                    sx={{
                                        mr: "-15px",
                                        height: "100%",
                                    }}
                                    type="submit"
                                >
                                    <SearchIcon
                                        sx={{
                                            color: ThemeMain.palette.primary
                                                .main,
                                        }}
                                    />
                                </Button>
                            ),
                        }}
                    />
                </Form>
            )}

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
