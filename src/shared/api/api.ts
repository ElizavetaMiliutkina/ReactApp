import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage.ts";

// Используем process.env вместо import.meta.env
const baseUrl = import.meta.env.VITE_API_URL
console.log(baseUrl, 'baseUrl')

export const $api = axios.create({
    baseURL: baseUrl,
    // headers: {
    //     authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) ? 'user' : undefined
    // }
})

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) ? 'user' : undefined;
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

