export const BASE_URL = 'http://sandip-shopping-app.herokuapp.com/api'; 
const PRODUCTS_URL = '/categories/dashboard-products';

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
    setProduct: (onResponse, data, BASE_URL) => {
        request(onResponse, data, 'POST', BASE_URL + PRODUCTS_URL);
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
            console.log('api ResData', responseJSON);
            responseJSON.requestNumber = requestNumber
            if (responseJSON) {
                console.log("api responseJSON",responseJSON);
                onResponse.success(responseJSON);
            } else {
                console.log("api responseJSON error",responseJSON);
                onResponse.error(responseJSON);
            }
        } else {
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