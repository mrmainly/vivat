import React from 'react'
import { Box, MenuItem } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

import product_data from '../../local_data/product_data'
import { MyContainer, BasketCard, MyText } from '../../components'
import { ProductCardsSlider } from '../../constructor'

const Basket = () => {
    const count_product = 8
    const general_price = 8196
    return (
        <Box>
            <MyText variant="h6">Корзина</MyText>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2.3, mb: 1, alignItems: 'center', width: '100%' }}>
                <MyText variant="body2" sx={{ color: 'grey' }}>
                    {count_product} товаров на сумму {general_price} ₽
                </MyText>
                <MenuItem sx={{ color: '#FE5860' }}>
                    Очистить корзину <CloseIcon sx={{ ml: 1 }} />
                </MenuItem>
            </Box>
            <BasketCard />
            <ProductCardsSlider title="Может пригодиться" data={product_data} />
            <ProductCardsSlider title="Рекомендуем" data={product_data} />
        </Box>
    )
}

export default Basket