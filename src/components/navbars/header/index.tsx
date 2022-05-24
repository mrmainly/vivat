import React, { useState, useContext, useEffect } from "react";

import {
    AppBar,
    MenuItem,
    Box,
    IconButton,
    Container,
    TextField,
    Grid,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import cookie from "js-cookie";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import ThemeMain from "../../../theme";
import {
    MyText,
    MyDrawer,
    BorderLine,
    ProfileDrawer,
    FavoritesDrawer,
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
    });
    // const [data, setData] = useState([]);

    const jwttoken = cookie.get("jwttoken");
    const navigate = useNavigate();
    const { drawerOpen, drawerProfileOpen, drawerFavoritesOpen } = state;
    const dispatch = useContext(DispatchContext);

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
    // useEffect(() => {
    //     API.getFavorites()
    //         .then((res) => {
    //             console.log(res);
    //             setData(res.data);
    //         })
    //         .catch((error) => console.log(error));
    // }, []);

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
                        <BottomBarItem sx={{ width: "100%" }}>
                            <TextField
                                variant="outlined"
                                label="Поиск лекарства"
                                size="small"
                                fullWidth
                            />
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
                                        : dispatch({
                                              type: "auth_modal",
                                              payload: {
                                                  sign_in: true,
                                                  sign_up: false,
                                                  forgot: false,
                                              },
                                          });
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
                                        ? handleProfileDrawerOpen()
                                        : dispatch({
                                              type: "auth_modal",
                                              payload: {
                                                  sign_in: true,
                                                  sign_up: false,
                                                  forgot: false,
                                              },
                                          });
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
                                        : dispatch({
                                              type: "auth_modal",
                                              payload: {
                                                  sign_in: true,
                                                  sign_up: false,
                                                  forgot: false,
                                              },
                                          });
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
            </AppBar>
            <MyDrawer state={drawerOpen} handleClose={handleDrawerClose} />
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
