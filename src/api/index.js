import axios from 'axios';
import React from 'react';

const testURL = 'http://127.0.0.1:8000/'
const publicURL = 'https://xn-----8kcahlfadeo7a1bpea7akm5f8g.xn--p1ai/'

const api = (url) => {
    const token = cookie.get('jwttoken')
    if (token) {
        const instance = axios.create({
            baseURL: publicURL + url,
            headers: {
                'Authorization': "Token " + token,
                'Content-Type': 'application/json'
            },
        })
        return instance
    } else {
        const instance = axios.create({
            baseURL: publicURL + url,
            headers: {
                'Content-Type': 'application/json'
            },
        })
        return instance
    }
}

class API {
    getToken({ username, password }, dispatch, navigate) {
        api('api/v1/users/login').post(null, {
            username: username,
            password: password
        }).then(res => {
            cookie.set('jwttoken', res.data.token)
            dispatch({ type: 'notification', payload: { status: 'success', active: true, text: 'авторизация прошла успешно' } })
            navigate('/form-profile')
            console.log(res)
        }).catch(() => { dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'такого пользователя не существует' } }) })
    }
    register(data, dispatch, navigate) {
        api('api/v1/users/registration').post(null, data).then(res => {
            navigate('/login')
            dispatch({ type: 'notification', payload: { status: 'success', active: true, text: 'регистрация прошла успешно' } })
        }).catch((error) => dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'такой пользователь уже существует' } }))
    }
    forgotPassword(data, dispatch, navigate) {
        api('api/v1/users/refresh-password').post(null, data).then(res => {
            dispatch({ type: 'notification', payload: { status: 'success', active: true, text: 'В ближайшее время на ваш телефон придет смс сообщение с новым паролем.' } })
            navigate('/login')
        }).catch(error => dispatch({ type: 'notification', payload: { status: 'error', active: true, text: ' Пароль не был восстановлен. Указанный номер телефона не зарегистрирован. Пожалуйста проверьте верно ли указан номер.' } }))
    }
}

export default new API()