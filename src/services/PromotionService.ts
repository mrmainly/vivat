import { api } from "./api";

export const stocks = api.injectEndpoints({
    endpoints: (build) => ({
        getPromotion: build.query({
            query: () => `api/v1/promotion/`,
        }),
    }),
});

export const { useGetPromotionQuery } = stocks;
