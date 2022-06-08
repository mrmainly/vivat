import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./layout.css";
import { Header, Footer, MyContainer, MobileDown, Mobile } from "../components";

const Layout = () => {
    const [mobileView, setMobileView] = useState(false);

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
        </div>
    );
};

export default Layout;
