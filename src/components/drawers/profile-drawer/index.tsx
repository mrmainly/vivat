import React from 'react'

import { Drawer, Box, MenuItem, IconButton } from '@mui/material'

import { MyLink, BorderLine, MyText } from '../..'
import { MyDrawerProps } from '../../../interface'

const ProfileDrawer: React.FC<MyDrawerProps> = ({ setState, drawerOpen }) => {
    const handleDrawerClose = () =>
        setState((prevState: any) => ({ ...prevState, drawerProfileOpen: false }))
    return (
        <Drawer
            {...{
                anchor: "right",
                open: drawerOpen,
                onClose: handleDrawerClose,
            }}
        >
            <Box style={{
                width: 300, padding: 15, height: '100%', color: '#20B12E'
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <IconButton onClick={() => handleDrawerClose()}><img src="/img/Close_round_light.png" /></IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', ml: 1.5 }}>
                    <img src="/img/User_cicrle_light.png" />
                    <MyText variant="h6" sx={{ ml: 1 }}>Иванов иван иванович</MyText>
                </Box>
                <BorderLine sx={{ mb: 2, mt: 2 }} />
                <MyLink href="" sx={{ color: '#20B12E' }}>МОИ ЗАКАЗЫ</MyLink>
                <MyLink href="" sx={{ color: '#20B12E', mt: 1 }}>МОИ ДАННЫЕ</MyLink>
                <MyLink href="" sx={{ color: '#20B12E', mt: 1 }}>ПРОГРАММА ЛОЯЛЬНОСТИ</MyLink>
                <BorderLine sx={{ mb: 2, mt: 2 }} />
                <MenuItem>Выйти</MenuItem>
            </Box>
        </Drawer>
    )
}

export default ProfileDrawer