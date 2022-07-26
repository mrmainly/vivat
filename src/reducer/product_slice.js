import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: false,
    error: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userFetching(state) {
            state.isLoading = true;
        },
        userFetchingSuccess(state, action) {
            state.isLoading = false;
            state.error = "";
            state.users = action.payload;
        },
        userFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export default userSlice.reducer;
