import React from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/system'

import { MyText } from '../..'
import ThemeMain from '../../../theme'

interface PharmacyContactsCardProps {
    title: string,
    description: string,
    mail: string,
    contacts: string,
    address: string,
    img: string
}

const Root = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    height: 240,
}))

const PharmacyContactsCard: React.FC<PharmacyContactsCardProps> = ({ title, description, mail, contacts, address, img }) => {
    return (
        <Root>
            <img src={img} style={{ height: '100%', width: 200 }} />
            <Box sx={{ ml: 2.5 }}>
                <MyText variant="h6" sx={{ fontWeight: 600 }}>{title}</MyText>
                <MyText variant="body1" sx={{ mt: 1 }}>{description}</MyText>
                <MyText variant="body1" sx={{ mt: 1, color: ThemeMain.palette.primary.main }}>{mail}</MyText>
                <MyText variant="body1" sx={{ mt: 1 }}>{contacts}</MyText>
                <MyText variant="body1" sx={{ mt: 1 }}>{address}</MyText>
            </Box>
        </Root>
    )
}

export default PharmacyContactsCard