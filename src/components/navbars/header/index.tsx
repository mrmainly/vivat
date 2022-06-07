import React, { useState } from "react";

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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import cookie from "js-cookie";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";

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
import { DispatchContext } from "../../../store";
import ROUTES from "../../../routes";
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

const MidleBar = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 105,
    marginBottom: "-6px",
}));

const MidleBarItem = styled(Box)(({ theme }) => ({
    display: "flex",
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

const MidleBarItemSelect = styled(Grid)(({ theme }) => ({}));

const Header = () => {
    const [state, setState] = useState({
        drawerOpen: false,
        drawerProfileOpen: false,
        drawerFavoritesOpen: false,
        statusProduct: false,
        subProductDrawer: false,
        login: false,
        registerModal: false,
        forgot: false,
        AutoCompliteData: ["a"],
    });
    const [loading, setLoading] = useState(false);

    const jwttoken = cookie.get("jwttoken");
    const navigate = useNavigate();
    const {
        drawerOpen,
        drawerProfileOpen,
        drawerFavoritesOpen,
        login,
        registerModal,
        forgot,
        AutoCompliteData,
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

    const onSubmit = async (data: any) => {
        console.log(data);
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
    };

    const handleAutoComplite = (e: any) => {
        API.getAutoComplite(e)
            .then((res) => {
                const newData = res.data.map((item: any) => {
                    return item.name;
                });
                console.log("newData", newData);
                // handleAutoCompliteData(newData);
            })
            .catch((error) => console.log(error));
    };

    const Desktop = () => {
        return (
            <DesktopWrapper>
                <Main aria-label="mailbox folders">
                    <TopBar>
                        <TopBarItem>
                            <MenuItem
                                onClick={() => navigate(ROUTES.VIVAT_INFO)}
                            >
                                <MyText variant="body1">Наши аптеки</MyText>
                            </MenuItem>
                        </TopBarItem>
                        <TopBarItem>
                            <MenuItem>
                                <MyText variant="body1">Русский язык</MyText>
                            </MenuItem>
                            <MenuItem>
                                <MyText variant="body1">
                                    8 (914) 225-25-25
                                </MyText>
                            </MenuItem>
                            <MenuItem onClick={() => navigate(ROUTES.ORDER)}>
                                <MyText variant="body1">
                                    Как сделать заказ
                                </MyText>
                            </MenuItem>
                        </TopBarItem>
                    </TopBar>
                    <BorderLine />
                    <MidleBar>
                        <MidleBarItem>
                            <MenuItem onClick={() => navigate(ROUTES.HOME)}>
                                <img
                                    src="/img/Frame60.png"
                                    style={{ height: 90 }}
                                />
                            </MenuItem>
                        </MidleBarItem>
                        <MidleBarItem sx={{ width: "100%", ml: 2, mr: 2 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <img src="/img/Frame3.png" />
                                <Box>
                                    <MyText>Якутск</MyText>
                                    <MyText
                                        variant="body2"
                                        sx={{ color: "#999999" }}
                                    >
                                        Город
                                    </MyText>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    ml: 3,
                                }}
                            >
                                <img src="/img/Frame212.png" />
                                <Box>
                                    <MyText>Лермонтова 38</MyText>
                                    <MyText
                                        variant="body2"
                                        sx={{ color: "#999999" }}
                                    >
                                        Адрес аптеки
                                    </MyText>
                                </Box>
                            </Box>
                        </MidleBarItem>
                        <MidleBarItem>
                            <img
                                src="/img/_x0020_1.png"
                                style={{ height: 103, width: 92 }}
                            />
                            <img
                                src="/img/Frame949.png"
                                style={{ height: 90 }}
                            />
                        </MidleBarItem>
                    </MidleBar>
                    <BorderLine />
                    <BottomBar>
                        <BottomBarItem sx={{ mr: 2 }}>
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                                onClick={() => handleDrawerOpen()}
                            >
                                <MenuIcon
                                    sx={{ color: "#55CD61" }}
                                    fontSize="large"
                                />
                            </IconButton>
                        </BottomBarItem>
                        <BottomBarItem
                            sx={{
                                width: "100%",

                                display: "flex",

                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <Form
                                onSubmit={handleSubmit(onSubmit)}
                                style={{
                                    marginTop: "-1px",
                                }}
                            >
                                {/* <Controller
                                    name="name"
                                    control={control}
                                    render={({
                                        field: { onChange, onBlur, value, ref },
                                    }) => ( */}
                                <Autocomplete
                                    id="free-solo-demo"
                                    freeSolo
                                    size="small"
                                    options={AutoCompliteData}
                                    renderInput={(params) => (
                                        <TextField
                                            variant="outlined"
                                            label="Поиск лекарства"
                                            {...params}
                                            fullWidth
                                            {...register("name")}
                                            // onChange={(e) =>
                                            //     handleAutoComplite(
                                            //         e.target.value
                                            //     )
                                            // }
                                            InputProps={{
                                                endAdornment: (
                                                    <Button
                                                        sx={{
                                                            mr: "-15px",
                                                            height: 30,
                                                        }}
                                                        type="submit"
                                                    >
                                                        <SearchIcon
                                                            sx={{
                                                                color: ThemeMain
                                                                    .palette
                                                                    .primary
                                                                    .main,
                                                            }}
                                                        />
                                                    </Button>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                                {/* )}
                                /> */}
                            </Form>
                        </BottomBarItem>
                        <BottomBarItem sx={{ ml: 2 }}>
                            <Button
                                sx={{
                                    color: ThemeMain.palette.primary.main,
                                    borderColor: ThemeMain.palette.primary.main,
                                    width: "max-content",
                                    mr: 1,
                                    borderRadius: 8,
                                }}
                                variant="outlined"
                                onClick={() => {
                                    navigate(ROUTES.STATUS_PRODUCT);
                                }}
                            >
                                Статус заказа
                            </Button>
                            {/* <IconButton size="small" sx={{ mr: 1 }}><img src="/img/Message_light.png" /></IconButton>
                        <IconButton size="small" sx={{ mr: 1 }}><img src="/img/File_dock_light.png" /></IconButton> */}
                            <IconButton
                                size="small"
                                sx={{ mr: 1 }}
                                onClick={() => {
                                    jwttoken
                                        ? handleFavoritesDrawerOpen()
                                        : handleLoginOpen();
                                }}
                            >
                                <FavoriteBorderIcon
                                    sx={{ color: "#55CD61" }}
                                    fontSize="large"
                                />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{ mr: 0.5 }}
                                onClick={() => {
                                    jwttoken
                                        ? navigate(ROUTES.BASICINFORMATION)
                                        : handleLoginOpen();
                                }}
                            >
                                <AccountCircleIcon
                                    sx={{ color: "#55CD61" }}
                                    fontSize="large"
                                />
                            </IconButton>
                            <MenuItem
                                onClick={() => {
                                    jwttoken
                                        ? navigate(ROUTES.BASKET)
                                        : handleLoginOpen();
                                }}
                            >
                                <img src="/img/Frame954.png" />
                            </MenuItem>
                        </BottomBarItem>
                    </BottomBar>
                </Main>
            </DesktopWrapper>
        );
    };

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    bgcolor: "white",
                    color: "#222222",
                    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.25);",
                }}
            >
                <Desktop />
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
