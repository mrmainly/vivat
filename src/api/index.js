import axios from 'axios';
import React from 'react';

import cookie from 'js-cookie'
import ROUTES from '../routes';

const testURL = 'http://127.0.0.1:8000/'
const publicURL = 'http://xn----7sbbagaytx2c4ad.xn--p1ai/'

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
            dispatch({ type: 'auth_modal', payload: { sign_in: false, forgot: false, sign_up: false } })
            console.log(res)
        }).catch((error) => alert('все плохо'))
    }
    register(data, dispatch, navigate) {
        api('api/v1/users/register/').post(null, data).then(res => {
            dispatch({ type: 'auth_modal', payload: { sign_up: false, sign_in: true, forgot: false } })
        }).catch((error) => dispatch({ type: 'register', payload: { danger_text: true } }))
    }
    forgotPassword(data, dispatch, navigate) {
        api('api/v1/users/refresh-password').post(null, data).then(res => {
            dispatch({ type: 'notification', payload: { status: 'success', active: true, text: 'В ближайшее время на ваш телефон придет смс сообщение с новым паролем.' } })
            navigate('/login')
        }).catch(error => dispatch({ type: 'notification', payload: { status: 'error', active: true, text: ' Пароль не был восстановлен. Указанный номер телефона не зарегистрирован. Пожалуйста проверьте верно ли указан номер.' } }))
    }

    async getAccountUser() {
        let result = await api(`api/v1/users/profile/`).get(null)
        return result
    }
    putAccountUser(data, dispatch) {
        api('api/v1/users/profile/update/').put(null, data).then(res => {
            alert('обновил')
        }).catch(() => alert('не обновил'))
    }
}

export default new API()