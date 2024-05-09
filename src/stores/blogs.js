import { defineStore, getActivePinia } from "pinia";




export const useBlogsStore = defineStore("blogs", {

    state: () => ({

        blogs: [],
        loadingBlogs: false,
        isSuccess: false
    }),
    actions: {
    },
    persist: true,
});



