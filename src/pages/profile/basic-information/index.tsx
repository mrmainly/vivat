import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import { styled } from '@mui/system'

import { ProfileSideBar, MyOrdersTable } from '../../../components'
import ProfileForm from './components/ProfileForm'

const Main = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
    },
}))

const BasicInformation = () => {
    return (
        <Main>
            <ProfileSideBar title="Основная информация" />
            <Box sx={{ mt: 6.3, width: '100%' }}>
                <ProfileForm />
            </Box>
        </Main>
    )
}

export default BasicInformation