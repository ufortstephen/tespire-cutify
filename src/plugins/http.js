import axios from 'axios';
import { useAuthStore } from "@/stores/auth";


const http = axios.create({
    baseURL: `https://tespire.tech/wp-json/wp/v2/`,
});

http.interceptors.request.use((config) => {
    const authStore = useAuthStore();
    let headers = authStore.auth;
    if (headers) {
        config.headers["access-token"] = headers["access-token"];
        config.headers["client"] = headers["client"];
        config.headers["expiry"] = headers["expiry"];
        config.headers["uid"] = headers["uid"];
        config.headers["token-type"] = headers["token-type"];
    }
    return config;
});

export default http;