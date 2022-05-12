import React from 'react';

export const defaultStore = {
    auth_modal: {
        sign_in: false,
        sign_up: false,
        forgot: false
    },
    drawers: {
        profile_drawer: false,
        main_drawer: false,
        favorites_drawer: false
    },
    count: {
        value: 0
    },
    register: {
        danger_text: false
    },
    profile_modal: {
        status: '',
        open: false
    },
    verify_code: {
        code: '',
    },
    register_version: {
        v1: true,
        password_version: false,
        verify_version: false
    },
    noti: {
        status: '',
        text: '',
        active: false
    },
}


export const StateContext = React.createContext({} as any);
export const DispatchContext = React.createContext({} as any);