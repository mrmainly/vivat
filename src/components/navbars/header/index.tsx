import React, { useState, useContext } from "react";

import {
    AppBar,
    MenuItem,
    Box,
    IconButton,
    Container,
    TextField,
    Grid,
    Button,
    LinearProgress,
    Autocomplete,
    ButtonGroup,
    Drawer,
    FormControl,
    InputLabel,
    Select,
    Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import cookie from "js-cookie";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FormattedMessage } from "react-intl";

import ThemeMain from "../../../theme";
import {
    MyText,
    MyDrawer,
    BorderLine,
    ProfileDrawer,
    FavoritesDrawer,
    SignInModal,
    SignUpModal,
    ForgotPasswordModal,
    Form,
} from "../..";
import { StateContext } from "../../../store";
import ROUTES from "../../../routes";
import API from "../../../api";
import Top from "./components/Top";
import Middle from "./components/Middle";
import Bottom from "./components/Bottom";

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

const TopBar = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 5,
}));

const TopBarItem = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

const BottomBar = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 5,
}));

const BottomBarItem = styled(Box)(({ theme }) => ({
    display: "flex",
}));

const GridMidle = styled(Grid)(({ theme }) => ({
    display: "flex",
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        // background: ThemeMain.palette.primary.main,
        color: ThemeMain.palette.primary.main,
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
    const stateContext = useContext(StateContext);

    const navigate = useNavigate();
    const {
        drawerOpen,
        drawerProfileOpen,
        drawerFavoritesOpen,
        login,
        registerModal,
        forgot,
    } = state;

    const { register, handleSubmit, control } = useForm({
        mode: "onBlur",
    });

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

    const handleAutoCompliteData = (data: any) =>
        setState((prevState) => ({ ...prevState, AutoCompliteData: data }));

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
