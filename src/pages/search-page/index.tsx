import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

import { MyText } from "../../components";
import Body from "./components/Body";

interface CustomizedState {
    data: any;
    title: string;
}

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const Text = styled(MyText)(({ theme }) => ({
    marginLeft: 20,
    [theme.breakpoints.down("md")]: {
        marginLeft: 0,
    },
}));

const SearchPage = () => {
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const state = location.state as CustomizedState;

    const { data, title } = state;

    return (
        <Box>
            <Body title={title} data={data} loading={loading} />
        </Box>
    );
};

export default SearchPage;
