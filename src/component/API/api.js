export const BASE_URL = 'http://sandip-shopping-app.herokuapp.com/api'; 
const PRODUCTS_URL = '/categories/dashboard-products';
const ADD_PRODUCT_URL = '/products';

const buildHeader = (token) => {
    var header = {
        //accept: 'application/json',
        //'Cache-Control': 'no-cache',
        //'Access-Control-Allow-Origin': 'http://192.168.102.120/api.itelbpo/api',
        Authorization: 'Bearer ' + token
    };

    return header;
};

export const API = {
    getProduct: (onResponse, data, BASE_URL, token) => {
        request(onResponse, data, 'GET', BASE_URL + PRODUCTS_URL, token);
    },
    setProduct: (onResponse, data, BASE_URL, token) => {
        request(onResponse, data, 'POST', BASE_URL + ADD_PRODUCT_URL, token);
    }
};

async function request(onResponse, data, type, featureURL, token, requestNumber) {
    let response = '';
    let headers = buildHeader(token);

    try {
        if (type === 'GET') {
            response = await fetch(featureURL, {
                method: type,
                headers: headers,
            });

            var responseJSON = await response.json();
            responseJSON.requestNumber = requestNumber
            if (responseJSON) {
                onResponse.success(responseJSON);
            } else {
                onResponse.error(responseJSON);
            }
        } else {
            console.log("post function")
            response = await fetch(featureURL, {
                method: type,
                headers: headers,
                body: JSON.parse(data),
            });
        }
    } catch (error) {
        console.log(error);

        error = 'Network connection error, kindly try again later.';
        onResponse.error(error);
        console.log("api responseJSON catch error",error);

        if (onResponse.complete) {
            onResponse.complete();
        }
    }
}