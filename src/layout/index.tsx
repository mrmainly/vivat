import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import { Header, Footer, MyContainer, MobileDown, Mobile } from "../components";

const LazySignInModal = lazy(() => import("../components/modals/sign-in"));
const LazySignUpModal = lazy(() => import("../components/modals/sign-up"));
const LazyForgotModal = lazy(
    () => import("../components/modals/forgot-password")
);
const LazyMyDrawer = lazy(() => import("../components/drawers/main-drawer"));
const LazyFavoriteDrawer = lazy(
    () => import("../components/drawers/favorites-drawer")
);

const Layout = () => {
    const { openLogin, openRegister, openForgotPassword } = useSelector(
        (state: any) => state.auth_modal_slice
    );

    return (
        <div style={{ overflow: "hidden" }}>
            <ToastContainer autoClose={1000} />
            <Header />
            <Mobile />
            <Suspense fallback={null}>
                {openLogin && <LazySignInModal />}
                {openRegister && <LazySignUpModal />}
                {openForgotPassword && <LazyForgotModal />}
                <LazyMyDrawer />
                <LazyFavoriteDrawer />
            </Suspense>
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
