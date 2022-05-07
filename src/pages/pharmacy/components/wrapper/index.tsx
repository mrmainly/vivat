import React, { ReactNode } from 'react'
import { Box } from '@mui/material'
import { styled } from '@mui/system'

import { MyText, PharmacySideBar } from '../../../../components'

interface WrapperProps {
    children: ReactNode[] | ReactNode,
    title: string
}

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
    },
}))

const PharmacyWrapper: React.FC<WrapperProps> = ({ children, title }) => {
    return (
        <Box>
            <MyText variant="h5" style={{ marginBottom: 15, fontStyle: 'normal', fontWeight: 600 }}>{title}</MyText>
            <Wrapper>
                <PharmacySideBar />
                {children}
            </Wrapper>
        </Box>
    )
}

export default PharmacyWrapper