import React, { useState, useEffect } from 'react'

import { Box } from '@mui/material'
import Slider from 'react-slick'

import { ProductCard, MyText } from '../../../components'
import { ProductSliderProps } from '../../../interface'

const ProductCardsSlider: React.FC<ProductSliderProps> = ({ title, data }) => {
    const settings = {
        dots: false,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true
    };
    return (
        <Box sx={{ mt: 3 }}>
            <MyText variant="h5">{title}</MyText>
            <Slider {...settings}>
                {data.map((item: any, index: number) => (
                    <ProductCard key={index} id={item.id} specialPrice={item.specialPrice} specialText={item.specialText} img={item.img} description={item.description} price={item.price} />
                ))}
            </Slider>
        </Box >
    )
}

export default ProductCardsSlider