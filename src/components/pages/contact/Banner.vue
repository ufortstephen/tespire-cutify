<template>
  <img
    src="/assets/images/contact-banner-2.svg"
    alt=""
    class="block h-[200px] w-full object-cover relative top-[60px] lg:hidden"
  />

  <section
    class="h-[400px] md:h-[400px] lg:h-[350px] lg:flex flex-col items-center justify-center gap-5 relative pb-10 banner top-[60px] md:top-[80px] hidden md:flex"
  >
    <div class="layout-wrapper-content top-0">
      <div class="hidden md:flex flex-col gap-10 relative -top-8">
        <p
          class="text-left leading-10 md:leading-7 font-normal text-[#fff] flex items-center gap-2"
        >
          <span class="block w-[60px] h-0 border-b"></span> Contact us
        </p>
        <div class="flex items-center gap-4">
          <router-link :to="{ name: 'index' }" class="">
            <img src="/assets/icons/contact/facebook.svg" alt="" />
          </router-link>
          <router-link :to="{ name: 'index' }" class="">
            <img src="/assets/icons/contact/instagram.svg" alt="" />
          </router-link>
          <router-link :to="{ name: 'index' }" class="">
            <img src="/assets/icons/contact/twitter.svg" alt="" />
          </router-link>
          <router-link :to="{ name: 'index' }" class="">
            <img src="/assets/icons/contact/linkedin.svg" alt="" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const _router = useRouter();
</script>
  
  <style scoped lang="scss">
@import "@/assets/main.scss";
.banner {
  background-image: url("/assets/images/contact-banner.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
@media (max-width: 768px) {
  .banner {
    background-image: url("");
  }
}
</style>