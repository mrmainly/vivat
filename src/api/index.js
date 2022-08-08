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

    //forgot

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
}

export default new API();
