import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import Slider from "react-slick";

import { MyText } from "../../../components";
import { HomeSecondSliderProps } from "../../../interface/index";

const HomeSecondSlider: React.FC<HomeSecondSliderProps> = ({ title }) => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 2,
        variableWidth: false,
        swipeToSlide: true,
    };
    return (
        <Box sx={{ mb: 5 }}>
            <MyText variant="h5" sx={{ mb: 3 }}>{title}</MyText>
            <Slider {...settings}>
                <div>
                    <img src='/img/Rectangle4041.png' style={{borderRadius: "10px"}}/>
                </div>
                <div>
                    <img src="/img/Rectangle4042.png" style={{borderRadius: "10px"}}/>
                </div>
                <div>
                    <img src='/img/Rectangle4041.png' style={{borderRadius: "10px"}}/>
                </div>
                <div>
                    <img src="/img/Rectangle4042.png" style={{borderRadius: "10px"}}/>
                </div>
            </Slider>
        </Box>
    );
};

export default HomeSecondSlider;
