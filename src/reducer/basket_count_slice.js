import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

export const basketCountSlice = createSlice({
    name: "basketCountSlice",
    initialState,
    reducers: {
        basketCount(state, action) {
            state.count = action.payload;
        },
    },
});

export default basketCountSlice.reducer;
