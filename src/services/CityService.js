import { api } from "./api";

export const city = api.injectEndpoints({
    endpoints: (build) => ({
        getCity: build.query({
            query: () => ({
                url: `api/v1/cities/`,
            }),
        }),
    }),
});

export const { useGetCityQuery } = city;
