import createHttpRequest from "@/utils/createHttpRequest";
import api from "@/api";
import { ref } from "vue";
import { defaultNoTrendingImage } from "@/utils/helpers";
import { useBlogsStore } from "@/stores/blogs";



export default function useBlogs() {



    const blogsStore = useBlogsStore();

    const getBlogs = async (payload) => {
        console.log(payload);
        blogsStore.loadingBlogs = true
        const {
            isSuccess,
            sendRequest,
            isLoading,
            response,
            data,
            error,
            isError
        } = createHttpRequest(api.blogs.getBlogs, payload)


        await sendRequest()

        console.log(data);

        if (isSuccess.value) {
            blogsStore.blogs = data.value;
            console.log(blogsStore);

        }
        console.log(blogsStore.blogs);
        blogsStore.loadingBlogs = false
        return {
            isSuccess, isError, data, error, isLoading,
        }

    }





    return {
        getBlogs
    }
}

