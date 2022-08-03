import { api } from "./api";

export const baskets = api.injectEndpoints({
    endpoints: (build) => ({
        getBasket: build.query({
            query: () => `api/v1/carts/`,
            providesTags: ["Baskets"],
        }),
        patchBasket: build.mutation({
            query(body) {
                return {
                    url: `api/v1/users/me/`,
                    method: "PATCH",
                    body,
                };
            },
        }),
        deleteBasket: build.mutation({
            query({ id }) {
                return {
                    url: `api/v1/carts/${id}/`,
                    method: "DELETE",
                };
            },
            invalidatesTags: [{ type: "Baskets" }],
        }),
        transferBasket: build.mutation({
            query({ id }) {
                return {
                    url: `api/v1/carts/${id}/`,
                    method: "POST",
                };
            },
            invalidatesTags: [{ type: "Baskets" }],
        }),
        deleteBasketAll: build.mutation({
            query() {
                return {
                    url: `api/v1/carts/delete_all_items/`,
                    method: "DELETE",
                };
            },
            invalidatesTags: [{ type: "Baskets" }],
        }),
        patchBasketCount: build.mutation({
            query({ id, newCount }) {
                return {
                    url: `api/v1/carts/${id}/`,
                    method: "PATCH",
                    body: {
                        count: newCount,
                    },
                };
            },
            invalidatesTags: [{ type: "Baskets" }],
        }),
        postBasket: build.mutation({
            query(body) {
                return {
                    url: `api/v1/carts/complete/`,
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: [{ type: "Baskets" }],
        }),
    }),
});

export const {
    useGetBasketQuery,
    usePatchBasketMutation,
    useDeleteBasketAllMutation,
    useDeleteBasketMutation,
    useTransferBasketMutation,
    usePatchBasketCountMutation,
    usePostBasketMutation,
} = baskets;
