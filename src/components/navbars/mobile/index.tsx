import React from 'react'

import { Box, IconButton, Button } from '@mui/material'
import { styled } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';

import ThemeMain from '../../../theme'

const IconButtomBagLight = styled(IconButton)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
}))

const Mobile = () => {
    return (
        <Box style={{ height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* <Box sx={{ display: 'flex' }}>
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleDrawerOpen}>
                    <MenuIcon sx={{ color: '#55CD61' }} fontSize="large" />
                </IconButton>
                <img src="/img/Frame60.png" style={{ height: 48 }} />
            </Box>
            <Box sx={{ display: 'flex' }}>
                <Button sx={{ color: ThemeMain.palette.primary.main, borderColor: ThemeMain.palette.primary.main, width: 'max-content', mr: 1 }} variant="outlined">
                    Статус заказа
                </Button>
                <IconButtomBagLight size="small" sx={{ mr: 1 }}><img src="/img/Bag_light.png" /></IconButtomBagLight>
            </Box> */}
        </Box>
    )
}

export default Mobile