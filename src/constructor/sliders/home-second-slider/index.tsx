import React from "react";

import { Box, Grid } from "@mui/material";

import { MyText, SkeletonAdvetage } from "../../../components";
import { HomeSecondSliderProps } from "../../../interface";

const HomeSecondSlider: React.FC<HomeSecondSliderProps> = ({ title, data, loading }) => {
    // const sliders = [
    //     {
    //         img: "/img/Frame1264.png",
    //     },
    //     {
    //         img: "/img/Frame1265.png",
    //     },
    // ];

    if (loading) {
        return <SkeletonAdvetage />;
    }

    return (
        <Box>
            <MyText variant="h5" sx={{ mb: 2 }}>
                {title}
            </MyText>
            {data?.results.map((item: any, index: number) => (
                <Grid container key={index}>
                    <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                        <img
                            src={item.image_1}
                            style={{
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                            alt=""
                        />
                    </Grid>
                    <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                        <img
                            src={item.image_2}
                            style={{
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                            alt=""
                        />
                    </Grid>
                </Grid>
            ))}
        </Box>
    );
};

export default HomeSecondSlider;
