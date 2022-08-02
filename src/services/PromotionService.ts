import { api } from "./api";

export const stocks = api.injectEndpoints({
    endpoints: (build) => ({
        getPromotion: build.query({
            query: () => `api/v1/promotion/`,
        }),
        getPromotionDetail: build.query({
            query: ({ id }) => `api/v1/promotion/${id}`,
            providesTags: ["Promotion"],
        }),
    }),
});

export const { useGetPromotionQuery, useGetPromotionDetailQuery } = stocks;
