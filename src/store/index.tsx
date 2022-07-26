import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
// import productReducer from "../reducer/product_slice";
import { api } from "../services/api";
import auth_modal_slice from "../reducer/auth_modal_slice";
import drawers_slice from "../reducer/drawers_slice";

const rootReducer = combineReducers({
    // productReducer,
    [api.reducerPath]: api.reducer,
    auth_modal_slice,
    drawers_slice,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),
    });
};
