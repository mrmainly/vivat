import React, { useEffect, useState } from 'react'
import { Box, MenuItem, CircularProgress } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

import product_data from '../../local_data/product_data'
import { BasketCard, MyText } from '../../components'
import { ProductCardsSlider } from '../../constructor'
import API from '../../api'

const Basket = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const count_product = 8
    const general_price = 8196

    useEffect(() => {
        const getOrders = async () => {
            await API.getOrdersList()
                .then(res => {
                    console.log('data', res.data)
                    setData(res.data)
                })
            setLoading(false)
        }
        getOrders()

    }, [])
    return (
        <Box>
            <MyText variant="h6">Корзина</MyText>
            {loading ? <CircularProgress sx={{ mt: 2 }} /> :
                <>
                    {data.length > 0 ?
                        <>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2.3, mb: 1, alignItems: 'center', width: '100%' }}>
                                <MyText variant="body2" sx={{ color: 'grey' }}>
                                    {count_product} товаров на сумму {general_price} ₽
                                </MyText>
                                <MenuItem sx={{ color: '#FE5860' }}>
                                    Очистить корзину <CloseIcon sx={{ ml: 1 }} />
                                </MenuItem>
                            </Box>
                            {data.map((item: any, index: number) => (
                                <Box key={index}>
                                    {item.items.map((item: any, index: number) => (
                                        <BasketCard key={index} price={item.price} />
                                    ))}
                                </Box>
                            ))}
                        </>
                        : 'Нету'}
                </>
            }
            <ProductCardsSlider title="Может пригодиться" data={product_data} />
            <ProductCardsSlider title="Рекомендуем" data={product_data} />
        </Box >
    )
}

export default Basket