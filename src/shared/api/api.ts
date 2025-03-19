import axios from "axios";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage.ts";

const baseUrl = import.meta.env.VITE_API_URL

export const $api = axios.create({
    baseURL: baseUrl,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }
})
