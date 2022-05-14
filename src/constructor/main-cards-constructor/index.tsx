import React from "react";
import { Box, Grid } from "@mui/material";

import { MainCardsConstructorProps } from "../../interface";
import { MyText, ProductCard, CatalogCard } from "../../components";

const MainCardsConstructor: React.FC<MainCardsConstructorProps> = ({
    data,
}) => {
    return (
        <Grid container spacing={2}>
            {data.map((item: any, index: number) => (
                <Grid item lg={3}>
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
    );
};

export default MainCardsConstructor;
