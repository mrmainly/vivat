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

const BottomCustom = styled(Button)(({ theme }) => ({
    marginBottom: "50px",
    background: "#e2211c",
    fontSize: 20,

    [theme.breakpoints.down("sm")]: {
        fontSize: 10,
        padding: "4px 11px",
        marginBottom: "10px",
    },
}));

const HomeSliderBox = styled(Box)(({ theme }) => ({
    height: 500,
    borderRadius: 10,
    width: "98%",
    margin: "0 auto",
    display: "flex",
    alignItems: "end",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
        height: 300,
    },
    [theme.breakpoints.down("sm")]: {
        height: 200,
    },
}));

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
    console.log(data);
    return (
        <Box style={{ marginBottom: data.length >= 0 ? 50 : 0 }}>
            <Slider {...settings}>
                {data.map((item: any, index: number) => (
                    <Box key={index}>
                        <HomeSliderBox
                            sx={{
                                background: `url(http://xn----7sbbagaytx2c4ad.xn--p1ai${item.banner_image})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                backgroundPosition: "left",
                            }}
                        >
                            <BottomCustom
                                variant="contained"
                                size="large"
                                onClick={() =>
                                    navigate(
                                        `${ROUTES.STOCK_DETAIL}/${item.id}`
                                    )
                                }
                            >
                                Посмотреть
                            </BottomCustom>
                        </HomeSliderBox>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default HomeSlider;
