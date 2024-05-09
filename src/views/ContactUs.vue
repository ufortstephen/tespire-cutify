<template>
  <div class="bg-white">
    <Banner />
    <div class="layout-wrapper-content top-0 pt-0 pb-0">
      <div class="grid gap-10 md:grid-cols-2">
        <div class="order-2 relative md:order-1 px-3 pb-10 md:pb-0 md:px-0">
         
          <p class="text-2xl">Our contact info</p>

          <div class="mt-8 space-y-5">
            <div class="flex items-center gap-3">
              <img
                src="/assets/icons/contact/bx-mail-send.svg"
                alt=""
                class="w-5"
              />
              <span class="text-sm font-light text-[#46474B]"
                >Cutify_ng@info.com</span
              >
            </div>
            <div class="flex items-center gap-3">
              <img src="/assets/icons/contact/phone.svg" alt="" class="w-4" />
              <span class="text-sm font-light text-[#46474B]"
                >+234- 8123456789</span
              >
            </div>
            <div class="flex items-start gap-3">
              <img src="/assets/icons/location.svg" alt="" class="w-3" />
              <span class="text-sm font-light text-[#46474B]"
                >Goldlink House, 2 Harare Steet, Off <br />
                Rabat Street, Zone 6, Wuse, Abuja..</span
              >
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:absolute bottom-40 right-0">
            <img src="/assets/icons/contact/contact-icon.svg" alt="" />
          </div>
        </div>
        <div class="relative md:-top-32 order-1 md:order-2">
          <form action="" class="bg-white w-full p-5 px-6 rounded-lg shadow-lg">
            <p class="text-2xl">Send a message</p>
            <p class="text-sm font-light mt-2">
              Fell free to contact us anytime. We will get back to you as soon
              as we can.
            </p>

            <div class="mt-8">
              <input
                type="text"
                placeholder="Name"
                class="rounded-lg p-2 block"
              />
            </div>
            <div class="mt-8">
              <input
                type="email"
                placeholder="Email address"
                class="rounded-lg p-2 block"
              />
            </div>
            <div class="mt-8">
              <textarea
                name=""
                id=""
                class="rounded-lg border-[#D3D3D4] w-full min-h-[200px]"
              ></textarea>
            </div>
            <div class="mt-10">
              <app-button
                text="Send message"
                type="submit"
                buttonClasses="border h-max p-4 px-6 rounded-lg text-white w-full bg-[#57AEDD] border-[#57AEDD] text-[13px] "
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
  
  <script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import Banner from "@/components/pages/contact/Banner.vue";

import Footer from "@/components/Universal/Footer.vue";

const _router = useRouter();
</script>
  
  <style scoped lang="scss">
@import "@/assets/main.scss";
input {
  border: 1px #d3d3d4 solid;
  height: 52px !important;
  &:focus {
    border: 1px #d3d3d4 solid !important;
  }
}
textarea {
  &:focus {
    outline: none !important;
    border: 1px #d3d3d4 solid !important;
    box-shadow: none !important;
  }
}
</style>