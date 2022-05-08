import React, { useContext } from 'react'

import { Drawer, Box, IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { MyText, FavoritesCard } from '../..'
import { StateContext, DispatchContext } from '../../../store'
import ThemeMain from '../../../theme'

const FavoritesDrawer = () => {
    const navigate = useNavigate()
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    const handleDrawerClose = () => dispatch({ type: 'drawers', payload: { profile_drawer: false, main_drawer: false, favorites_drawer: false } })
    const cards = [
        {
            title: 'Нурофен лонг 0,2+0,5 N12 Табл П/Плен/Оболоч',
            stock: false,
            deliveryStatus: true,
            price: 200,
            number: 2,
            id: 1
        },
        {
            title: 'Нурофен лонг 0,2+0,5 N12 Табл П/Плен/Оболоч',
            stock: true,
            deliveryStatus: true,
            price: 200,
            number: 2,
            id: 1
        },
        {
            title: 'Нурофен лонг 0,2+0,5 N12 Табл П/Плен/Оболоч',
            stock: true,
            deliveryStatus: true,
            price: 200,
            number: 2,
            id: 1
        },
        {
            title: 'Нурофен лонг 0,2+0,5 N12 Табл П/Плен/Оболоч',
            stock: true,
            deliveryStatus: true,
            price: 200,
            number: 2,
            id: 1
        }
    ]
    return (
        <Drawer
            {...{
                anchor: "right",
                open: state.drawers.favorites_drawer,
                onClose: handleDrawerClose,
            }}
        >
            <Box style={{
                width: 300, padding: 30, height: '100%'
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <IconButton onClick={() => handleDrawerClose()}><img src="/img/Close_round_light.png" /></IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/img/Favorite_light.png" />
                    <MyText variant="h6" sx={{ ml: 1, color: ThemeMain.palette.primary.main }}>Избранные товары</MyText>
                </Box>
                <MyText variant="body1" sx={{ mt: 1.5 }}><span>4</span> товара</MyText>
                {cards.map((item, index) => (
                    <FavoritesCard {...item} key={index} />
                ))}
            </Box>
        </Drawer>
    )
}

export default FavoritesDrawer