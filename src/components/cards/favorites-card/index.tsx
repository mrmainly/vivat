import React from 'react'
import { Box } from '@mui/material'

import { BorderLine, MyText } from '../..'
import ThemeMain from '../../../theme'

interface FavoritesCardProps {
    title: string,
    stock: boolean,
    deliveryStatus: boolean,
    price: number,
    number: any,
    id: number
}

const FavoritesCard: React.FC<FavoritesCardProps> = ({ title, stock, deliveryStatus, price, number, id }) => {
    return (
        <Box>
            <BorderLine />
            <MyText variant="h6">{title}</MyText>
            {stock
                ?
                <MyText variant="body1" sx={{ color: ThemeMain.palette.primary.main }}>В наличии</MyText>
                :
                <MyText variant="body1" sx={{ color: 'red' }}>В наличии</MyText>
            }
        </Box>
    )
}

export default FavoritesCard