export const stateReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'notification':
            return { ...state, noti: action.payload }
        case 'auth_modal':
            return { ...state, auth_modal: action.payload }
        default:
            throw new Error();
    }
}