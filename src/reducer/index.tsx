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
        case "status_product":
            return { ...state, status_product: action.payload };
        case "favorite_status":
            return { ...state, favorite_status: action.payload };
        case "basket":
            return { ...state, basket: action.payload };
        default:
            throw new Error();
    }
};
