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
        openAndAdded(state, action) {
            state.open = true;
            state.data = action.payload;
        },
        close(state, action) {
            state.open = false;
            state.data = {};
        },
    },
});

export default userSlice.reducer;
