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
    getAutoComplite(value) {
        const result = api(`api/v1/goods/autocomplete/?name=${value}`).get();
        return result;
    }

    productsSearch(name) {
        const result = api(`api/v1/goods/search/?name=${name}`).get();
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
