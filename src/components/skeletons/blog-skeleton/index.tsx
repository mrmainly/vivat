import React from "react";

import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Skeleton from "react-loading-skeleton";

const SkeletonBlogCard = styled(Skeleton)(({ theme }) => ({
    height: 140,
    [theme.breakpoints.down("sm")]: {
        height: 260,
    },
}));

const SkeletonBlogCardMain = styled(Skeleton)(({ theme }) => ({
    height: 513,
    [theme.breakpoints.down("sm")]: {
        height: 260,
    },
}));

const SkeletonMenu = styled(Skeleton)(({ theme }) => ({
    width: 200,
    height: 40,
    marginBottom: 10,
    [theme.breakpoints.down("sm")]: {
        height: 50,
    },
}));

const BlogTheme = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
}));

const BlogCardV2 = styled(Skeleton)(({ theme }) => ({
    height: 247,
    [theme.breakpoints.down("sm")]: {
        height: 260,
    },
}));

const BlogSkeleton = () => {
    return (
        <Box>
            <Grid
                container
                spacing={2}
                sx={{ display: "flex", justifyContent: "center" }}
            >
                <Grid item lg={3.5} xl={3.5} md={4} sm={12} xs={12}>
                    <SkeletonMenu />
                    <Grid container spacing={2}>
                        <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                            <SkeletonBlogCard />
                        </Grid>
                        <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                            <SkeletonBlogCard />
                        </Grid>
                        <Grid item lg={12} xl={12} md={12} xs={12} sm={12}>
                            <SkeletonBlogCard />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item lg={5} xl={5} md={4} sm={6} xs={12}>
                    <SkeletonBlogCardMain />
                </Grid>

                <Grid item lg={3.5} xl={3.5} md={4} sm={6} xs={12}>
                    <Skeleton
                        style={{ width: 200, height: 40, marginBottom: 10 }}
                    />
                    <Grid container spacing={2}>
                        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                            <SkeletonBlogCard />
                        </Grid>
                        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                            <SkeletonBlogCard />
                        </Grid>
                        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
                            <SkeletonBlogCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <BlogTheme>
                <SkeletonMenu />
                <SkeletonMenu />
            </BlogTheme>
            <Grid container spacing={2}>
                <Grid item lg={5} xl={5} md={5} sm={5} xs={12}>
                    <SkeletonBlogCardMain />
                </Grid>
                <Grid item lg={7} xl={7} md={7} sm={7} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item lg={6} xl={6} md={6} sm={6} xs={12}>
                            <BlogCardV2 />
                        </Grid>
                        <Grid item lg={6} xl={6} md={6} sm={6} xs={12}>
                            <BlogCardV2 />
                        </Grid>
                        <Grid item lg={6} xl={6} md={6} sm={6} xs={12}>
                            <BlogCardV2 />
                        </Grid>
                        <Grid item lg={6} xl={6} md={6} sm={6} xs={12}>
                            <BlogCardV2 />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BlogSkeleton;
