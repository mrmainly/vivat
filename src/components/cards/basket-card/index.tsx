import React from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/system'

import { MyText } from '../..'

const Root = styled(Box)(({ theme }) => ({
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    background: '#FFFFFF',
    borderRadius: 12,
    margin: '5px 0px',
    height: 136,
    padding: 16,
}))

const BasketCard = () => {
    return (
        <Root>
            <Box sx={{ display: 'flex' }}>
                <img src="/img/prototypeimg.png" style={{
                    height: '100%',
                    borderRadius: 9,
                    filter: 'drop-shadow(2px 3px 8px rgba(0, 0, 0, 0.1))',
                }}
                />
                <Box sx={{ ml: 2.5, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <MyText variant="body1" sx={{ fontStyle: 'normal' }}>Нурофен лонг 0,2+0,5 N12 Табл П/Плен/Оболоч 22</MyText>
                    <MyText variant="body2">Производитель:<span style={{ marginLeft: 15 }}>Nurofenproizvoditel</span></MyText>
                    <MyText variant="body2">Код товара:<span style={{ marginLeft: 15 }}>322</span></MyText>
                    <MyText variant="body2" sx={{ color: '#55CD61' }}>В наличии</MyText>
                </Box>
            </Box>
            <Box>

            </Box>
        </Root>
    )
}

export default BasketCard