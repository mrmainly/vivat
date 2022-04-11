import React from 'react'

import { Box } from '@mui/material'
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'

import { Input, Form, MyText, MyButton, BorderLine } from '../../components'

const Main = styled(Box)(({ theme }) => ({
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)',
    background: '#FFFFFF',
    minHeight: 400,
    width: 240,
    marginTop: 90,
    textAlign: 'center',
    padding: 36,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

}))

const SignIn = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Main>
                <MyText variant="h6">Вход</MyText>
                <Form>
                    <Input label="Номер телефона" />
                    <Input label="Пароль" />
                    <MyButton sx={{ mt: 3 }}>Вход</MyButton>
                </Form>
                <Box sx={{ display: 'flex', mt: 3 }}>
                    <MyText sx={{ mr: 3 }}>Нет аккаунта?</MyText>
                    <Link to="/signUp" >Регистрация</Link>
                </Box>
                <Link to="/signUp" style={{ marginTop: 15, marginBottom: 10 }}>Забыли пароль?</Link>
                <BorderLine />
                <Link to="/" style={{ marginTop: 10 }}>Вернуться на сайт</Link>
            </Main>
        </Box>
    )
}

export default SignIn