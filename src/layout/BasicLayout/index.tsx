import React, { useContext } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

import { Header, Footer, MyContainer, SignInModal, SignUpModal, ForgotPasswordModal, MobileDown, ProfileDrawer, MyDrawer, Notification, FavoritesDrawer } from '../../components'
import { HomeSlider } from '../../constructor'
import { StateContext } from '../../store'

const BasicLayout = () => {
    const location = useLocation()
    const state = useContext(StateContext)
    return (
        <div style={{ overflow: 'hidden' }}>
            <Header />
            <Notification />
            <SignInModal />
            <SignUpModal />
            <ForgotPasswordModal />
            {state.drawers.favorites_drawer && <FavoritesDrawer />}
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