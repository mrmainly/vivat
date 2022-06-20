import React, { useState, useEffect } from "react";

import { Box } from "@mui/material";
import Slider from "react-slick";
import { styled } from "@mui/system";

import { MyText } from "../../../components";
import { HomeSecondSliderProps } from "../../../interface/index";

const HomeSecondSlider: React.FC<HomeSecondSliderProps> = ({ title }) => {
    // const settings = {
    //     arrows: false,
    //     dots: true,
    //     infinite: true,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     speed: 500,
    //     slidesToScroll: 1,
    //     slidesToShow: 2,
    //     variableWidth: false,
    //     swipeToSlide: true,
    //     responsive: [
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 1,
    //             },
    //         },
    //     ],
    // };

    const sliders = [
        {
            img: "/img/Rectangle4041.png",
        },
        {
            img: "/img/Rectangle4042.png",
        },
    ];

    return (
        <Box>
            <MyText variant="h5" sx={{ mb: 3 }}>
                {title}
            </MyText>
            <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {sliders.map((item, index) => (
                    <Box key={index} sx={{ mb: 3, 
                        maxWidth: 520, }}>
                        <img
                            src={item.img}
                            style={{
                                width: '100%',
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default HomeSecondSlider;
