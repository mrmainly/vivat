import { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import Slider from "react-slick";
import { styled } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { NewsSliderCard } from "../../../components";

const ArrowBack = styled(Box)(({ theme }) => ({
    position: "absolute",
    zIndex: 1,
    left: "-50px",
    height: "100%",
}));

const ArrowNext = styled(Box)(({ theme }) => ({
    zIndex: 1,
    right: "-50px",
    position: "absolute",
    height: "100%",
    top: 0,
}));

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <ArrowNext style={{ ...style }} onClick={onClick}>
            <Box
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </Box>
        </ArrowNext>
    );
}

function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <ArrowBack style={{ ...style }} onClick={onClick}>
            <Box
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
            </Box>
        </ArrowBack>
    );
}

const NewsSlider = ({ data }) => {
    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1100 && window.innerWidth >= 800) {
                setSlidesToShow(3);
            } else if (window.innerWidth < 800 && window.innerWidth >= 500) {
                setSlidesToShow(2);
            } else if (window.innerWidth < 500) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(4);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
    }, []);

    const settings = {
        dots: false,
        centerPadding: "0px",
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };
    console.log(data);

    return (
        <Box>
            <Slider {...settings}>
                {data?.map((item, index) => (
                    <NewsSliderCard key={index} id={item.id} image={item.image} date={item.date} title={item.name} min_description={item.preview} />
                ))}
            </Slider>
        </Box>
    );
};

export default NewsSlider;
