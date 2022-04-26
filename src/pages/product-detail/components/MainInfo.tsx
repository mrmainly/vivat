import React from 'react'

import { Grid, Box } from '@mui/material'
import { styled } from '@mui/system'

import { MyText, MyButton } from '../../../components'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const Item = styled(Box)(({ theme }) => ({
    minHeight: 550,
    background: 'white',
    padding: 20,
}))

const ItemImg = styled(Box)(({ theme }) => ({
    minHeight: 550,
    background: 'white',
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))

const Img = styled('img')(({ theme }) => ({
    width: 500,
    objectFit: 'cover'
}))

const PriceBlog = styled(Box)(({ theme }) => ({
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center'
    flexDirection: 'row',
    marginTop: 5
}))

const MainInfo = () => {
    const array = [
        {
            label: 'Вид товара:',
            value: 'Лекарственные средства'
        },
        {
            label: 'Форма выпуска:',
            value: 'Таблетки растворимые'
        },
        {
            label: 'Производитель:',
            value: 'Фывфыв'
        },
        {
            label: 'Дозировка:',
            value: '500МЕ'
        },
        {
            label: 'Фасовка:',
            value: '№60'
        }
    ]
    const array2 = [
        {
            label: 'Самовызов через 2 часа:',
            value: 'в 2 аптеках'
        },
        {
            label: 'Под заказ:',
            value: 'В 3 аптеках'
        },
        {
            label: 'Доставка:',
            value: 'от 149 руб.'
        },
    ]
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                    <ItemImg>
                        <Img src="/img/prototypeimg.png" />
                    </ItemImg>
                </Grid>
                <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                    <Item>
                        <MyText variant="h5">Нурофен лонг 0,2+0,5 N12 Табл П/Плен/Оболоч</MyText>
                        <MyText variant="body1" sx={{ color: '#FE5860', mt: 0.5, mb: 0.5 }}>Товара нет в наличии</MyText>
                        {array.map((item, index) => (
                            <MyText variant="body1" key={index} sx={{ mt: 0.8, color: '#9B9B9B' }}>{item.label}<span style={{ marginLeft: 15, color: 'black' }}>{item.value}</span></MyText>
                        ))}
                        <MyText variant="body1" sx={{ color: '#9B9B9B', mt: 1.5 }}>Цена:</MyText>
                        <PriceBlog>
                            <MyText variant="h4" sx={{
                                fontWeight: 'bold',
                                fontFamily: 'Montserrat'
                            }}>
                                416 ₽
                            </MyText>
                            <MyText variant="h6" sx={{
                                fontWeight: 'bold',
                                fontFamily: 'Montserrat',
                                color: '#999999',
                                textDecoration: 'line-through',
                                ml: 1
                            }}>
                                620 ₽
                            </MyText>
                        </PriceBlog>
                        <Box sx={{ display: 'flex', color: '#FE5860', mt: 1 }}>
                            <LocalShippingIcon />
                            <MyText variant="body1" sx={{ ml: 2 }}>Нет доставки</MyText>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <MyButton>Добавить в корзину</MyButton>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            {array2.map((item, index) => (
                                <MyText variant="body1" key={index} sx={{ mt: 0.8, color: '#9B9B9B' }}>{item.label}<span style={{ marginLeft: 15, color: 'black' }}>{item.value}</span></MyText>
                            ))}
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainInfo