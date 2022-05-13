import React from "react";

import { Box } from "@mui/material";
import Slider from "react-slick";

import { ProductCard, MyText } from "../../../components";
import { ProductSliderProps } from "../../../interface";

const HomeSlider = () => {
  const settings = {
    dots: true,
    centerPadding: "0px",
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    appendDots: (dots: any) => (
      <ul
        style={{
          top: 420,
          height: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(52,52,52,0.4)",
        }}
      >
        {dots}
      </ul>
    ),
  };
  const data = ["Rectangle4014", "Rectangle4014"];
  return (
    <Box sx={{ mb: "-5px" }}>
      <Slider {...settings}>
        {data.map((item: any, index: number) => (
          <Box
            key={index}
            sx={{
              background: `url(/img/${item}.png)`,
              height: 450,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HomeSlider;
