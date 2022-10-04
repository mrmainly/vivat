import { useState } from "react";
import { Box, Grid } from "@mui/material";

import { BlogCardMain, SkeletonBlog } from "../../../components";
import ConstructorThemeBlogList from "./components/lists/ConstructorThemeBlogList";
import {
  useGetBlogQuery,
  useGetTopicQuery,
} from "../../../services/BlogService";
import FilterBlogList from "./components/lists/FilterBlogList";

const Blog = () => {
  const [topic, setTopic] = useState("");

  const { data: popularity, isFetching: isFetchingPopular } = useGetBlogQuery({
    query: "popularity_all_time",
    type: "query",
  });
  const { data: created, isFetching: isFetchingCreated } = useGetBlogQuery({
    query: "created",
    type: "query",
  });
  const { data: theme, isFetching } = useGetBlogQuery({
    query: topic,
    type: "topic",
  });
  const { data: topics, isLoading: isLoadingTopics } = useGetTopicQuery("");

  const handleSetTopics = (e: any) => {
    setTopic(e.target.value);
  };

  if (isFetchingPopular && isFetchingCreated) {
    return <SkeletonBlog />;
  }

  if (
    !popularity?.result?.length &&
    !created?.result?.length &&
    !theme?.result?.length
  ) {
    return <div>На данный момент нет новостей</div>;
  }

  return (
    <>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <FilterBlogList
            name="Последние статьи"
            data={created}
            value="created"
          />
          <Grid item lg={5} xl={5} md={4} sm={6} xs={12}>
            {created.results.slice(0, 1).map((item: any, index: number) => (
              <BlogCardMain key={index} {...item} />
            ))}
          </Grid>
          <FilterBlogList
            name="Популярное"
            data={popularity}
            value="popularity_all_time"
          />
        </Grid>
        <ConstructorThemeBlogList
          data={theme}
          topics={topics}
          isFetching={isFetching}
          handleSetTopics={handleSetTopics}
          isLoadingTopics={isLoadingTopics}
        />
      </Box>
    </>
  );
};

export default Blog;
