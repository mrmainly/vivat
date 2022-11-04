import { Box, IconButton } from "@mui/material";
import Slider from "react-slick";
import { styled } from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { ProductCard, MyText } from "../../../components";

const ArrowBack = styled(Box)(({ theme }) => ({
    position: "absolute",
    zIndex: 1,
    left: "-50px",
    height: 420,
}));

const ArrowNext = styled(Box)(({ theme }) => ({
    zIndex: 1,
    right: "-50px",
    position: "absolute",
    height: 420,
    top: 0,
}));

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <ArrowNext style={{ ...style }} onClick={onClick}>
            <Box style={{ display: "flex", alignItems: "center", height: "100%" }}>
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
            <Box style={{ display: "flex", alignItems: "center", height: "100%" }}>
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
            </Box>
        </ArrowBack>
    );
}

const ProductCardsSlider = ({ data }) => {
    const settings = {
        dots: false,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 2,
        slidesToShow: 2,
        variableWidth: true,
        swipeToSlide: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    };

    return (
        <Box sx={{ mt: 3 }}>
            <MyText variant="h5" style={{ marginBottom: 20 }}>
                {data.title}
            </MyText>
            <Slider {...settings}>
                {data?.goods.map((item, index) => (
                    <ProductCard
                        key={index}
                        id={item.id}
                        stocks={item.stocks}
                        specialText={item.specialText}
                        img={item?.esphoto[0]?.fileData}
                        description={item.description}
                        name={item.name}
                        producer={item.producer}
                        fav={item.fav}
                    />
                ))}
            </Slider>
        </Box>
    );
};

export default ProductCardsSlider;