import { defineStore, getActivePinia } from "pinia";




export const useAuthStore = defineStore("auth", {

    state: () => ({

        auth: {},
        isLoggedIn: false,
        isLogginIn: false,
        loggingOut: false,
        userEmail: null,
        isRequestingReset: false,
        changingPassword: false,
        isSuccess: false,
        resetPwdSuccessMessage: "",
    }),
    actions: {
    },
    persist: true,
});



