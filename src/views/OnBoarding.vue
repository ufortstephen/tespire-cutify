<template>
  <Hero />
  <Search />
  <Categories />
  <PopularServices />
  <WhyUS />
  <Testimonials />
  <Footer />
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import Hero from "@/components/pages/home/Hero.vue";
import Search from "@/components/pages/home/Search.vue";
import Categories from "@/components/pages/home/Categories.vue";
import PopularServices from "@/components/pages/home/PopularServices.vue";
import WhyUS from "@/components/pages/home/WhyUS.vue";
import Testimonials from "@/components/pages/home/Testimonials.vue";
import Footer from "@/components/Universal/Footer.vue";

const _router = useRouter();
</script>

<style scoped lang="scss">
@import "@/assets/main.scss";
.bottom-text {
  font-weight: 500;
}
</style>