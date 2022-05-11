import React, { useContext, useState } from 'react'

import { Box, IconButton } from '@mui/material'
import { styled } from '@mui/system'

import { DispatchContext } from '../../../store'
import MyContainer from '../../container'
import { ProfileDrawer } from '../..'

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
    const [profileDrawer, setProfileDrawer] = useState(false)

    const handleProfileDrawerClose = () => setProfileDrawer(false)

    const dispatch = useContext(DispatchContext)

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
                            <IconButton onClick={() => setProfileDrawer(true)}><img src={item.icon} /></IconButton>
                        </Box>
                    ))}
                </Box>
            </MyContainer>
            <ProfileDrawer state={profileDrawer} handleClose={handleProfileDrawerClose} />
        </MobileBox>
    )
}

export default MobileDown