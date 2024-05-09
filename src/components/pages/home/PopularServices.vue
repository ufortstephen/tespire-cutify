<template>
  <section class="bg-white md:pt-10">
    <div class="layout-wrapper-content top-0">
      <div class="flex flex-col w-full md:w-[50%] mr-auto">
        <h1
          class="hero-text font-[600] text-black leading-[2.5rem] text-left text-base text-2xl"
        >
          Explore popular service on Cutify
        </h1>
        <span class="text-sm font-light mt-2">
          Check our top-rated services for an exceptional beauty and wellness
          experience. From relaxing spa treatments to expert styling.
        </span>
        <span class="text-sm font-light mt-3">
          Have a service you want to onboard?
          <router-link
            :to="{ name: 'index' }"
            class="text-primary font-normal text-sm"
          >
            Sign up as a professional
          </router-link>
        </span>
      </div>
      <div class="mt-3 flex items-center justify-end">
        <router-link
          :to="{ name: 'index' }"
          class="text-primary font-normal text-sm flex items-center gap-1"
        >
          See more
          <img src="/assets/icons/arrow-right.svg" alt="" class="w-3 h-3" />
        </router-link>
      </div>

      <div class="grid lg:grid-cols-2 gap-6 md:gap-4 mt-3">
        <ProductCard :product="products[0]" />
        <div class="grid grid-cols-2 gap-4">
          <ProductCard :product="products[1]" :isMini="true" />
          <ProductCard :product="products[2]" :isMini="true" />
        </div>
      </div>
      <div class="grid lg:grid-cols-2 gap-6 md:gap-4 mt-8">
        <div class="grid grid-cols-2 gap-4">
          <ProductCard :product="products[3]" :isMini="true" />
          <ProductCard :product="products[4]" :isMini="true" />
        </div>
        <ProductCard :product="products[5]" />
      </div>
    </div>
  </section>
</template>
    
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import ProductCard from "@/components/Universal/ProductCard.vue";
const products = ref([
  { name: "MOJ Spa center", imageurl: "product-one.svg" },
  { name: "MOJ Spa center", imageurl: "product-two.svg" },
  { name: "MOJ Spa center", imageurl: "product-three.svg" },
  { name: "MOJ Spa center", imageurl: "product-four.svg" },
  { name: "MOJ Spa center", imageurl: "product-five.svg" },
  { name: "MOJ Spa center", imageurl: "product-six.svg" }
]);

const _router = useRouter();
</script>
    
    
<style scoped lang="scss">
@import "@/assets/main.scss";

</style>