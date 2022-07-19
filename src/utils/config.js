import axios from "axios";

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzNyIsIkhldEhhblN0cmluZyI6IjA3LzA2LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NjA5NjAwMDAwMCIsIm5iZiI6MTY1NzIxMzIwMCwiZXhwIjoxNjg2MjQzNjAwfQ.S0dhEC93DT6Ph-Eh2v-GDOb1El9gd9e7KdXhqUXtWuc";
export const DOMAIN = "https://elearningnew.cybersoft.edu.vn/";
export const ACCESSTOKEN = "accessToken";
export const USER_LOGIN = "USER_LOGIN";

export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

// const arr = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]

// const display = arr.map(()=>{

// })
let a = localStorage.getItem(ACCESSTOKEN);
let b = "Bearer " + JSON.parse(a);
http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      TokenCybersoft: TOKEN_CYBERSOFT,
      Authorization: `Bearer ${JSON.parse(localStorage.getItem(ACCESSTOKEN))}`,
    };
    return config;
  },
  (errors) => {
    return Promise.reject({ errors });
  }
);
