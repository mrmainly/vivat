import React from 'react'

import { Box, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'

import { Input, Form, MyText, MyButton, BorderLine } from '../../../components'

const Main = styled(Box)(({ theme }) => ({
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
    background: '#FFFFFF',
    minHeight: 400,
    width: 240,
    marginTop: 90,
    padding: 36,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
}))

const SignUpVerification = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Main>
                <MyText variant="h6">Регистрация</MyText>
                <MyText variant="body2"> Мы отправили код для подтверждения на Ваш номер телефона</MyText>
                <Form onSubmit={() => navigate('/sign-up-verification')}>
                    <Input label="Код подтверждения" />
                    <MyButton sx={{ mt: 3 }}>Далее</MyButton>
                </Form>
                <Box sx={{ display: 'flex', mt: 3, mb: 1 }}>
                    <MyText sx={{ mr: 3 }}>Есть аккаунт?</MyText>
                    <Link to="/signIn" >Вход</Link>
                </Box>
                <MenuItem>Отправить код повторно (120 сек)</MenuItem>
                <BorderLine />
                <Link to="/" style={{ marginTop: 10 }}>Назад</Link>
                <Link to="/" style={{ marginTop: 10 }}>Вернуться на сайт</Link>
            </Main>
        </Box>
    )
}

export default SignUpVerification