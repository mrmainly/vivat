import React, { useEffect, useState, useCallback } from "react";
import {
    Box,
    Grid,
    MenuItem,
    CircularProgress,
    FormControl,
    FormControlLabel,
    InputLabel,
    Select,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { BlogCard, MyText, BlogCardMain, SkeletonBlog } from "../../components";
import ROUTES from "../../routes";
import API from "../../api";
import ThemeMain from "./components/ThemeMain";

const BlogMenuItem = styled(MenuItem)(({ theme }) => ({
    width: "max-content",
    marginBottom: 10,
}));

const BoxTheme = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
}));

const Blog = () => {
    const [popularity, setPopularity] = useState([]);
    const [created, setCreated] = useState([]);
    const [loading, setLoading] = useState(false);
    const [topics, setTopics] = useState([{ name: "" }]);
    const [topic, setTopic] = useState("");
    const [theme, setTheme] = useState([]);
    const [themeLoading, setThemeLoading] = useState(false);

    const navigate = useNavigate();

    const getBlog = async () => {
        setLoading(true);
        await API.getBlog("popularity_all_time", "query")
            .then((res) => {
                setPopularity(res.data.results);
                console.log("популяр", res);
            })
            .catch((error) => console.log(error));

        await API.getBlog("created", "query")
            .then((res) => {
                setCreated(res.data.results);
            })
            .catch((error) => console.log(error));

        await API.getTopic()
            .then((res) => {
                setTopics(res.data);
            })
            .catch((error) => console.log(error));
        setLoading(false);
    };

    const getTheme = () => {
        API.getBlog(topic, "topic")
            .then((res) => {
                setTheme(res.data.results);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getBlog();
    }, [""]);

    useEffect(() => {
        getTheme();
    }, [topic]);

    return (
        <>
            {loading ? (
                <SkeletonBlog />
            ) : (
                <Box>
                    <Grid
                        container
                        spacing={2}
                        sx={{ display: "flex", justifyContent: "center" }}
                    >
                        <Grid item lg={3.5} xl={3.5} md={4} sm={12} xs={12}>
                            <BlogMenuItem
                                onClick={() =>
                                    navigate(ROUTES.BLOG_THEME, {
                                        state: {
                                            name: "Популярное",
                                            value: "popularity_all_time",
                                            type: "query",
                                        },
                                    })
                                }
                            >
                                <MyText variant="h5">Популярное</MyText>
                            </BlogMenuItem>
                            <Grid container spacing={2}>
                                {popularity.length > 0
                                    ? popularity
                                          .slice(0, 3)
                                          .map((item: any, index: number) => (
                                              <Grid
                                                  item
                                                  key={index}
                                                  lg={12}
                                                  xl={12}
                                                  md={12}
                                                  xs={12}
                                                  sm={12}
                                              >
                                                  <BlogCard {...item} />
                                              </Grid>
                                          ))
                                    : ""}
                            </Grid>
                        </Grid>
                        <Grid item lg={5} xl={5} md={4} sm={6} xs={12}>
                            {created.length > 0
                                ? created
                                      .slice(0, 1)
                                      .map((item: any, index: number) => (
                                          <BlogCardMain key={index} {...item} />
                                      ))
                                : ""}
                        </Grid>
                        <Grid item lg={3.5} xl={3.5} md={4} sm={6} xs={12}>
                            <BlogMenuItem
                                onClick={() =>
                                    navigate(ROUTES.BLOG_THEME, {
                                        state: {
                                            name: "Последние статьи",
                                            value: "created",
                                            type: "query",
                                        },
                                    })
                                }
                            >
                                <MyText variant="h5">Последние статьи</MyText>
                            </BlogMenuItem>
                            <Grid container spacing={2}>
                                {created.length > 0
                                    ? created
                                          .slice(1, 3)
                                          .map((item: any, index: number) => (
                                              <Grid
                                                  item
                                                  key={index}
                                                  lg={12}
                                                  xl={12}
                                                  md={12}
                                                  sm={12}
                                                  xs={12}
                                              >
                                                  <BlogCard {...item} />
                                              </Grid>
                                          ))
                                    : ""}
                            </Grid>
                        </Grid>
                    </Grid>
                    <BoxTheme>
                        {theme.slice(0, 1).map((item: any, index: number) => (
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
                                <MyText variant="h5">{item.tags.name}</MyText>
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
                                defaultValue={topics[0].name}
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                            >
                                {topics.map((item: any, index: number) => (
                                    <MenuItem value={item.name} key={index}>
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </BoxTheme>
                    {themeLoading ? (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 5,
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    ) : (
                        <ThemeMain theme={theme} />
                    )}
                </Box>
            )}
        </>
    );
};

export default Blog;
