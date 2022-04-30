import React from 'react'

import { Grid, Box } from '@mui/material'
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'

import { MyContainer, MyText, BorderLine } from '..'
import ROUTES from '../../routes'

const GridItem = styled(Grid)(({ theme }) => ({
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
}))

const FooterBox = styled(Box)(({ theme }) => ({
    background: 'white',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
}))

const Footer = () => {
    const Array = [
        {
            title: 'ПОМОЩЬ',
            columns: [
                {
                    label: 'Как сделать заказ',
                    href: ROUTES.ORDER
                },
                {
                    label: 'Оплата и бронирование',
                    href: ROUTES.BOOKING
                },
                {
                    label: 'Доставка',
                    href: ROUTES.DELIVERY
                },
                {
                    label: 'Новости',
                    href: '/'
                },
                {
                    label: 'Политика конфиденциальности',
                    href: '/'
                },
                {
                    label: 'Работа',
                    href: ROUTES.WORK
                },
                {
                    label: 'Обратная связь',
                    href: '/'
                },
            ]
        },
        {
            title: 'О НАС',
            columns: [
                {
                    label: 'О компании',
                    href: ROUTES.TEAM
                },
                {
                    label: 'Контакты',
                    href: ROUTES.CONTACTS
                },
                {
                    label: 'Оставить отзыв',
                    href: '/'
                },
                {
                    label: 'Контакты',
                    href: ROUTES.CONTACTS
                },
            ]
        },
        // {
        //     title: 'Компания',
        //     columns: [
        //         {
        //             label: 'О компании',
        //             href: '/'
        //         },
        //         {
        //             label: 'Адреса аптек',
        //             href: '/'
        //         },
        //     ]
        // },
        // {
        //     title: 'Покупателям',
        //     columns: [
        //         {
        //             label: 'Как оформить заказ',
        //             href: '/'
        //         },
        //         {
        //             label: 'Программа лояльности',
        //             href: '/'
        //         },
        //         {
        //             label: 'Бонусная программа',
        //             href: '/'
        //         },
        //         {
        //             label: 'Личный кабинет',
        //             href: '/'
        //         },
        //         {
        //             label: 'Политика конфиденциальности',
        //             href: '/'
        //         },
        //     ]
        // },
    ]
    return (
        <FooterBox>
            <MyContainer wrapper={false} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 300,
                color: '#55CD61',
                padding: 2,
                flexDirection: 'column'
            }}>
                <Grid container sx={{ mb: 2 }}>
                    {Array.map((item, index) => (
                        <GridItem item key={index} lg={3} xl={3} md={3} sm={6} xs={12}>
                            <MyText variant="h6">{item.title}</MyText>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}>
                                {item.columns.map((item, index) => (
                                    <Link to={item.href} key={index} style={{ marginTop: 10, textDecoration: 'none', color: '#55CD61', width: 'max-width' }}>{item.label}</Link>
                                ))}
                            </Box>
                        </GridItem>
                    ))}
                </Grid>
                <BorderLine />
                <MyText sx={{ mt: 2 }}>© 2021 Да здравствует здоровье «Vivat»</MyText>
            </MyContainer>
        </FooterBox>
    )
}

export default Footer