import { useState } from "react";
import {
    Box,
    Grid,
    MenuItem,
    CircularProgress,
    FormControl,
    InputLabel,
    Select,
} from "@mui/material";
import { styled } from "@mui/system";

import { BlogCardMain, SkeletonBlog } from "../../../components";
import ThemeMain from "./components/lists/ThemeMain";
import {
    useGetBlogQuery,
    useGetTopicQuery,
} from "../../../services/BlogService";
import FilterBlogList from "./components/lists/FilterBlogList";

const BoxTheme = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
}));

const Blog = () => {
    const [topic, setTopic] = useState("");

    const { data: popularity, isLoading } = useGetBlogQuery({
        query: "popularity_all_time",
        type: "query",
    });
    const { data: created } = useGetBlogQuery({
        query: "created",
        type: "query",
    });
    const { data: theme, isFetching } = useGetBlogQuery({
        query: topic,
        type: "topic",
    });
    const { data: topics } = useGetTopicQuery("");

    return (
        <>
            {isLoading ? (
                <SkeletonBlog />
            ) : (
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
                            {created?.results?.length
                                ? created.results
                                      .slice(0, 1)
                                      .map((item: any, index: number) => (
                                          <BlogCardMain key={index} {...item} />
                                      ))
                                : ""}
                        </Grid>
                        <FilterBlogList
                            name="Популярное"
                            data={popularity}
                            value="popularity_all_time"
                        />
                    </Grid>
                    <BoxTheme>
                        {theme?.results
                            ?.slice(0, 1)
                            .map((item: any, index: number) => (
                                <MenuItem
                                    key={index}
                                    onClick={() =>
                                        navigate(ROUTES.BLOG_THEME, {
                                            state: {
                                                name: item.tags.name,
                                                value: item.tags.name,
                                                type: "theme",
                                            },
                                        })
                                    }
                                >
                                    <MyText variant="h5">
                                        {item.tags.name}
                                    </MyText>
                                </MenuItem>
                            ))}
                        <FormControl
                            sx={{ width: 150, bgcolor: "white", ml: 1 }}
                            size="small"
                        >
                            <InputLabel id="demo-simple-select-label">
                                Теги
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Теги"
                                defaultValue={isFetching ? "" : topics[0].name}
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                            >
                                {topics?.map((item: any, index: number) => (
                                    <MenuItem value={item.name} key={index}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </BoxTheme>
                    {isFetching ? (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 5,
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    ) : theme?.results.length ? (
                        <ThemeMain theme={theme?.results} />
                    ) : (
                        "Нет блогов"
                    )}
                </Box>
            )}
        </>
    );
};

export default Blog;
