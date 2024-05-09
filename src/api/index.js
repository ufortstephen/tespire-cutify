import { blogsApi } from "./blogsApi";
import storeReset from "@/composables/resetStore";
import axios from "axios";


const http = axios.create({
    baseURL: ` https://tespire.tech/wp-json/wp/v2/`,
});



const initApi = ({ http }) => {
    http.interceptors.response.use(
        async (config) => {

            return config;
        },
    );


    http.interceptors.request.use((config) => {

        return config;
    });

    return {
        blogs: blogsApi(http)
    }

}

const api = initApi({ http });

export default api
