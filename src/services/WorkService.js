import { api } from "./api";

export const work = api.injectEndpoints({
    endpoints: (build) => ({
        getWork: build.query({
            query: ({ city }) => ({
                url: `api/v1/employments/`,
                dependencies: city,
            }),
        }),
        getWorkDetail: build.query({
            query: ({ id }) => ({
                url: `api/v1/employments/${id}/`,
            }),
        }),
    }),
});

export const { useGetWorkQuery, useGetWorkDetailQuery } = work;
