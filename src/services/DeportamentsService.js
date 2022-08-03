import { api } from "./api";

export const deportaments = api.injectEndpoints({
    endpoints: (build) => ({
        getDeportaments: build.query({
            query: () => ({
                url: `api/v1/departments/`,
            }),
        }),
    }),
});

export const { useGetDeportamentsQuery } = deportaments;
