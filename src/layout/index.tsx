import React from 'react'

import { Outlet } from 'react-router-dom'
import { styled } from '@mui/system'
import { Box } from '@mui/material'

import { Header, Footer, MyContainer } from '../components'

const Main = styled(Box)(({ theme }) => ({

}))

const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            {/* <Notification /> */}
            <MyContainer wrapper={true} minHeight={600} sx={{
                overflow: 'hidden',
                background: '#F7F9F7',
                pb: 8,
                pt: 3
            }}>
                <Outlet />
            </MyContainer>
            <Footer />
            {/* <Footer /> */}
        </div>
    )
}

export default Layout