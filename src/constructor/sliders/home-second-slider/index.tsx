import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import Slider from "react-slick";
import { styled } from "@mui/system";

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

    const sliders = [
        {
            img: "/img/Rectangle4041.png",
        },
        {
            img: "/img/Rectangle4041.png",
        },
        {
            img: "/img/Rectangle4041.png",
        },
        {
            img: "/img/Rectangle4041.png",
        },
    ];

    return (
        <Box sx={{ mb: 5 }}>
            <MyText variant="h5" sx={{ mb: 3 }}>
                {title}
            </MyText>
            <Slider {...settings}>
                {sliders.map((item, index) => (
                    <Box key={index}>
                        <img
                            src={item.img}
                            style={{
                                borderRadius: "10px",
                                margin: "0 auto",
                                width: "95%",
                            }}
                        />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default HomeSecondSlider;
