import { api } from "./api";

export const login = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query(body) {
                return {
                    url: `api/v1/users/login/`,
                    method: "POST",
                    body,
                };
            },
        }),
        registerV1: build.mutation({
            query(body) {
                return {
                    url: `api/v1/users/code/1/send/`,
                    method: "POST",
                    body,
                };
            },
        }),
        registerV2: build.mutation({
            query(body) {
                return {
                    url: `api/v1/users/code/2/verify/`,
                    method: "POST",
                    body,
                };
            },
        }),
        registerV3: build.mutation({
            query(body) {
                return {
                    url: `api/v1/users/code/3/set_password/`,
                    method: "POST",
                    body,
                };
            },
        }),
        forgotPasswordChangePhoneAndMail: build.mutation({
            query({ data, toggle }) {
                return {
                    url: `${
                        toggle == "phone"
                            ? `api/v1/users/reset_phone/`
                            : "api/v1/users/reset_email/"
                    }`,
                    method: "POST",
                    body:
                        toggle == "phone"
                            ? { phone: data.phone }
                            : { email: data.email },
                };
            },
        }),

        forgotPasswordV1: build.mutation({
            query(body) {
                return {
                    url: `api/v1/users/code/2/verify/`,
                    method: "POST",
                    body,
                };
            },
        }),
        forgotPasswordV2: build.mutation({
            query(body) {
                return {
                    url: `api/v1/users/code/1.5/resend/`,
                    method: "POST",
                    body,
                };
            },
        }),
        forgotPasswordV3: build.mutation({
            query(body) {
                return {
                    url: `api/v1/users/reset_password/`,
                    method: "POST",
                    body,
                };
            },
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterV1Mutation,
    useRegisterV2Mutation,
    useRegisterV3Mutation,
    useForgotPasswordChangePhoneAndMailMutation,
    useForgotPasswordV1Mutation,
    useForgotPasswordV2Mutation,
    useForgotPasswordV3Mutation,
} = login;
