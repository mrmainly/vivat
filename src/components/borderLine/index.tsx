import React from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/system'

import { BorderLineProps } from '../../interface'

const BorderLineStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    background: '#d4d4d4',
    height: 1,
    transform: 'scaleY(0.5)',
    marginTop: 5
}))


const BorderLine = ({ ...props }) => {
    return <BorderLineStyle {...props} />
}

export default BorderLine