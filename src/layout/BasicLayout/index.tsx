import React, { useContext, useState } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import { Header, Footer, MyContainer, SignInModal, SignUpModal, ForgotPasswordModal, MobileDown, ProfileDrawer, Notification, FavoritesDrawer } from '../../components'
import { HomeSlider } from '../../constructor'
import { StateContext } from '../../store'

const BasicLayout = () => {
    const [auth, setAuth] = useState(false)

    const location = useLocation()
    const state = useContext(StateContext)
    return (
        <div style={{ overflow: 'hidden' }}>
            <Header />
            <Notification />
            <SignInModal />
            <SignUpModal />
            <ForgotPasswordModal />
            <Notification />
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