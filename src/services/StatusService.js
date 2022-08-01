import { api } from "./api";

export const status = api.injectEndpoints({
    endpoints: (build) => ({
        getOrdersMeStatus: build.query({
            query: () => `api/v1/orders/me/status/`,
            // providesTags: ["Baskets"],
        }),
    }),
});

export const { useGetOrdersMeStatusQuery } = status;
