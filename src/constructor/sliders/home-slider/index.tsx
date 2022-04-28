import React, { useState, useEffect } from 'react'

import { Box } from '@mui/material'
import Slider from 'react-slick'

import { ProductCard, MyText } from '../../../components'
import { ProductSliderProps } from '../../../interface'

const HomeSlider = () => {
    const settings = {
        dots: true,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        dotsClass: "slick-dots slick-thumb",
        appendDots: (dots: any) => <ul style={{ background: 'black', top: 372, height: 'max-content' }}>{dots}</ul>,
        customPaging: (i: any) => (
            <div style={{
                height: 10,
                width: 20
            }}>
                {i}
            </div>
        )
    };
    const data = ['Rectangle4014', 'Rectangle4014']
    return (
        <Box sx={{ mb: '-5px' }}>
            <Slider {...settings}>
                {data.map((item: any, index: number) => (
                    <Box
                        key={index}
                        sx={{
                            background: `url(/img/${item}.png)`,
                            height: 400
                        }}>

                    </Box>
                ))}
            </Slider>
        </Box >
    )
}

export default HomeSlider