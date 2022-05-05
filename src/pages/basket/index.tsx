import React from 'react'
import product_data from '../../local_data/product_data'

import { MyContainer, BasketCard } from '../../components'
import { ProductCardsSlider } from '../../constructor'

const Basket = () => {
    return (
        <MyContainer wrapper={false}>
            <BasketCard />
            <ProductCardsSlider title="Может пригодиться" data={product_data} />
            <ProductCardsSlider title="Рекомендуем" data={product_data} />
        </MyContainer>
    )
}

export default Basket