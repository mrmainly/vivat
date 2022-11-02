import { Box } from "@mui/material";
import Slider from "react-slick";

import { ProductCard, MyText } from "../../../components";

const ProductCardsSlider = ({ data }) => {
    const settings = {
        dots: false,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
    };
    return (
        <Box sx={{ mt: 3 }}>
            <MyText variant="h5">{data.title}</MyText>
            <Slider {...settings}>
                {data?.goods.map((item, index) => (
                    <ProductCard key={index} id={item.id} specialPrice={item.specialPrice} specialText={item.specialText} img={item.img} description={item.description} price={item.price} />
                ))}
            </Slider>
        </Box>
    );
};

export default ProductCardsSlider;
