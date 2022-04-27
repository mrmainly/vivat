import React from 'react';

export const defaultStore = {
    auth_modal: {
        sign_in: false,
        sign_up: false,
        forgot: false
    },
}


export const StateContext = React.createContext({} as any);
export const DispatchContext = React.createContext({} as any);