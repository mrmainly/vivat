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
        default:
            throw new Error();
    }
}