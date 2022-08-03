import { api } from "./api";

export const address = api.injectEndpoints({
    endpoints: (build) => ({
        getAddress: build.query({
            query: ({ mapCenter }) => ({
                url: `api/v1/departments/organisations/1`,
                dependencies: mapCenter,
            }),
        }),
    }),
});

export const { useGetAddressQuery } = address;
