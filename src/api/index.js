import axios from "axios";
import React from "react";
import cookie from "js-cookie";

import ROUTES from "../routes";

const testURL = "http://127.0.0.1:8000/";
const publicURL = "http://xn----7sbbagaytx2c4ad.xn--p1ai/";

const api = (url) => {
    const token = cookie.get("jwttoken");
    if (token) {
        const instance = axios.create({
            baseURL: publicURL + url,
            headers: {
                Authorization: "Token " + token,
                "Content-Type": "application/json",
            },
        });
        return instance;
    } else {
        const instance = axios.create({
            baseURL: publicURL + url,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return instance;
    }
};

class API {
    //sign-in
    getToken({ username, password }) {
        const result = api("api/v1/users/login/").post(null, {
            username: username,
            password: password,
        });
        return result;
    }

    //sign-up
    sendRegister(data) {
        return api("api/v1/users/code/1/send/").post(null, data);
    }

    sendPassword(data) {
        const result = api("api/v1/users/code/3/set_password/").post(
            null,
            data
        );
        return result;
    }

    //verifi code
    sendVerifyCode(data) {
        const result = api("api/v1/users/code/2/verify/").post(null, data);
        return result;
    }

    //me
    async getAccountUser() {
        let result = await api(`api/v1/users/me/`).get();
        return result;
    }
    putAccountUser(data) {
        const result = api("api/v1/users/me/").patch(null, data);
        return result;
    }

    //forgot
    sendPhoneMailForgotPassword(data, type) {
        const result = api(
            type == "phone"
                ? `api/v1/users/reset_phone/`
                : "api/v1/users/reset_email/"
        ).post(
            null,
            type == "phone" ? { phone: data.phone } : { email: data.email }
        );
        return result;
    }

    reset_password(data) {
        return api("api/v1/users/reset_password/").post(null, {
            code: data.code,
            password: data.password,
        });
    }

    //orders || basket
    async getOrdersList() {
        let result = await api(`api/v1/orders/cart/`).get();
        return result;
    }

    deleteOrdersAll() {
        return api(`api/v1/orders/cart/items/delete_all/`).delete(null);
    }

    sendOrder(data) {
        const result = api("api/v1/orders/cart/complete/").post(null, data);
        return result;
    }

    deleteProductItem(id) {
        return api(`api/v1/orders/items/${id}/`).delete(null);
    }

    //favorites
    async getFavorites() {
        let result = await api(`api/v1/favorites/`).get();
        return result;
    }

    deleteFavorite(id) {
        return api(`api/v1/favorites/${id}/`).delete();
    }

    transferFavorite(id, dispatch) {
        return api(`api/v1/favorites/transfer/${id}/`).post();
    }

    //employments
    async getEmployments(city) {
        let result = await api(`api/v1/employments/?city_name=${city}`).get();
        return result;
    }

    async getEmploymentsDetail(id) {
        let result = await api(`api/v1/employments/${id}/`).get();
        return result;
    }

    //city
    async getCity() {
        let result = await api(`api/v1/cities/`).get();
        return result;
    }

    //blog
    async getBlog(query, type) {
        let result = await api(
            `api/v1/blogs/${
                type == "query"
                    ? query
                        ? `?query=${query}`
                        : ""
                    : `?topic_query=${query}`
            }`
        ).get();
        return result;
    }

    async getBlogDetail(id) {
        let result = await api(`api/v1/blogs/${id}/`).get();
        return result;
    }

    async getTopic() {
        let result = await api(`api/v1/blogs/topics/`).get();
        return result;
    }

    //promotion
    async getPromotion() {
        let result = await api(`api/v1/promotion/`).get();
        return result;
    }

    async getPromotionDetail(id) {
        let result = await api(`api/v1/promotion/${id}`).get();
        return result;
    }

    //my-status
    async getMeStatus() {
        let result = await api(`api/v1/orders/me/status/`).get();
        return result;
    }

    async getMeArchieve() {
        let result = await api(`api/v1/orders/me/archieve/`).get();
        return result;
    }
}

export default new API();
