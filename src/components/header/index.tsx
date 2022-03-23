import React, { useState, useEffect } from 'react'

import { AppBar, Toolbar, MenuItem, Box, Drawer, IconButton, Container, TextField } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom'
import { styled } from '@mui/system'

import { MyText } from '..'

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

const BorderLine = styled(Box)(({ theme }) => ({
    width: '100%',
    background: '#d4d4d4',
    height: 1,
    transform: 'scaleY(0.5)',
    marginTop: 5
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


const Header = () => {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const navigate = useNavigate()
    const { mobileView, drawerOpen } = state;

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
                        <img src="/img/Frame60.png" />
                    </MidleBarItem>
                    <MidleBarItem>

                    </MidleBarItem>
                    <MidleBarItem>
                        <img src="/img/_x0020_1.png" />
                        <img src="/img/Frame949.png" />
                    </MidleBarItem>
                </MidleBar>
                <BorderLine />
                <BottomBar>
                    <BottomBarItem sx={{ mr: 5 }}>
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <MenuIcon sx={{ color: '#55CD61' }} />
                        </IconButton>
                    </BottomBarItem>
                    <BottomBarItem sx={{ width: '100%' }}>
                        <TextField variant="outlined" label="Поиск лекарства" size="small" fullWidth />
                    </BottomBarItem>
                    <BottomBarItem sx={{ ml: 5 }}>
                        <IconButton size="small" sx={{ mr: 1 }}><img src="/img/Message_light.png" /></IconButton>
                        <IconButton size="small" sx={{ mr: 1 }}><img src="/img/File_dock_light.png" /></IconButton>
                        <IconButton size="small" sx={{ mr: 1 }}><img src="/img/Favorite_light.png" /></IconButton>
                        <IconButton size="small" sx={{ mr: 1 }}><img src="/img/User_cicrle_light.png" /></IconButton>
                        <MenuItem sx={{ mr: 1 }}><img src="/img/Frame954.png" /></MenuItem>
                    </BottomBarItem>
                </BottomBar>
            </Main>
        )
    }
    const Mobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', }}>

            </Box>
        )
    }
    return (
        <AppBar position="static" sx={{ bgcolor: 'white', color: '#222222' }}>
            <Container>
                <Toolbar>
                    {mobileView ? Mobile() : Desktop()}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header