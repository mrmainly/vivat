import React, { useEffect, useState } from "react";
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
    const [mobileToShow, setMobileToShow] = useState(false);

    const jwttoken = cookie.get("jwttoken");

    // useEffect(() => {
    //     const setResponsiveness = () => {
    //         return window.innerWidth < 900
    //             ? setMobileToShow(true)
    //             : setMobileToShow(false);
    //     };
    //     setResponsiveness();
    //     window.addEventListener("resize", () => setResponsiveness());
    // }, []);

    return (
        <div style={{ overflow: "hidden" }}>
            <ToastContainer autoClose={1000} />
            <Header />
            <Mobile />
            <MyDrawer />
            {jwttoken ? <FavoritesDrawer /> : ""}
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
