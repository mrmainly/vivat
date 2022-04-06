import React from 'react'

import { MyContainer, ProductCard } from '../../components'
import { ProductCardsSlider } from '../../constructor'
import product_data from '../../local_data/product_data'

const Home = () => {
    return (
        <MyContainer wrapper={false}>
            <ProductCardsSlider title="Популярные товары" data={product_data} />
            <ProductCardsSlider title="Товары дня" data={product_data} />
        </MyContainer>
    )
}

export default Home