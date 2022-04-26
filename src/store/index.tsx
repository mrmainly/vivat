import React from 'react';

export const defaultStore = {
    alert: {
        status: '',
        text: '',
        active: false
    },
    tournamentId: {
        id: 0
    },
};



export const StateContext = React.createContext({} as any);
export const DispatchContext = React.createContext({} as any);