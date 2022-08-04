import React, { useState, useEffect } from "react";

import { Box, CircularProgress, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

import { MyText, BlogCardTheme } from "../../components";
import { useGetBlogQuery } from "../../services/BlogService";

interface NameProps {
    name?: string;
    value?: string;
    type: string;
}

const ThemeBlog = () => {
    const locationState = useLocation();
    const state = locationState.state as NameProps;

    const { name, value, type } = state;

    const { data, isLoading, error } = useGetBlogQuery({
        query: value,
        type: type,
    });

    return (
        <Box>
            <MyText variant="h5">{name}</MyText>
            <Grid container>
                {isLoading ? (
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
                    <Grid item xs={12}>
                        {data?.results.map((item: any, index: number) => (
                            <BlogCardTheme {...item} key={index} />
                        ))}
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default ThemeBlog;
