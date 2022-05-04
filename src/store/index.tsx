import React from 'react';

export const defaultStore = {
    auth_modal: {
        sign_in: false,
        sign_up: false,
        forgot: false
    },
    drawers: {
        profile_drawer: false,
        main_drawer: false
    },
    register: {
        danger_text: false
    },
    profile_modal: {
        status: '',
        open: false
    }
}


export const StateContext = React.createContext({} as any);
export const DispatchContext = React.createContext({} as any);