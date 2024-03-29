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
            invalidatesTags: [{ type: "Favorites" }, { type: "Promotion" }, { type: "Baskets" }],
        }),
        addedFavorite: build.mutation({
            query({ id }) {
                return {
                    url: `api/v1/favorites/${id}/`,
                    method: "POST",
                };
            },
            invalidatesTags: [{ type: "Favorites" }, { type: "Product_detail" }, { type: "Promotion" }],
        }),
        deleteFavorite: build.mutation({
            query({ id }) {
                return {
                    url: `api/v1/favorites/${id}/`,
                    method: "DELETE",
                };
            },
            invalidatesTags: [{ type: "Favorites" }, { type: "Product_detail" }, { type: "Promotion" }, { type: "Products" }],
        }),
        deleteFavoriteInProduct: build.mutation({
            query({ id }) {
                return {
                    url: `api/v1/favorites/delete/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: [{ type: "Favorites" }, { type: "Product_detail" }, { type: "Promotion" }],
        }),
    }),
});

export const {
    useGetFavoritesQuery,
    useTransferFavoriteMutation,
    useAddedFavoriteMutation,
    useDeleteFavoriteMutation,
    useDeleteFavoriteInProductMutation,
    // useTransferToBasketMutation,
} = favoriotes;
