import { api } from "./api";

export const products = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: ({ id, currentPage, formState, sort }) =>
                `api/v1/goods/?group_id=${id}&page=${currentPage} ${
                    formState
                        ? `
                &notRecept=${
                    formState.notRecept ? formState.notRecept : ""
                }&jnvls=${
                              formState.jnvls ? formState.jnvls : ""
                          }&ordering_qty=${
                              formState.ordering_qty
                                  ? formState.ordering_qty
                                  : ""
                          }&price_min=${formState.min_price}&price_max=${
                              formState.max_price
                          }&producer=${formState.producer}${
                              sort == "name" || sort == "-name"
                                  ? `&ordering_name=${sort ? sort : ""}`
                                  : ""
                          }${
                              sort == "priceSale" || sort == "-priceSale"
                                  ? `&ordering_price=${sort ? sort : ""}`
                                  : ""
                          }${
                              sort == "good_views" || sort == "-good_views"
                                  ? `&good_views=${sort ? sort : ""}`
                                  : ""
                          }`
                        : ""
                }`,
            providesTags: ["Products"],
        }),
        getProductCatalog: build.query({
            query: () => `api/v1/goods/catalogue/`,
        }),
        getProductDetail: build.query({
            query: ({ id }) => `api/v1/goods/${id}/`,
            providesTags: ["Products", "Product_detail"],
        }),
        getProductAnal: build.query({
            query: ({ id }) => `api/v1/goods/analogue/${id}`,
            providesTags: ["Products"],
        }),
    }),
});

export const {
    useGetProductsQuery,
    useGetProductCatalogQuery,
    useGetProductDetailQuery,
    useGetProductAnalQuery,
} = products;
