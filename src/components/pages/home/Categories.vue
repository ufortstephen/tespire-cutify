<template>
  <section class="bg-primary">
    <div class="layout-wrapper-content top-0">
      <div class="flex items-center justify-between">
        <h1
          class="hero-text font-normal text-white leading-[2.5rem] text-left text-base text-md"
        >
          Categories
        </h1>
        <div class="flex items-center gap-2">
          <button>
            <img src="/assets/icons/prev.svg" alt="" />
          </button>
          <button>
            <img src="/assets/icons/next.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="grid md:grid-cols-4 mt-2 gap-5">
        <div>
          <img src="/assets/images/category-one.png" alt="" class="w-full" />
          <p class="text-white mt-2 text-center text-sm">Hair</p>
        </div>
        <div>
          <img src="/assets/images/category-two.png" alt="" class="w-full" />
          <p class="text-white mt-2 text-center text-sm">Barbing Salon</p>
        </div>
        <div>
          <img src="/assets/images/category-three.png" alt="" class="w-full" />
          <p class="text-white mt-2 text-center text-sm">Spa</p>
        </div>
        <div>
          <img src="/assets/images/category-four.png" alt="" class="w-full" />
          <p class="text-white mt-2 text-center text-sm">Gym center</p>
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

.input-label {
  font-size: 15px;
}

input {
  border: none;
  padding: 0px 0px;
  &:focus {
    border: none !important;
  }
}
select {
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  &:active {
    border: none !important;
    outline: none !important;
  }
}
</style>