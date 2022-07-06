import React, { useContext, useState, useEffect } from "react";

import {
    Box,
    IconButton,
    TextField,
    Button,
    LinearProgress,
    Badge,
    Autocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FormattedMessage } from "react-intl";

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
import { DispatchContext, StateContext } from "../../../store";

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

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        background: "red",
        color: "white",
    },
    marginRight: 10,
}));

const SearchBox = styled(Autocomplete)(({ theme }) => ({
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
    const [searchValue, setSearchValue] = useState("");
    const [basketCount, setBasketCount] = useState(0);

    const [state, setState] = useState({
        login: false,
        registerModal: false,
        forgot: false,
        AutoCompliteData: [],
    });

    const { login, registerModal, forgot, AutoCompliteData } = state;

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

    const handleAutoCompliteData = (data: any) =>
        setState((prevState) => ({ ...prevState, AutoCompliteData: data }));

    const jwttoken = cookie.get("jwttoken");
    const navigate = useNavigate();
    const dispatch = useContext(DispatchContext);
    const basketStatus = useContext(StateContext);
    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    });

    const onSubmit = async (event: any, values: any) => {
        setLoading(true);
        await API.productsSearch(values)
            .then((res) => {
                navigate(ROUTES.SEARCH_PAGE, {
                    state: { data: res.data, title: values },
                });
                setSearchStatus(false);
            })
            .catch((error) => {
                toast.error("error");
            });
        setLoading(false);
    };

    const handleAutoComplite = (e: any) => {
        setSearchValue(e.target.value);
        API.getAutoComplite(e.target.value)
            .then((res) => {
                const newData = res.data.map((item: any) => {
                    return item.name;
                });
                handleAutoCompliteData(newData);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        if (jwttoken) {
            API.getCartsList()
                .then((res) => {
                    setBasketCount(res.data.total_qnt);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [basketStatus.basket.status, jwttoken]);

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
                        <StyledBadge badgeContent={jwttoken ? basketCount : 0}>
                            <img src="/img/Bag_light.png" />
                        </StyledBadge>
                    </IconButton>
                </Box>
            </MyContainer>
            {searchStatus && (
                <Box
                    style={{
                        marginTop: "-1px",
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <SearchBox
                        id="free-solo-2-demo"
                        freeSolo
                        size="small"
                        options={AutoCompliteData}
                        onInputChange={(event, newInputValue) =>
                            handleAutoComplite(event)
                        }
                        onChange={onSubmit}
                        renderInput={(params) => (
                            <TextField
                                variant="outlined"
                                label={
                                    <FormattedMessage id="search_medicine" />
                                }
                                {...params}
                                value={searchValue}
                                // onBlur={onSubmit}
                            />
                        )}
                    />
                </Box>
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
