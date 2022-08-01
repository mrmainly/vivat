import { api } from "./api";

export const favoriotes = api.injectEndpoints({
    endpoints: (build) => ({
        getFavorites: build.query({
            query: () => `api/v1/favorites/`,
            providesTags: ["Favorites"],
        }),
        transferFavorite: build.mutation({
            query({ id }) {
                return {
                    url: `api/v1/favorites/transfer/${id}/`,
                    method: "POST",
                };
            },
            invalidatesTags: [{ type: "Favorites" }],
        }),
        addedFavorite: build.mutation({
            query({ id }) {
                return {
                    url: `api/v1/favorites/${id}/`,
                    method: "POST",
                };
            },
            invalidatesTags: [
                { type: "Favorites" },
                { type: "Products" },
                { type: "Product_detail" },
            ],
        }),
        deleteFavorite: build.mutation({
            query({ id }) {
                return {
                    url: `api/v1/favorites/${id}/`,
                    method: "DELETE",
                };
            },
            invalidatesTags: [
                { type: "Products" },
                { type: "Favorites" },
                { type: "Product_detail" },
            ],
        }),
        transferToBasket: build.mutation({
            query({ id }) {
                return {
                    url: `api/v1/favorites/transfer/${id}/`,
                    method: "DELETE",
                };
            },
            invalidatesTags: [{ type: "Baskets" }],
        }),
    }),
});

export const {
    useGetFavoritesQuery,
    useTransferFavoriteMutation,
    useAddedFavoriteMutation,
    useDeleteFavoriteMutation,
    useTransferToBasketMutation,
} = favoriotes;
