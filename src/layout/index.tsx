import React from 'react'

import { Outlet } from 'react-router-dom'
import { styled } from '@mui/system'
import { Box } from '@mui/material'

import { Header, Footer } from '../components'

const Main = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    overflow: 'hidden',
    background: '#F7F9F7'
}))

const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            {/* <Notification /> */}
            <Main>
                <Outlet />
            </Main>
            <Footer />
            {/* <Footer /> */}
        </div>
    )
}

export default Layout