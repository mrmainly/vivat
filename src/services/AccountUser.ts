import { api } from "./api";

export const accountUser = api.injectEndpoints({
    endpoints: (build) => ({
        getAccountUser: build.query({
            query: () => `api/v1/users/me/`,
        }),
        patchAccountUser: build.mutation({
            query(body) {
                return {
                    url: `api/v1/users/me/`,
                    method: "PATCH",
                    body,
                };
            },
        }),
    }),
});

export const { useGetAccountUserQuery, usePatchAccountUserMutation } =
    accountUser;
