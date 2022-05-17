import React from "react";
import { Box, Grid, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

import { BlogCard, MyText, BlogCardMain } from "../../components";
import ROUTES from "../../routes";

const BlogMenuItem = styled(MenuItem)(({ theme }) => ({
    width: "max-content",
    marginBottom: 10,
}));

const Blog = () => {
    const navigate = useNavigate();

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
                        {data.slice(0, 3).map((item, index) => (
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
                        ))}
                    </Grid>
                </Grid>
                <Grid item lg={5} xl={5} md={4} sm={6} xs={12}>
                    <BlogCardMain />
                </Grid>
                <Grid item lg={3.5} xl={3.5} md={4} sm={6} xs={12}>
                    <BlogMenuItem>
                        <MyText variant="h5">Последние статьи</MyText>
                    </BlogMenuItem>
                    <Grid container spacing={2}>
                        {data.slice(0, 3).map((item, index) => (
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
                        ))}
                    </Grid>
                </Grid>
            </Grid>
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
    );
};

export default Blog;
