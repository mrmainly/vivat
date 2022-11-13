import React from "react";
import { styled } from "@mui/system";
import { Box, Grid } from "@mui/material";

import Skeleton from "react-loading-skeleton";

const SkeletonCard = styled(Box)({
    width: "92%",
    height: 400,
    background: "white",
    padding: 10,
});

const BlogThemeSkeleton = () => {
    const blog_list = 18;

    return (
        <Grid container spacing={2}>
            {Array(blog_list)
                .fill(0)
                .map((item, index) => (
                    <Grid item key={index} xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Skeleton style={{ width: "100%", height: 400 }} />
                    </Grid>
                ))}
        </Grid>
    );
};

export default BlogThemeSkeleton;
