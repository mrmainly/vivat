import React, { useEffect, useState } from "react";
import { Box, Grid, MenuItem, Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { BlogCard, MyText, BlogCardMain } from "../../components";
import ROUTES from "../../routes";
import API from "../../api";

const BlogMenuItem = styled(MenuItem)(({ theme }) => ({
    width: "max-content",
    marginBottom: 10,
}));

const Blog = () => {
    const [popularity, setPopularity] = useState([]);
    const [created, setCreated] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const getBlog = async () => {
        setLoading(true);
        await API.getBlog("popularity_all_time")
            .then((res) => {
                setPopularity(res.data);
                console.log(res);
            })
            .catch((error) => console.log(error));

        await API.getBlog("created")
            .then((res) => {
                setCreated(res.data);
            })
            .catch((error) => console.log(error));
        setLoading(false);
    };

    useEffect(() => {
        getBlog();
    }, []);

    const data = [
        {
            description:
                " 1Что нужно знать о аллергии? фыф фывфы asdasdasd sadas  asdasd  ",
            tag: "Здоровте",
            img: "/img/depositphotos.jpg",
            date: "15.10.2021",
            views: "200",
        },
        {
            description:
                " 2Что нужно знать о аллергии? фыф фывфы asdasdasd sadas  asdasd  ",
            tag: "Здоровте",
            img: "/img/depositphotos.jpg",
            date: "15.10.2021",
            views: "200",
        },
        {
            description:
                "3 Что нужно знать о аллергии? фыф фывфы asdasdasd sadas  asdasd  ",
            tag: "Здоровте",
            img: "/img/depositphotos.jpg",
            date: "15.10.2021",
            views: "200",
        },
        {
            description:
                "4 Что нужно знать о аллергии? фыф фывфы asdasdasd sadas  asdasd  ",
            tag: "Здоровте",
            img: "/img/depositphotos.jpg",
            date: "15.10.2021",
            views: "200",
        },
        {
            description:
                "5 Что нужно знать о аллергии? фыф фывфы asdasdasd sadas  asdasd  ",
            tag: "Здоровте",
            img: "/img/depositphotos.jpg",
            date: "15.10.2021",
            views: "200",
        },
    ];

    return (
        <>
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                    <CircularProgress />
                </Box>
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
                                        state: { name: "Популярное" },
                                    })
                                }
                            >
                                <MyText variant="h5">Популярное</MyText>
                            </BlogMenuItem>
                            <Grid container spacing={2}>
                                {popularity.length > 0
                                    ? popularity
                                          .slice(0, 3)
                                          .map((item, index) => (
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
                                      .map((item, index) => (
                                          <BlogCardMain key={index} {...item} />
                                      ))
                                : ""}
                        </Grid>
                        <Grid item lg={3.5} xl={3.5} md={4} sm={6} xs={12}>
                            <BlogMenuItem>
                                <MyText variant="h5">Последние статьи</MyText>
                            </BlogMenuItem>
                            <Grid container spacing={2}>
                                {created.length > 0
                                    ? created.slice(1, 3).map((item, index) => (
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

                    {/* Тема */}
                    <BlogMenuItem sx={{ mt: 5 }}>
                        <MyText variant="h5">Тема</MyText>
                    </BlogMenuItem>
                    <Grid container spacing={2}>
                        <Grid item lg={5} xl={5} md={5} sm={5} xs={12}>
                            <BlogCardMain />
                        </Grid>
                        <Grid item lg={7} xl={7} md={7} sm={7} xs={12}>
                            <Grid container spacing={2}>
                                {data.slice(0, 4).map((item, index) => (
                                    <Grid
                                        item
                                        key={index}
                                        lg={6}
                                        xl={6}
                                        md={6}
                                        sm={6}
                                        xs={12}
                                    >
                                        <BlogCard {...item} type="v2" />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            )}
        </>
    );
};

export default Blog;
