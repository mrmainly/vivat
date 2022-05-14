export const stateReducer = (state: any, action: any) => {
    switch (action.type) {
        case "auth_modal":
            return { ...state, auth_modal: action.payload };
        case "register":
            return { ...state, register: action.payload };
        case "profile_modal":
            return { ...state, profile_modal: action.payload };
        case "drawers":
            return { ...state, drawers: action.payload };
        case "verify_code":
            return { ...state, verify_code: action.payload };
        case "register_version":
            return { ...state, register_version: action.payload };
        case "count":
            return { ...state, count: action.payload };
        default:
            throw new Error();
    }
};
