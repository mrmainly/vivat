import React from 'react'

import { Box, IconButton, Grid } from '@mui/material'
import { AddBox } from '@mui/icons-material'
import { styled } from '@mui/system'
import MyContainer from '../../container'

const MobileBox = styled(Box)(({ theme }) => ({
    background: 'white',
    height: 48,
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    },
    boxShadow: '0px -1px 12px rgba(0, 0, 0, 0.1)'
}))

const MobileDown = () => {
    const icon_data = [
        {
            icon: '/img/darhboard.png',
            func: ''
        },
        {
            icon: '/img/Component17.png',
            func: ''
        },
        {
            icon: '/img/Favorite_light.png',
            func: ''
        },
        {
            icon: '/img/User_cicrle_light.png',
            func: ''
        },
        {
            icon: '/img/Bag_light.png',
            func: ''
        }
    ]//
    return (
        <MobileBox>
            <MyContainer wrapper={false}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    {icon_data.map((item, index) => (
                        <Box sx={{ display: 'flex', justifyContent: 'center' }} key={index}>
                            <IconButton><img src={item.icon} /></IconButton>
                        </Box>
                    ))}
                </Box>
            </MyContainer>
        </MobileBox>
    )
}

export default MobileDown