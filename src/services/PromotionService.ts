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
        getPromotionCatalog: build.query({
            query: () => `api/v1/promotion/collection/?is_active=true`,
        }),
    }),
});

export const { useGetPromotionQuery, useGetPromotionDetailQuery, useGetPromotionCatalogQuery } = stocks;
