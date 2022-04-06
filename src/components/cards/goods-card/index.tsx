import React from 'react'

import { Card, Box, IconButton, MenuItem } from '@mui/material'
import { styled } from '@mui/system'

import { GoodsCardProps } from '../../../interface'
import { MyText, MyButton } from '../../../components'

const Root = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: 200,
    background: '#FFFFFF',
    marginTop: 20,
    padding: 20,
}))

const Img = styled('img')(({ theme }) => ({
    width: '100%',
    height: 170,
    filter: 'drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.1))',
    objectFit: 'cover'
}))

const CombinedBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5
}))

const GoodsCard: React.FC<GoodsCardProps> = ({ img, description, price, specialPrice, specialText }) => {
    return (
        <Root>
            <Img src={img} />
            <MyText variant="body1" sx={{
                mt: 2,
                fontFamily: 'Montserrat',
                color: '#202020',
                fontWeight: 'bold',
                height: 70,
                overflow: 'hidden',
            }}>
                {description}...
            </MyText>
            <MyText variant="body1" sx={{ color: '#2F80ED', mt: 0.5, cursor: 'pointer' }}>Производитель</MyText>
            <MyText variant="body1" sx={{ color: '#55CD61', mt: 0.5, cursor: 'pointer' }}>В наличии</MyText>
            <CombinedBox>
                <Box sx={{ display: 'flex' }}>
                    <MyText variant="h6" sx={{
                        fontWeight: 'bold',
                        fontFamily: 'Montserrat'
                    }}>
                        {price}₽
                    </MyText>
                    <MyText variant="body2" sx={{
                        fontWeight: 'bold',
                        fontFamily: 'Montserrat',
                        color: '#999999',
                        textDecoration: 'line-through',
                        ml: 1
                    }}>
                        {specialPrice}₽
                    </MyText>
                </Box>
                <IconButton size="small" sx={{ mr: 1 }}><img src="/img/Frame1208.png" /></IconButton>
            </CombinedBox>
            <MyText variant="body2" sx={{ color: '#EB5757' }}>{specialText}</MyText>
            <CombinedBox>
                <MyButton sx={{ width: 130 }} size="medium">В корзину</MyButton>
                <IconButton size="small" sx={{ mr: 1 }}><img src="/img/Favorite_light.png" /></IconButton>
            </CombinedBox>
        </Root>
    )
}

export default GoodsCard