import { api } from "./api";

export const blog = api.injectEndpoints({
    endpoints: (build) => ({
        getBlog: build.query({
            query: ({ query, type }) =>
                `api/v1/blogs/${
                    type == "query"
                        ? query
                            ? `?query=${query}`
                            : ""
                        : `?tags_query=${query}`
                }`,
            providesTags: ["Blog"],
        }),
        getBlogDetail: build.query({
            query: ({ id }) => `api/v1/blogs/${id}/`,
        }),
        getTopic: build.query({
            query: () => `api/v1/blogs/tags/`,
        }),
    }),
});

export const { useGetBlogQuery, useGetTopicQuery, useGetBlogDetailQuery } =
    blog;
