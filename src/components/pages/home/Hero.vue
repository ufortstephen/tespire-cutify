<template>
  <section
    class="bg-primary-100 min-h-max lg:min-h-max lg:pb-10 flex flex-col items-center justify-center gap-5 relative top-[60px] md:top-[80px]"
  >
    <div
      class="absolute top-5 flex items-center justify-between w-[90%] md:w-[85%]"
    >
      <vue-load-image>
        <template #image>
          <img
            src="/assets/icons/hero-utils-1.svg"
            class="w-[70%] md:w-[80%]"
          />
        </template>
      </vue-load-image>
      <vue-load-image>
        <template #image>
          <img
            src="/assets/icons/hero-utils-1.svg"
            class="w-[70%] md:w-[80%]"
          />
        </template>
      </vue-load-image>
    </div>
    <img
      src="/assets/icons/comb.svg"
      alt=""
      class="absolute left-0 top-[40%] w-[10%] md:w-[4%]"
    />
    <img
      src="/assets/icons/beauty-loader-recolor.svg"
      alt=""
      class="absolute right-0 top-[40%] w-[15%] md:w-[6%]"
    />

    <div class="layout-wrapper-content">
      <div
        class="flex flex-col gap-6 items-center justify-center lg:w-2/3 mx-auto"
      >
        <h1
          class="hero-text font-light leading-[2.5rem] text-center text-3xl md:text-5xl"
        >
          <span class="font-bold text-primary">Discover and book</span>
          <span class="hidden md:inline"> for a beauty </span>
        </h1>
        <h1
          class="hero-text font-light leading-[2.5rem] text-center text-3xl md:text-5xl"
        >
          <span class="md:hidden"> for a beauty </span>
          <span class="font-[800]"> and wellness services near you. </span>
        </h1>

        <p
          class="text-center leading-10 md:leading-7 font-normal text-[#46474B]"
        >
          Embrace self-care and indulge in a world of beauty and wellness.
          Explore our curated <br />
          selection of services and effortlessly book appointments right in your
          neighborhood.
        </p>

        <app-button
          text="Search and book an appointment"
          buttonClasses="border h-max p-2.5 px-6 rounded-lg text-white bg-primary border-primary text-[13px] "
        />
      </div>
    </div>

    <div
      class="grid grid-cols-3 md:w-[90%] items-center mx-auto mt-10 md:mt-0 py-10 lg:py-0"
    >
      <div>
        <vue-load-image>
          <template #image>
            <img
              src="/assets/icons/hero-utils-2.svg"
              class="w-[70%] md:w-[80%] ml-auto"
            />
          </template>
        </vue-load-image>
      </div>
      <div>
        <vue-load-image>
          <template #image>
            <img
              src="/assets/icons/hero-utils-4.svg"
              class="w-[100%] mx-auto relative top-4 md:top-16"
            />
          </template>
        </vue-load-image>
      </div>
      <div>
        <vue-load-image>
          <template #image>
            <img
              src="/assets/icons/hero-utils-3.svg"
              class="w-[100%] md:w-[80%]"
            />
          </template>
        </vue-load-image>
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
.hero-text .font-bold {
  position: relative;
  display: inline-block;
  &::after {
    content: "";
    position: absolute;
    display: block;
    top: 80%;
    left: -40px;
    width: 103%;
    height: 25px;
    background-image: url("/assets/icons/path.svg");
    background-size: cover;
    background-repeat: no-repeat;
  }
}

@media (max-width: 768px) {
  .hero-text .font-bold {
    &::after {
      content: "";

      left: 0px;
      width: 100%;
    }
  }
}
</style>