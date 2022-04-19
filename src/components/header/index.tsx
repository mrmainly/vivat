import React, { useState, useEffect } from 'react'

import { AppBar, Toolbar, MenuItem, Box, IconButton, Container, TextField, Grid } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom'
import { styled } from '@mui/system'

import { MyText, MySelect, MyLink, MyDrawer, BorderLine, ProfileDrawer } from '..'
import ROUTES from '../../routes';

const Main = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%'
}))

const TopBar = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 5
}))

const TopBarItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))


const MidleBar = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 5
}))

const MidleBarItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}))

const BottomBar = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 5
}))

const BottomBarItem = styled(Box)(({ theme }) => ({
    display: 'flex',
}))

const MidleBarItemSelect = styled(Grid)(({ theme }) => ({

}))


const Header = () => {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
        drawerProfileOpen: false
    });
    const navigate = useNavigate()
    const { mobileView, drawerOpen, drawerProfileOpen } = state;

    const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));

    const array = ['asd', 'asd']

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1200
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const Desktop = () => {
        return (
            <Main aria-label="mailbox folders">
                <TopBar >
                    <TopBarItem>
                        <MenuItem>
                            <MyText variant="body1">Якутск</MyText>
                        </MenuItem>
                        <MenuItem>
                            <MyText variant="body1">Наши аптеки</MyText>
                        </MenuItem>
                    </TopBarItem>
                    <TopBarItem>
                        <MenuItem>
                            <MyText variant="body1">Русский язык</MyText>
                        </MenuItem>
                        <MenuItem>
                            <MyText variant="body1">8 (914) 225-25-25</MyText>
                        </MenuItem>
                        <MenuItem>
                            <MyText variant="body1">Как сделать заказ</MyText>
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
                    <MidleBarItem sx={{ width: '100%', ml: 2, mr: 2 }}>
                        <MidleBarItemSelect container >
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
                            <Grid item xs={6}>
                                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                    <img src="/img/Vector.png" style={{ marginLeft: 8, marginRight: 8 }} />
                                    <Box>
                                        <MyText>Якутск</MyText>
                                        <MyText variant="body2" sx={{ color: '#999999' }}>Город</MyText>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="/img/Frame.png" />
                                    <Box>
                                        <MyText>8 800 800-80-80</MyText>
                                        <MyText variant="body2" sx={{ color: '#999999' }}>Заказать звонок</MyText>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                    <img src="/img/Frame212.png" />
                                    <Box>
                                        <MyText>Дзержинского, 34</MyText>
                                        <MyText variant="body2" sx={{ color: '#999999' }}>Адрес аптеки</MyText>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                    <img src="/img/FramePhone.png" />
                                    <Box>
                                        <MyText>8 800 800-80-80</MyText>
                                        <MyText variant="body2" sx={{ color: '#999999' }}>Заказать звонок</MyText>
                                    </Box>
                                </Box>
                            </Grid>
                        </MidleBarItemSelect>
                    </MidleBarItem>
                    <MidleBarItem>
                        <img src="/img/_x0020_1.png" />
                        <img src="/img/Frame949.png" />
                    </MidleBarItem>
                </MidleBar>
                <BorderLine />
                <BottomBar>
                    <BottomBarItem sx={{ mr: 5 }}>
                        <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleDrawerOpen}>
                            <MenuIcon sx={{ color: '#55CD61' }} fontSize="large" />
                        </IconButton>
                    </BottomBarItem>
                    <BottomBarItem sx={{ width: '100%' }}>
                        <TextField variant="outlined" label="Поиск лекарства" size="small" fullWidth />
                    </BottomBarItem>
                    <BottomBarItem sx={{ ml: 5 }}>
                        <IconButton size="small" sx={{ mr: 1 }}><img src="/img/Message_light.png" /></IconButton>
                        <IconButton size="small" sx={{ mr: 1 }}><img src="/img/File_dock_light.png" /></IconButton>
                        <IconButton size="small" sx={{ mr: 1 }}><img src="/img/Favorite_light.png" /></IconButton>
                        <IconButton size="small" sx={{ mr: 1 }} onClick={() => setState((prevState) => ({ ...prevState, drawerProfileOpen: true }))}><img src="/img/User_cicrle_light.png" /></IconButton>
                        <MenuItem sx={{ mr: 1 }} onClick={() => navigate(ROUTES.BASKET)}><img src="/img/Frame954.png" /></MenuItem>
                    </BottomBarItem>
                </BottomBar>
            </Main >
        )
    }
    const Mobile = () => {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', }}>

            </Box>
        )
    }
    return (
        <AppBar position="static" sx={{ bgcolor: 'white', color: '#222222' }}>
            <Container>
                {mobileView ? Mobile() : Desktop()}
            </Container>
            <MyDrawer setState={setState} drawerOpen={drawerOpen} />
            <ProfileDrawer setState={setState} drawerOpen={drawerProfileOpen} />
        </AppBar>
    )
}

export default Header