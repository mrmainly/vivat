import React, { useState, useEffect, useCallback } from "react";

import { Box, CircularProgress, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";

import { MyText, BlogCardTheme } from "../../components";
import API from "../../api";

interface NameProps {
    name?: string;
    value?: string;
    type: string;
}

const ThemeBlog = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const locationState = useLocation();
    const state = locationState.state as NameProps;

    const { name, value, type } = state;

    useEffect(() => {
        const getTheme = async () => {
            setLoading(true);
            await API.getBlog(value, type)
                .then((res) => {
                    setData(res.data.results);
                })
                .catch((error) => console.log(error));
            setLoading(false);
        };
        getTheme();
    }, [name]);

    return (
        <Box>
            <MyText variant="h5">{name}</MyText>
            <Grid container>
                {loading ? (
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
                        {data.map((item: any, index: number) => (
                            <BlogCardTheme {...item} key={index} />
                        ))}
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export default ThemeBlog;
