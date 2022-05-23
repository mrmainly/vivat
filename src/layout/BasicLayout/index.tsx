import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./layout.css";
import {
    Header,
    Footer,
    MyContainer,
    SignInModal,
    SignUpModal,
    ForgotPasswordModal,
    MobileDown,
    Mobile,
} from "../../components";
import { HomeSlider } from "../../constructor";
import { StateContext } from "../../store";

const BasicLayout = () => {
    const [mobileView, setMobileView] = useState(false);

    const location = useLocation();
    const state = useContext(StateContext);

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setMobileView(true)
                : setMobileView(false);
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    return (
        <div style={{ overflow: "hidden" }}>
            <ToastContainer autoClose={1000} />
            {mobileView ? <Mobile /> : <Header />}
            <SignInModal />
            <SignUpModal />

            {state.auth_modal.forgot && <ForgotPasswordModal />}
            {location.pathname === "/" ? <HomeSlider /> : ""}
            <MyContainer
                wrapper={true}
                minHeight={600}
                sx={{
                    background: "#F7F9F7",
                }}
            >
                <Outlet />
            </MyContainer>
            {mobileView ? <MobileDown /> : ""}
            <Footer />
            {/* <Footer /> */}
        </div>
    );
};

export default BasicLayout;
