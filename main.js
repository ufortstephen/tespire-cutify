import { createApp } from 'vue'
import './src/stores/index'
import { createPinia } from 'pinia'


// Pinia
const pinia = createPinia();
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
pinia.use(piniaPluginPersistedstate);

import http from './src/plugins/http'

import api from './src/api'

import './src/assets/main.scss'


import App from './src/App.vue'
import router from './src/router'

// Layouts
import Blank from "./src/layouts/Blank.vue";
import Default from "./src/layouts/Default.vue";
import Auth from "./src/layouts/Auth.vue";


// Vue Cookies
import VueCookies from 'vue3-cookies'


// Global Components
import AppButton from "@/components/Universal/Button.vue";
import VueLoadImage from 'vue-load-image'



const app = createApp(App)



app.use(VueCookies, {
    expireTimes: "14d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None"
});

app.use(pinia)



app.component("app-button", AppButton);
app.component("blank-layout", Blank);
app.component("default-layout", Default);
app.component("auth-layout", Auth);
app.component("vue-load-image", VueLoadImage);

app.config.globalProperties.$http = http;
app.config.globalProperties.api = api;



app.use(router)


app.mount('#app')
