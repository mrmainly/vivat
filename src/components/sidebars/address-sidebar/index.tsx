import React from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Main = styled(Box)(({ theme }) => ({
    background: "white",
    borderRadius: 12,
    minHeight: 800,
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const AddressSideBar = () => {
    return <Main>asd</Main>;
};

export default AddressSideBar;
