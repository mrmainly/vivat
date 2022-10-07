import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import cookie from "js-cookie";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://xn----7sbbagaytx2c4ad.xn--p1ai/",
    prepareHeaders: (headers, { getState }) => {
        const token = cookie.get("jwttoken");
        headers.set("Accept-Encoding", "gzip");
        if (token) {
            headers.set("authorization", `Token ${token}`);
        }
        return headers;
    },
});

export const api = createApi({
    reducerPath: "splitApi",

    baseQuery: baseQuery,

    tagTypes: [
        "Baskets",
        "Products",
        "Markets_Detail",
        "Favorites",
        "Product_detail",
        "Blog",
        "Promotion",
    ],

    endpoints: () => ({}),
});

export const enhancedApi = api.enhanceEndpoints({
    endpoints: () => ({
        getPost: () => "test",
    }),
});
