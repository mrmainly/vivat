import React from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import { Header, Footer, MyContainer, SignInModal, SignUpModal, ForgotPasswordModal } from '../../components'
import { HomeSlider } from '../../constructor'

const BasicLayout = () => {
    const location = useLocation()
    return (
        <div>
            <Header />
            {/* <Notification /> */}
            <SignInModal />
            <SignUpModal />
            <ForgotPasswordModal />
            {location.pathname === '/' ? <HomeSlider /> : ''}
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

export default BasicLayout