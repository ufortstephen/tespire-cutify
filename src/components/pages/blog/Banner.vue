<template>
  <section
    class="h-max w-full md:h-max lg:h-max lg:flex flex-col items-center gap-5 relative pb-10 md:pb-0 banner top-[60px] md:top-[80px] mb-[60px] md:mb-[80px] md:flex overflow-x-hidden lg:h-[280px] 2xl:h-[400px]"
  >
    <p
      class="block w-[100%] h-full ml-10 md:ml-40 text-left leading-10 md:leading-7 font-normal text-[#fff] flex items-center gap-2"
    >
      <span class="block w-[60px] h-0 border-b"></span> Blog
    </p>
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
  background-image: url("/assets/images/blog-banner.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
}
@media (max-width: 768px) {
  .banner {
    height: 200px;
    background-size: cover;
    background-position: center;
  }
}
</style>