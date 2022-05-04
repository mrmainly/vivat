export const stateReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'notification':
            return { ...state, noti: action.payload }
            break;
        case 'auth_modal':
            return { ...state, auth_modal: action.payload }
            break;
        case 'register':
            return { ...state, register: action.payload }
            break;
        case 'profile_modal':
            return { ...state, profile_modal: action.payload }
            break;
        case 'drawers':
            return { ...state, drawers: action.payload }
        default:
            throw new Error();
    }
}