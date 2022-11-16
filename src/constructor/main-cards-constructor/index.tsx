import React from "react";
import { Box, Grid } from "@mui/material";

import { MainCardsConstructorProps } from "../../interface";
import { MyText, CatalogCard, SkeletonCatalogVersion } from "../../components";

const MainCardsConstructor: React.FC<MainCardsConstructorProps> = ({ data, title, loading, isFetching, ...props }) => {
    const skeletonData = 20;

    return (
        <Box {...props}>
            <MyText variant="h5">{title}</MyText>
            <Grid container spacing={2} sx={{ mt: 1 }}>
                {loading ? (
                    Array(skeletonData)
                        .fill(0)
                        .map((item, index) => (
                            <Grid item lg={3} xl={3} md={4} sm={4} xs={12} key={index}>
                                <SkeletonCatalogVersion />
                            </Grid>
                        ))
                ) : data?.length ? (
                    data?.map((item: any, index: number) => (
                        <Grid item lg={3} xl={3} md={4} sm={4} xs={12} key={index}>
                            <CatalogCard
                                id={item.id}
                                stocks={item.stocks}
                                specialText={item.specialText}
                                img={item?.esphoto[0]?.fileData}
                                description={item.description}
                                name={item.name}
                                producer={item.producer}
                                fav={item.fav}
                                notRecept={item.NotReceptGood}
                                isFetching={isFetching}
                            />
                        </Grid>
                    ))
                ) : (
                    <Box sx={{ ml: 3 }}>
                        <MyText variant="h6">На данный момент нет лекарств</MyText>
                    </Box>
                )}
            </Grid>
        </Box>
    );
};

export default MainCardsConstructor;
