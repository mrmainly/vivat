import React from 'react'

import MainInfo from './components/MainInfo'
import DescriptionScreen from './components/DescriptionScreen'
import { ProductCardsSlider } from '../../constructor'
import product_data from '../../local_data/product_data'

const ProductDetail = () => {
    return (
        <>
            <MainInfo />
            <ProductCardsSlider title="Форма выпуска" data={product_data} />
            <DescriptionScreen />
        </>
    )
}

export default ProductDetail