import { createRouter, createWebHistory } from 'vue-router'
import { checkSession } from "./checkSession"

import OnBoarding from '../views/OnBoarding.vue'
import ContactUs from '../views/ContactUs.vue'
import Blog from '../views/Blog.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: OnBoarding,
      meta: {
        layout: "default",
        title: "Gemnote Shopify  - Onboarding",
        requiresAuth: false
      },

    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs,
      meta: {
        layout: "default",
        title: "Gemnote Shopify  - Contact Us",
        requiresAuth: false
      },

    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      meta: {
        layout: "default",
        title: "Gemnote Shopify  - Blog",
        requiresAuth: false
      },

    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        layout: "auth",
        title: "Gemnote Shopify  - Login",
      },

    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
      meta: {
        layout: "auth",
        title: "Gemnote Shopify  - SignUp",
      },

    }
  ]
})


router.beforeEach(checkSession)


export default router
