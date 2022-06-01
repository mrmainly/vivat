import React from "react";

export const defaultStore = {
    auth_modal: {
        sign_in: false,
        sign_up: false,
        forgot: false,
    },
    drawers: {
        favorites_drawer: false,
    },
    register: {
        danger_text: false,
    },
    profile_modal: {
        status: "",
        open: false,
    },
    verify_code: {
        code: "",
    },
    register_version: {
        v1: true,
        password_version: false,
        verify_version: false,
    },
    status_product: {
        v1: false,
        v2: false,
    },
    favorite_status: {
        status: 0,
    },
};

export const StateContext = React.createContext({} as any);
export const DispatchContext = React.createContext({} as any);
