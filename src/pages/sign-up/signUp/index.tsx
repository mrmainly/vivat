import React from 'react'

import { Box } from '@mui/material'
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

const SignUp = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Main>
                <MyText variant="h6">Регистрация</MyText>
                <Form onSubmit={() => navigate('/sign-up-verification')}>
                    <Input label="Номер телефона" />
                    <Box sx={{ textAlign: 'start' }}>
                        <MyText variant="body2"> На Ваш номер телефона придет код подтверждения</MyText>
                    </Box>
                    <Input label="E-Mail" />
                    <MyButton sx={{ mt: 3 }}>Далее</MyButton>
                </Form>
                <Box sx={{ display: 'flex', mt: 3, mb: 1 }}>
                    <MyText sx={{ mr: 3 }}>Есть аккаунт?</MyText>
                    <Link to="/signIn" >Вход</Link>
                </Box>
                <BorderLine />
                <Link to="/" style={{ marginTop: 10 }}>Вернуться на сайт</Link>
            </Main>
        </Box>
    )
}

export default SignUp