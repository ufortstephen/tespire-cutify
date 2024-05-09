<template>
  <div class="nav-container border-b border-[#D3D3D4] md:border-none">
    <div class="nav-content">
      <div class="nav h-[70px] md:h-[80px]">
        <header class="">
          <router-link :to="{ name: 'index' }">
            <img src="/images/logo.svg" class="w-[60%] md:w-[80%]" />
          </router-link>
        </header>

        <ul class="nav-links hidden md:flex">
          <li v-for="(nav, index) in navLinks" :key="index" class="px-4">
            <router-link :to="{ name: nav.link }" class="">
              {{ nav.navName }}
            </router-link>
          </li>
          <li>
            <AppButton
              text="Create account"
              buttonClasses="border h-max p-2 px-5 rounded-lg text-primary border-primary text-[13px]"
              @click="$router.push('/sign-up')"
            />
          </li>
          <li>
            <AppButton
              text="Login"
              buttonClasses="border h-max p-2 px-5 rounded-lg text-white bg-primary border-primary text-[13px] "
              @click="$router.push('/login')"

            />
          </li>
        </ul>
        <MobileMenu />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import AppButton from "@/components/Universal/Button.vue";
import MobileMenu from "@/components/Universal/MobileMenu.vue";
import { navLinks } from "@/utils/helpers";

export default {
  name: "AppHeader",

  setup() {
    return { navLinks };
  },
  components: {
    AppButton,
    MobileMenu,
  },
};
</script>

<style scoped lang="scss">
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 99999;

  .nav-content {
    margin: 0px 80px;
    min-width: calc(100vw - 144px);
    max-width: 1200px;
    margin: 0px auto;
    padding: 0rem 1rem;

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .nav-links {
        height: max-content;
        align-items: center;

        li {
          list-style-type: none;
          display: flex;
          align-items: center;
          height: max-content;
          gap: 1rem;

          a {
            color: #212227;
            display: flex;
            align-items: center;
            justify-content: center;
            height: max-content;
            text-decoration: none;

            font-size: 0.9rem;

            &.router-link-exact-active {
              position: relative;
              color: #57aedd;
              &::after {
                content: "";
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 100%;
                height: 2px;

                background-color: #57aedd;
              }
            }

            &:hover {
              opacity: 0.8;
            }
          }
          button {
            height: max-content;
            margin: 0 0.6rem;
          }
        }
      }

      .notification-holder {
        position: relative;
        width: 80px;
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0px 1rem;

        .badge {
          position: absolute;
          top: -8px;
          right: 10px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ce3c3c;
          color: #f5f2ee;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.713rem;
          cursor: pointer;
        }
      }
    }
  }
}

@media (min-width: 1200px) {
  .notification-holder {
    margin-right: 80px;
    padding: 0px 0px !important;

    .badge {
      right: -8px !important;

      top: -6px !important;
    }
  }
}
</style>