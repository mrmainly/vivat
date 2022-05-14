import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { CatalogFilterSideBar, MyText } from "../../components";
import { MainCardsConstructor } from "../../constructor";
import product_data from "../../local_data/product_data";

const ProductPage = () => {
    return (
        <Box>
            <MyText variant="h5" sx={{ mb: 2 }}>
                Каталог
            </MyText>
            <Grid container spacing={6}>
                <Grid item lg={3} xl={3}>
                    <CatalogFilterSideBar />
                </Grid>
                <Grid item lg={10} xl={10}>
                    <MainCardsConstructor data={product_data} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductPage;
