import React from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/system'

import { MyText } from '../..'
import ThemeMain from '../../../theme'
import { WorkCardProps } from '../../../interface'

const Root = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    background: '#FFFFFF',
    padding: 15,
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
    justifyContent: 'space-between',
    borderRadius: 12,
    height: 100
}))

const WorkCard: React.FC<WorkCardProps> = ({ title, price, city }) => {
    return (
        <Root>
            <MyText variant="h6" sx={{ color: ThemeMain.palette.primary.main }}>{title}</MyText>
            <MyText variant="body1" sx={{ color: '#343434' }}>{city}</MyText>
            <MyText variant="body1" sx={{ color: '#343434' }}>Зарплата: от<span>{price}</span></MyText>
        </Root>
    )
}

export default WorkCard