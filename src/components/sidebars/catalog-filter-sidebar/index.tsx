import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Main = styled(Box)(({ theme }) => ({
    background: "white",
    borderRadius: 12,
    minHeight: 800,
    width: "100%",
    padding: 16,
}));

const CatalogFilterSideBar = () => {
    return <Main></Main>;
};

export default CatalogFilterSideBar;
