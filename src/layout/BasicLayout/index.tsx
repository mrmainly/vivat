import React, { useContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.minimal.css";

import {
    Header,
    Footer,
    MyContainer,
    SignInModal,
    SignUpModal,
    ForgotPasswordModal,
    MobileDown,
} from "../../components";
import { HomeSlider } from "../../constructor";
import { StateContext } from "../../store";

const BasicLayout = () => {
    const location = useLocation();
    const state = useContext(StateContext);

    return (
        <div style={{ overflow: "hidden" }}>
            <Header />
            <SignInModal />
            <SignUpModal />
            <ToastContainer autoClose={1000} />
            {state.auth_modal.forgot && <ForgotPasswordModal />}
            {location.pathname === "/" ? <HomeSlider /> : ""}
            <MyContainer
                wrapper={true}
                minHeight={600}
                sx={{
                    background: "#F7F9F7",
                    pb: 8,
                    pt: 3,
                }}
            >
                <Outlet />
            </MyContainer>
            <MobileDown />
            <Footer />
            {/* <Footer /> */}
        </div>
    );
};

export default BasicLayout;
