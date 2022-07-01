import React, { useState, useEffect } from "react";

import { Box, Grid } from "@mui/material";
import Slider from "react-slick";
import { styled } from "@mui/system";

import { MyText } from "../../../components";
import { HomeSecondSliderProps } from "../../../interface/index";

const HomeSecondSlider: React.FC<HomeSecondSliderProps> = ({ title }) => {
    const sliders = [
        {
            img: "/img/Frame_1264.png",
        },
        {
            img: "/img/Frame_1265.png",
        },
    ];

    return (
        <Box>
            <MyText variant="h5" sx={{ mb: 3 }}>
                {title}
            </MyText>
            <Grid container>
                {sliders.map((item, index) => (
                    <Grid item key={index} lg={6} xl={6} md={6} sm={12} xs={12}>
                        <img
                            src={item.img}
                            style={{
                                width: "100%",
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HomeSecondSlider;
