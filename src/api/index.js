import axios from "axios";
import React from "react";
import cookie from "js-cookie";

const publicURL = "https://xn----7sbbagaytx2c4ad.xn--p1ai/";

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

    resend_phone(data) {
        return api("api/v1/users/code/1.5/resend/").post(null, {
            phone: data,
        });
    }

    getAutoComplite(value) {
        const result = api(`api/v1/goods/autocomplete/?name=${value}`).get();
        return result;
    }

    productsSearch(name) {
        const result = api(`api/v1/goods/search/?name=${name}`).get();
        return result;
    }

    //orders || basket
    async getCartsList() {
        let result = await api(`api/v1/carts/`).get();
        return result;
    }

    async getProducerList(id) {
        let result = await api(`api/v1/goods/producer_list/${id}`).get();
        return result;
    }

    getAddressAutoComplete(address) {
        let result = api(
            `api/v1/payments/gogo/autocomplete?address=${address}`
        ).get();
        return result;
    }

    getGogoCost(address) {
        let result = api(
            `api/v1/payments/gogo/get_cost?address=${address}`
        ).get();
        return result;
    }

    patchBasket(id, count) {
        const result = api(`api/v1/carts/${id}/`).patch(null, {
            count: count,
        });
        return result;
    }

    async getOrdersMe() {
        let result = await api(`api/v1/orders/me/`).get();
        return result;
    }

    async getOrdersMeStatus() {
        let result = await api(`api/v1/orders/me/status/`).get();
        return result;
    }

    deleteOrdersAll() {
        return api(`api/v1/carts/delete_all_items/`).delete(null);
    }

    sendOrder(data) {
        const result = api("api/v1/carts/complete/").post(null, data);
        return result;
    }

    deleteProductItem(id) {
        return api(`api/v1/carts/${id}/`).delete(null);
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

    addedFavorite(id) {
        return api(`api/v1/favorites/${id}/`).post(null);
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
                    : `?tags_query=${query}`
            }`
        ).get();
        return result;
    }

    async getBlogDetail(id) {
        let result = await api(`api/v1/blogs/${id}/`).get();
        return result;
    }

    async getTopic() {
        let result = await api(`api/v1/blogs/tags/`).get();
        return result;
    }

    //promotion
    async getPromotion() {
        let result = await api(`api/v1/promotion/`).get();
        return result;
    }

    async getPromotionMain() {
        let result = await api(`api/v1/promotion/main/`).get();
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

    async getMeStatusId(id) {
        let result = await api(`api/v1/orders/${id}/`).get();
        return result;
    }

    //departaments
    async getDeportaments() {
        let result = await api(`api/v1/departments/`).get();
        return result;
    }

    //Address
    async getAddress() {
        let result = await api(`api/v1/departments/organisations/1`).get();
        return result;
    }
}

export default new API();
