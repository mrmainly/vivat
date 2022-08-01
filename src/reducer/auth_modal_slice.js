import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openLogin: false,
    openRegister: false,
    openForgotPassword: false,
    auth_status: false,
};

export const authModalSlice = createSlice({
    name: "authModalSlice",
    initialState,
    reducers: {
        openLoginModal(state, action) {
            state.openLogin = action.payload;
        },
        openRegisterModal(state, action) {
            state.openRegister = action.payload;
        },
        openForgotPasswordModal(state, action) {
            state.openForgotPassword = action.payload;
        },
        changeAuthStatus(state, action) {
            state.auth_status = action.payload;
        },
    },
});

export default authModalSlice.reducer;
