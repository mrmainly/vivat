import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import cookie from "js-cookie";

import "./layout.css";
import {
    Header,
    Footer,
    MyContainer,
    MobileDown,
    Mobile,
    MyDrawer,
    FavoritesDrawer,
    SignInModal,
    SignUpModal,
    ForgotPasswordModal,
} from "../components";

const Layout = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <ToastContainer autoClose={1000} />
            <Header />
            <Mobile />
            <MyDrawer />
            <FavoritesDrawer />
            <SignInModal />
            <SignUpModal />
            <ForgotPasswordModal />
            <MyContainer
                wrapper={true}
                minHeight={600}
                sx={{
                    background: "#F7F9F7",
                }}
            >
                <Outlet />
            </MyContainer>
            <MobileDown />
            <Footer />
        </div>
    );
};

export default Layout;
