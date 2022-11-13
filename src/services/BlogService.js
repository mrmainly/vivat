import { api } from "./api";

export const blog = api.injectEndpoints({
    endpoints: (build) => ({
        getBlog: build.query({
            query: ({ query }) =>
                `api/v1/blogs/${query ? `?query=${query}` : ""}`,
            providesTags: ["Blog"],
        }),
        getBlogDetail: build.query({
            query: ({ id }) => `api/v1/blogs/${id}/`,
        }),
        getTopic: build.query({
            query: () => `api/v1/blogs/tags/`,
        }),
        getAdvantage: build.query({
            query: () =>
                `api/v1/blogs/advantage/?department=47CC211D-EECA-4D38-87A1-E255059DD16F`,
        }),
    }),
});

export const {
    useGetBlogQuery,
    useGetTopicQuery,
    useGetBlogDetailQuery,
    useGetAdvantageQuery,
} = blog;
