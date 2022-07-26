import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorite_open: false,
    main_drawer_open: false,
};

export const drawersSlice = createSlice({
    name: "authModalSlice",
    initialState,
    reducers: {
        handleFavoritesDrawerOpen(state, action) {
            state.favorite_open = action.payload;
        },
        handleMainDrawerOpen(state, action) {
            state.main_drawer_open = action.payload;
        },
    },
});

export default drawersSlice.reducer;
