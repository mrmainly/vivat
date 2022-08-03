import { api } from "./api";

export const address = api.injectEndpoints({
    endpoints: (build) => ({
        getDeportaments: build.query({
            query: () => ({
                url: `api/v1/departments/`,
            }),
        }),
    }),
});

export const { useGetDeportamentsQuery } = address;
