


<template>
  <div class="flex md:hidden">
    <button
      :class="`hamburger ${mobileNavOpen && 'active'}`"
      aria-controls="mobile-nav"
      @click="mobileNavOpen = !mobileNavOpen"
    >
      <span class="sr-only">Menu</span>
      <img src="/assets/icons/hamburger.svg" alt="" />
    </button>

    <nav
      id="mobile-nav"
      class="absolute top-full z-20 left-0 w-full overflow-hidden transition-all duration-300 ease-in-out h-max"
      :class="mobileNavOpen ? 'isOpen' : 'closed'"
    >
      <ul class="bg-[#DDEFF8] px-4 py-10 h-max flex flex-col gap-8">
        <li v-for="(nav, index) in navLinks" :key="index">
          <router-link :to="{ name: nav.link }" class="text-md text-danger">
            {{ nav.navName }}
          </router-link>
        </li>
        <li>
          <AppButton
            text="Create account"
            @click="$router.push('/sign-up')"
            buttonClasses="border h-max p-2 px-5 rounded-lg text-primary border-primary text-[13px]"
          />
        </li>
        <li>
          <AppButton
            text="Login"
            @click="$router.push('/login')"
            buttonClasses="border h-max p-2 px-5 rounded-lg text-white bg-primary border-primary text-[13px] "
          />
        </li>
      </ul>
    </nav>
  </div>
</template>


<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { navLinks } from "@/utils/helpers";
import AppButton from "@/components/Universal/Button.vue";

const route = useRoute();

let mobileNavOpen = ref(false);
const trigger = ref();
const mobileNav = ref();

watch(route, async (oldRoute, newRoute) => {
  mobileNavOpen.value = false;
});
</script>


<style scoped lang="scss">
#mobile-nav {
  &.isOpen {
    height: 100svh;
    display: block;

    ul {
      height: 100%;
    }
  }
  &.closed {
    opacity: 0;
    display: none;
  }
}
</style>


