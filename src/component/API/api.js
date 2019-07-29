export const BASE_URL = "http://sandip-shopping-app.herokuapp.com/api";
const PRODUCTS_URL = "/categories/dashboard-products";
const ADD_PRODUCT_URL = "/products";
const GET_CATEGORIES = "/categories";
const ALL_PRODUCT_URL = "/products";
const LOGIN_URL = "/auth/login";
const SIGNUP_URL = "/auth/sign-up";
const GET_BRANDS = "/brands";

const buildHeader = token => {
  var header = {
    accept: "application/json",
    "Content-Type": "application/json",
    //'Cache-Control': 'no-cache',
    //'Access-Control-Allow-Origin': 'http://192.168.102.120/api.itelbpo/api',
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMWNiMTZlY2NhMmI5Njg1MzZhYTUyYyIsImlhdCI6MTU2NDM5OTg1NSwiZXhwIjoxNTY0NDg2MjU1fQ.DFxOIZKmH6mj96-3Rn3YZrYj_cLfKCiscItLtEYmvQY"
  };

  return header;
};

export const API = {
  getProduct: (onResponse, data, BASE_URL, token) => {
    request(onResponse, data, "GET", BASE_URL + PRODUCTS_URL, token);
  },
  setProduct: (onResponse, data, BASE_URL, token) => {
    request(
      onResponse,
      JSON.stringify(data),
      "POST",
      BASE_URL + ADD_PRODUCT_URL,
      token
    );
  },

  getAllProduct: (onResponse, data, BASE_URL, token) => {
    request(onResponse, data, "GET", BASE_URL + ALL_PRODUCT_URL, token);
  },

  getCategories: (onResponse, data, BASE_URL, token) => {
    request(onResponse, data, "GET", BASE_URL + GET_CATEGORIES, token);
  },
  getBrand: (onResponse, data, BASE_URL, token) => {
    request(onResponse, data, "GET", BASE_URL + GET_BRANDS, token);
  },

  setLogin: (onResponse, data, BASE_URL, token) => {
    console.log(
      "LOGIN DATA API",
      onResponse,
      JSON.stringify(data),
      BASE_URL,
      token
    );
    request(
      onResponse,
      JSON.stringify(data),
      "POST",
      BASE_URL + LOGIN_URL,
      token
    );
  },

  setSignUp: (onResponse, data, BASE_URL, token) => {
    console.log(
      "signup data api",
      onResponse,
      JSON.stringify(data),
      BASE_URL,
      token
    );
    request(
      onResponse,
      JSON.stringify(data),
      "POST",
      BASE_URL + SIGNUP_URL,
      token
    );
  }
};

async function request(
  onResponse,
  data,
  type,
  featureURL,
  token,
  requestNumber
) {
  let response = "";
  let headers = buildHeader(token);

  try {
    if (type === "GET") {
      response = await fetch(featureURL, {
        method: type,
        headers: headers
      });

      var responseJSON = await response.json();
      responseJSON.requestNumber = requestNumber;
      if (responseJSON) {
        onResponse.success(responseJSON);
      } else {
        onResponse.error(responseJSON);
      }
    } else {
      response = await fetch(featureURL, {
        method: type,
        headers: headers,
        body: JSON.parse(data)
      });
      console.log("response post===", response);
    }
  } catch (error) {
    console.log(error);

    error = "Network connection error, kindly try again later.";
    onResponse.error(error);
    console.log("api responseJSON catch error", error);

    if (onResponse.complete) {
      onResponse.complete();
    }
  }
}
