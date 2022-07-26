import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openLogin: false,
    openRegister: false,
    openForgotPassword: false,
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
    },
});

export default authModalSlice.reducer;
