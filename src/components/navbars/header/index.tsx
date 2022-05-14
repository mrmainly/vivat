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

const MobileWrapper = styled(Container)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("md")]: {
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
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
    padding: 5,
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
    });
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

    const midleItems = [
        {
            icon: "",
        },
    ];

    const Desktop = () => {
        return (
            <DesktopWrapper maxWidth="xl">
                <Main aria-label="mailbox folders">
                    <TopBar>
                        <TopBarItem>
                            <MenuItem>
                                <MyText variant="body1">Якутск</MyText>
                            </MenuItem>
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
                                <img src="/img/Frame60.png" />
                            </MenuItem>
                        </MidleBarItem>
                        <MidleBarItem sx={{ width: "100%", ml: 2, mr: 2 }}>
                            <MidleBarItemSelect container>
                                {/* <Grid item lg={6} xl={6}>
                                <MySelect title="Якутск" defaultValue="asd">
                                    {array.map((item, index) => (
                                        <MenuItem key={index}>{item}</MenuItem>
                                    ))}
                                </MySelect>
                                <MySelect title="Якутск" defaultValue="asd">
                                    {array.map((item, index) => (
                                        <MenuItem key={index}>{item}</MenuItem>
                                    ))}
                                </MySelect>
                            </Grid>
                            <Grid item lg={6} xl={6}>

                            </Grid> */}
                                <GridMidle item xs={6}>
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
                                </GridMidle>
                                <GridMidle item xs={6}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <img src="/img/Frame.png" />
                                        <Box>
                                            <MyText>8 800 800-80-80</MyText>
                                            <MyText
                                                variant="body2"
                                                sx={{ color: "#999999" }}
                                            >
                                                Заказать звонок
                                            </MyText>
                                        </Box>
                                    </Box>
                                </GridMidle>
                                <GridMidle item xs={6}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
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
                                </GridMidle>
                                <GridMidle item xs={6}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            mt: 1,
                                        }}
                                    >
                                        <img src="/img/FramePhone.png" />
                                        <Box>
                                            <MyText>8 800 800-80-80</MyText>
                                            <MyText
                                                variant="body2"
                                                sx={{ color: "#999999" }}
                                            >
                                                Заказать звонок
                                            </MyText>
                                        </Box>
                                    </Box>
                                </GridMidle>
                            </MidleBarItemSelect>
                        </MidleBarItem>
                        <MidleBarItem>
                            <img src="/img/_x0020_1.png" />
                            <img src="/img/Frame949.png" />
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
                            <MenuItem onClick={() => navigate(ROUTES.BASKET)}>
                                <img src="/img/Frame954.png" />
                            </MenuItem>
                        </BottomBarItem>
                    </BottomBar>
                </Main>
            </DesktopWrapper>
        );
    };
    const Mobile = () => {
        return (
            <MobileWrapper>
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
                <Mobile />
            </AppBar>
            <MyDrawer state={drawerOpen} handleClose={handleDrawerClose} />
            <ProfileDrawer
                state={drawerProfileOpen}
                handleClose={handleProfileDrawerClose}
            />
            {drawerFavoritesOpen && (
                <FavoritesDrawer
                    state={drawerFavoritesOpen}
                    handleClose={handleFavoritesDrawerClose}
                />
            )}
        </>
    );
};

export default Header;
