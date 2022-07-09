import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./layout.css";
import { Header, Footer, MyContainer, MobileDown, Mobile } from "../components";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Layout = () => {
    const { width } = useWindowDimensions();

    return (
        <div style={{ overflow: "hidden" }}>
            <ToastContainer autoClose={1000} />
            {width < 900 ? <Mobile /> : <Header />}
            <MyContainer
                wrapper={true}
                minHeight={600}
                sx={{
                    background: "#F7F9F7",
                }}
            >
                <Outlet />
            </MyContainer>
            {width < 900 ? <MobileDown /> : ""}
            <Footer />
        </div>
    );
};

export default Layout;
