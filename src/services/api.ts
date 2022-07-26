import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import cookie from "js-cookie";

const jwttoken = cookie.get("jwttoken");

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
    baseUrl: "https://xn----7sbbagaytx2c4ad.xn--p1ai/",
    prepareHeaders: (headers, { getState }) => {
        // By default, if we have a token in the store, let's use that for authenticated requests
        const token = jwttoken;
        if (token) {
            headers.set("authentication", `Token ${token}`);
        }
        return headers;
    },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const api = createApi({
    reducerPath: "splitApi",

    baseQuery: baseQueryWithRetry,

    tagTypes: ["Products", "Provider"],

    endpoints: () => ({}),
});

export const enhancedApi = api.enhanceEndpoints({
    endpoints: () => ({
        getPost: () => "test",
    }),
});
