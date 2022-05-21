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
            <Root>
                {data.map((item: any, index: number) => (
                    <CatalogCard
                        key={index}
                        id={item.id}
                        specialPrice={item.specialPrice}
                        specialText={item.specialText}
                        img={item.img}
                        description={item.description}
                        price={item.price}
                    />
                ))}
            </Root>
        </Box>
    );
};

export default MainCardsConstructor;
