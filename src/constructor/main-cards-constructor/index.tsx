import React from "react";
import { Box, Grid } from "@mui/material";

import { MainCardsConstructorProps } from "../../interface";
import { MyText, ProductCard, CatalogCard } from "../../components";

const MainCardsConstructor: React.FC<MainCardsConstructorProps> = ({
    data,
    title,
    ...props
}) => {
    return (
        <Box {...props}>
            <MyText variant="h6" sx={{ mb: 2 }}>
                {title}
            </MyText>
            <Grid container spacing={2}>
                {data.map((item: any, index: number) => (
                    <Grid item lg={3} xl={3} md={4} sm={6} xs={12}>
                        <CatalogCard
                            key={index}
                            id={item.id}
                            specialPrice={item.specialPrice}
                            specialText={item.specialText}
                            img={item.img}
                            description={item.description}
                            price={item.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MainCardsConstructor;
