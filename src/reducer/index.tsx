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
            break;
        case 'verify_code':
            return { ...state, verify_code: action.payload }
            break;
        case 'register_version':
            return { ...state, register_version: action.payload }
            break;
        case 'count':
            return { ...state, count: action.payload }
        default:
            throw new Error();
    }
}