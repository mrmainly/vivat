import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./layout.css";
import { Header, Footer, MyContainer, MobileDown, Mobile } from "../components";

const Layout = () => {
    const [mobileToShow, setMobileToShow] = useState(false);

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setMobileToShow(true)
                : setMobileToShow(false);
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    return (
        <div style={{ overflow: "hidden" }}>
            <ToastContainer autoClose={1000} />
            {mobileToShow ? <Mobile /> : <Header />}
            <MyContainer
                wrapper={true}
                minHeight={600}
                sx={{
                    background: "#F7F9F7",
                }}
            >
                <Outlet />
            </MyContainer>
            {mobileToShow ? <MobileDown /> : ""}
            <Footer />
        </div>
    );
};

export default Layout;
