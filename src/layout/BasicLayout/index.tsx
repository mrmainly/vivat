import React from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import { Header, Footer, MyContainer, SignInModal, SignUpModal, ForgotPasswordModal, MobileDown, ProfileDrawer, MyDrawer, Notification } from '../../components'
import { HomeSlider } from '../../constructor'

const BasicLayout = () => {
    const location = useLocation()
    return (
        <div style={{ overflow: 'hidden', }}>
            <Header />
            {/* <Notification /> */}
            <SignInModal />
            <SignUpModal />
            <ForgotPasswordModal />
            <Notification />
            <ProfileDrawer />
            <MyDrawer />
            {location.pathname === '/' ? <HomeSlider /> : ''}
            <MyContainer wrapper={true} minHeight={600} sx={{
                background: '#F7F9F7',
                pb: 8,
                pt: 3
            }}>
                <Outlet />
            </MyContainer>
            <MobileDown />
            <Footer />
            {/* <Footer /> */}
        </div>
    )
}

export default BasicLayout