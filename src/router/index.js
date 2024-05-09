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
        title: "Tespire Cutify  - Onboarding",
        requiresAuth: false
      },

    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs,
      meta: {
        layout: "default",
        title: "Tespire Cutify  - Contact Us",
        requiresAuth: false
      },

    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
      meta: {
        layout: "default",
        title: "Tespire Cutify  - Blog",
        requiresAuth: false
      },

    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        layout: "auth",
        title: "Tespire Cutify  - Login",
      },

    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp,
      meta: {
        layout: "auth",
        title: "Tespire Cutify  - SignUp",
      },

    }
  ]
})


router.beforeEach(checkSession)


export default router
