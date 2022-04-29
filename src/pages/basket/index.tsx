import React from 'react'
import product_data from '../../local_data/product_data'

import { MyContainer } from '../../components'
import { ProductCardsSlider } from '../../constructor'

const Basket = () => {
    return (
        <MyContainer wrapper={false}>
            <ProductCardsSlider title="Может пригодиться" data={product_data} />
            <ProductCardsSlider title="Рекомендуем" data={product_data} />
        </MyContainer>
    )
}

export default Basket