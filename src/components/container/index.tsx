import React from 'react'

import { styled } from '@mui/system'
import { Container, Box } from '@mui/material'

import { MyContainerProps } from '../../interface'

const MyContainer: React.FC<MyContainerProps> = ({ children, wrapper, bgImg, lg, md, xs, xl, sm, minHeight, ...props }) => {
    const WrapperContainer = styled(Box)(({ theme }) => ({
        backgroundImage: `url(/img/${bgImg}.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: minHeight ? minHeight : 100,
        [theme.breakpoints.down('lg')]: {
            minHeight:
                lg ?
                    lg : ''
        },
        [theme.breakpoints.down('xl')]: {
            minHeight:
                xl ?
                    xl : ''
        },
        [theme.breakpoints.down('md')]: {
            minHeight:
                md ?
                    md : ''
        },
        [theme.breakpoints.down('sm')]: {
            minHeight:
                sm ?
                    sm : ''
        },
        [theme.breakpoints.down('xs')]: {
            minHeight:
                xs ?
                    xs : ''
        },
    }))
    const CustomContainer = styled(Container)(({ theme }) => ({
        minHeight: minHeight ? minHeight : 100,
        [theme.breakpoints.down('lg')]: {
            minHeight:
                lg ?
                    lg : ''
        },
        [theme.breakpoints.down('xl')]: {
            minHeight:
                xl ?
                    xl : ''
        },
        [theme.breakpoints.down('md')]: {
            minHeight:
                md ?
                    md : ''
        },
        [theme.breakpoints.down('sm')]: {
            minHeight:
                sm ?
                    sm : ''
        },
        [theme.breakpoints.down('xs')]: {
            minHeight:
                xs ?
                    xs : ''
        },
    }))
    return (
        <>
            {wrapper ?
                <WrapperContainer {...props}>
                    <Container>
                        {children}
                    </Container>
                </WrapperContainer>
                :
                <CustomContainer  {...props}>
                    {children}
                </CustomContainer>
            }
        </>
    )
}

export default MyContainer