<template>
  <section class="bg-primary md:py-10">
    <div class="layout-wrapper-content">
      <div
        class="flex flex-col gap-4 md:gap-6 items-center justify-center lg:w-2/3 mx-auto pb-10"
      >
        <h1
          class="hero-text font-normal text-white leading-[2.5rem] text-center text-base  text-2xl"
        >
          Find beauty and wellness services near you
        </h1>

        <!-- Search -->
        <div class="flex flex-col md:flex-row items-center w-full gap-4">
          <div class="w-full lg:w-[90%] bg-white rounded-lg py-1 px-2 md:px-0">
            <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              <div class="grid md:grid-cols-2 gap-2 items-center pl-2">
                <div
                  class="flex items-center gap-2 border-b md:border-none py-3 md:py-0"
                >
                  <img
                    src="/assets/icons/location.svg"
                    alt=""
                    class="w-[15px]"
                  />
                  <div
                    class="flex items-center justify-between w-full md:w-fit gap-4"
                  >
                    <p class="font-light text-xs input-label text-[#909093]">
                      Location:
                    </p>
                    <div class="flex items-center gap-1">
                      <select
                        class="h-max border-none focus:outline-none active:outline-none text-sm font-light"
                      >
                        <option value="All">All</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  class="flex items-center gap-2 border-b md:border-none py-3 md:py-0"
                >
                  <img
                    src="/assets/icons/bx-calendar.svg"
                    alt=""
                    class="w-[20px]"
                  />
                  <div
                    class="flex items-center justify-between w-full md:w-fit gap-4"
                  >
                    <p class="font-light text-xs input-label text-[#909093]">
                      Date:
                    </p>
                    <div class="flex items-center gap-1">
                      <select
                        class="h-max border-none focus:outline-none active:outline-none text-sm font-light"
                      >
                        <option value="All">Any day</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2 pl-2 pb-2 md:pb-0 md:pl-0">
                <span class="hidden md:inline mx-2 text-[#D3D3D4]">|</span>
                <img src="/assets/icons/search.svg" alt="" />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search for service. E.g Braids"
                />
              </div>
            </div>
          </div>
          <div class="text-left w-full md:w-[10%]">
            <app-button
              text="Search"
              buttonClasses=" h-max p-3.5 px-6 rounded-lg text-white bg-[#57AEDD]  text-center items-center text-[13px] "
            />
          </div>
        </div>
        <!-- Search -->

        <div
          class="my-3 flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-3"
        >
          <app-button
            text="Hair salon"
            :showIcon="true"
            buttonClasses=" h-max p-2 md:px-4 rounded-lg text-[#46474B] bg-[#F1E8DB] text-[13px]"
          >
            <template #icon>
              <img src="/assets/icons/search.svg" alt="" />
            </template>
          </app-button>
          <app-button
            text="Knotless braids"
            :showIcon="true"
            buttonClasses=" h-max p-2 md:px-4 rounded-lg text-[#46474B] bg-[#F1E8DB] text-[13px]"
          >
            <template #icon>
              <img src="/assets/icons/search.svg" alt="" />
            </template>
          </app-button>

          <app-button
            text="Hair treatment"
            :showIcon="true"
            buttonClasses=" h-max p-2 md:px-4 rounded-lg text-[#46474B] bg-[#F1E8DB] text-[13px]"
          >
            <template #icon>
              <img src="/assets/icons/search.svg" alt="" />
            </template>
          </app-button>
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