import { api } from "./api";

export const login = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query(body) {
                return {
                    url: `users/login`,
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
    }),
});

export const { useLoginMutation, useRegisterV1Mutation } = login;
