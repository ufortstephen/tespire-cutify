<template>
  <div>
    <div class="header"><Header /></div>
    <div class="layout-wrapper bg-white">
      <div class="layout-wrapper-bg">
        <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold">Cutify</h1>
        <p class="leading-10 md:w-2/3 text-sm text-center">
          Embrace self-care and indulge in a world of beauty and wellness.
          Explore our curated selection of services and effortlessly book
          appointments right in your neighborhood.
        </p>
      </div>
      <div
        class="auth-wrapper-content bg-white lg:h-screen flex flex-col gap-2 items-center justify-center"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
  
<script>
import Header from "@/components/Header.vue";

export default {
  name: "AuthLayout",
  components: { Header },

  setup() {
    return {};
  },
  data() {
    return {};
  },

  computed: {},
};
</script>
  
<style lang="scss" scoped>
.layout-wrapper {
  display: grid;
  grid-template-columns: 45% 55%;
  align-items: center;
  .layout-wrapper-bg {
    height: 100vh;
    top: 80px;
    background: url(/assets/images/auth-bg.png) no-repeat center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: white;
    align-items: center;
    justify-content: center;
  }
}

.header {
  display: none !important;
}

@media (max-width: 1200px) {
  .layout-wrapper {
    position: relative;
    top: 60px;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 2rem;
    .layout-wrapper-bg {
      height: 300px;
    }
  }
  .header {
    display: block !important;
  }
}
</style>
  