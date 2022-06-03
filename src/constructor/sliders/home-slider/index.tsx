import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";

import { ProductCard, MyText } from "../../../components";
import { ProductSliderProps } from "../../../interface";
import API from "../../../api";

const HomeSlider = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        API.getPromotion()
            .then((res) => {
                console.log(res);
                setData(res.data.results);
            })
            .catch((error) => console.log(error));
    }, []);

    const settings = {
        dots: true,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
    };
    // const data = ["Rectangle4014", "Rectangle4014"];
    return (
        <Box>
            <Slider {...settings}>
                {data.map((item: any, index: number) => (
                    <Box
                        key={index}
                        sx={{
                            background: `url(${item.banner_image})`,
                            height: 450,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: 10,
                        }}
                    ></Box>
                ))}
            </Slider>
        </Box>
    );
};

export default HomeSlider;
