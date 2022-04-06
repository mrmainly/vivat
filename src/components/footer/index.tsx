import React from 'react'

import { Grid, Box } from '@mui/material'
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'

import { MyContainer, MyText, BorderLine } from '..'

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

const Footer = () => {
    const Array = [
        {
            title: 'Каталог товаров',
            columns: [
                {
                    label: 'Лекарственные препараты',
                    href: '/'
                },
                {
                    label: 'БАД',
                    href: '/'
                },
                {
                    label: 'Медицинские изделия',
                    href: '/'
                },
                {
                    label: 'Медтехника',
                    href: '/'
                },
            ]
        },
        {
            title: '',
            columns: [
                {
                    label: 'Гигиена',
                    href: '/'
                },
                {
                    label: 'Мама и малыш',
                    href: '/'
                },
                {
                    label: 'Гигиена',
                    href: '/'
                },
                {
                    label: 'Здоровое питание',
                    href: '/'
                },
            ]
        },
        {
            title: 'Компания',
            columns: [
                {
                    label: 'О компании',
                    href: '/'
                },
                {
                    label: 'Адреса аптек',
                    href: '/'
                },
            ]
        },
        {
            title: 'Покупателям',
            columns: [
                {
                    label: 'Как оформить заказ',
                    href: '/'
                },
                {
                    label: 'Программа лояльности',
                    href: '/'
                },
                {
                    label: 'Бонусная программа',
                    href: '/'
                },
                {
                    label: 'Личный кабинет',
                    href: '/'
                },
                {
                    label: 'Политика конфиденциальности',
                    href: '/'
                },
            ]
        },
    ]
    return (
        <MyContainer wrapper={true} sx={{
            bgcolor: '#48B453',
            minHeight: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
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
                                <Link to={item.href} key={index} style={{ marginTop: 10, textDecoration: 'none', color: 'white', width: 'max-width' }}>{item.label}</Link>
                            ))}
                        </Box>
                    </GridItem>
                ))}
            </Grid>
            <BorderLine />
            <MyText sx={{ mt: 2 }}>© 2021 Да здравствует здоровье «Vivat»</MyText>
        </MyContainer>
    )
}

export default Footer