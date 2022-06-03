import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

import { MainCardsConstructorProps } from "../../interface";
import { MyText, ProductCard, CatalogCard } from "../../components";

const Root = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
}));

const MainCardsConstructor: React.FC<MainCardsConstructorProps> = ({
    data,
    title,
    ...props
}) => {
    return (
        <Box {...props}>
            <MyText variant="h5">{title}</MyText>

            <Grid container spacing={2}>
                {data.map((item: any, index: number) => (
                    <Grid item lg={3} xl={3} md={4} sm={4} xs={12} key={index}>
                        <CatalogCard
                            id={item.id}
                            price={item?.stocks?.priceBuy}
                            specialText={item.specialText}
                            img={item?.photo?.fileData}
                            description={item.description}
                            specialPrice={item?.stocks?.priceSale}
                            name={item.name}
                            producer={item.producer}
                            qty={item?.stocks.qty}
                            fav={item.fav}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MainCardsConstructor;
