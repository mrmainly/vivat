import React, { useEffect, useState } from "react";

import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import API from "../../../api";
import ROUTES from "../../../routes";

interface HomeSliderProps {
    data?: any;
}

const HomeSlider: React.FC<HomeSliderProps> = ({ data }) => {
    const navigate = useNavigate();

    const settings = {
        dots: true,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
    };
    // const data = ["Rectangle4014", "Rectangle4014"];
    console.log(data);
    return (
        <Box>
            <Slider {...settings}>
                {data.map((item: any, index: number) => (
                    <Box key={index}>
                        <Box
                            sx={{
                                background: `url(http://xn----7sbbagaytx2c4ad.xn--p1ai${item.banner_image})`,
                                height: 500,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                borderRadius: 10,
                                width: "98%",
                                margin: "0 auto",
                                display: "flex",
                                alignItems: "end",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    mb: 5,
                                    background: "#e2211c",
                                    fontSize: 20,
                                }}
                                size="large"
                                onClick={() =>
                                    navigate(
                                        `${ROUTES.STOCK_DETAIL}/${item.id}`
                                    )
                                }
                            >
                                Купить
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default HomeSlider;
