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
    forgotPassword(data, dispatch, navigate) {
        api('api/v1/users/refresh-password').post(null, data).then(res => {
            dispatch({ type: 'notification', payload: { status: 'success', active: true, text: 'В ближайшее время на ваш телефон придет смс сообщение с новым паролем.' } })
            navigate('/login')
        }).catch(error => dispatch({ type: 'notification', payload: { status: 'error', active: true, text: ' Пароль не был восстановлен. Указанный номер телефона не зарегистрирован. Пожалуйста проверьте верно ли указан номер.' } }))
    }
    sendRegister(data, dispatch) {
        api('api/v1/users/code/1/send/').post(null, data).then(res => {
            dispatch({ type: 'verify_code', payload: { code: res.data.code } })
            dispatch({ type: 'notification', payload: { status: 'success', active: true, text: `ваш пароль: ${res.data.code}` } })
            dispatch({ type: 'register_version', payload: { v1: false, verify_version: true, password_version: false } })
        }).catch(error => dispatch({ type: 'register', payload: { danger_text: true } }))
    }
    sendVerifyCode(data, dispatch) {
        api('api/v1/users/code/2/verify/').post(null, data).then(res => {
            dispatch({ type: 'register_version', payload: { v1: false, verify_version: false, password_version: true } })
        }).catch(error => dispatch({ type: 'notification', payload: { status: 'error', active: true, text: ' error' } }))
    }
    sendPassword(data, dispatch) {
        api('api/v1/users/code/3/set_password/').post(null, data).then(res => {
            dispatch({ type: 'auth_modal', payload: { sign_up: false, sign_in: true, forgot: false } })
        }).catch((error) => dispatch({ type: 'notification', payload: { status: 'error', active: true, text: ' error' } }))
    }
    async getAccountUser() {
        let result = await api(`api/v1/users/me/`).get(null)
        return result
    }
    putAccountUser(data, dispatch) {
        api('api/v1/users/me/').patch(null, data).then(res => {
            dispatch({ type: 'profile_modal', payload: { status: 'success', open: true } })
        }).catch(() => dispatch({ type: 'profile_modal', payload: { status: 'error', open: true } }))
    }
    async getFavorites() {
        let result = await api(`api/v1/favorites/`).get(null)
        return result
    }
    deleteFavorite(id, dispatch) {
        api(`api/v1/favorites/${id}`).delete(null).then(res => {

        }).catch(() => dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'Товар не удален' } }))
    }
    transferFavorite(id, dispatch) {
        api(`api/v1/favorites/transfer/${id}`).post(null).then(res => {
            dispatch({ type: 'notification', payload: { status: 'success', active: true, text: 'Товар добавлен в корзину' } })
        }).catch(() => dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'Товар не найден' } }))
    }
    async getOrdersList() {
        let result = await api(`api/v1/orders/cart/`).get(null)
        return result
    }
    sendPhoneMailForgotPassword(data, type, dispatch) {
        const result = api(type == 'phone'
            ?
            `api/v1/users/reset_phone/`
            :
            'api/v1/users/reset_email/'
        ).post(null, type == 'phone'
            ?
            { phone: data.phone }
            :
            { email: data.email }
        )
            .then(res => {
                return res.data
            }).catch((error) => dispatch({ type: 'notification', payload: { status: 'error', active: true, text: type === 'phone' ? 'Номер телефона не найден' : 'Электронная почта не найдена' } }))
        return result
    }
    sendVerifyCodeForgot(data, dispatch) {
        const result = api('api/v1/users/code/2/verify/')
            .post(null, data)
            .then(res => {
                return res.data
            })
            .catch(error => dispatch({ type: 'notification', payload: { status: 'error', active: true, text: 'Не правильный код' } }))
        return result
    }
    reset_password(data, dispatch) {
        api('api/v1/users/reset_password/')
            .post(null,
                {
                    code: data.code,
                    password: data.password
                })
            .then(res => {
                dispatch({ type: 'auth_modal', payload: { sign_up: false, sign_in: true, forgot: false } })
            })
            .catch(error => console.log(error))
    }
}

export default new API()