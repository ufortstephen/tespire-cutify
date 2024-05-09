<template>
  <footer>
    <div class="bg-[#4991B8]">
      <div class="layout-wrapper-content top-0 mx-auto px-4 sm:px-6 pb-0">
        <div class="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
          <div class="md:col-span-4 lg:col-span-3">
            <div class="mb-2">
              <router-link :to="{ name: 'index' }">
                <img src="/images/logo.svg" class="w-[30%] md:w-[40%]" />
              </router-link>
            </div>
            <div class="text-white text-sm">
              ...book beauty & health services
            </div>
          </div>

          <div
            class="md:col-span-8 md:col-span-12 lg:col-span-9 grid sm:grid-cols-6 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8"
          >
            <div class="text-sm">
              <h6 class="text-white underline font-medium mb-2">Quick Links</h6>
              <ul class="mt-3">
                <li class="mb-2">
                  <router-link
                    :to="{ name: 'index' }"
                    class="text-white text-sm font-light"
                  >
                    Services
                  </router-link>
                </li>

                <li class="mb-2">
                  <router-link
                    :to="{ name: 'index' }"
                    class="text-white text-sm font-light"
                  >
                    Testimonials
                  </router-link>
                </li>

                <li class="mb-2">
                  <router-link
                    :to="{ name: 'index' }"
                    class="text-white text-sm font-light"
                  >
                    Blog
                  </router-link>
                </li>

                <li class="mb-2">
                  <router-link
                    :to="{ name: 'index' }"
                    class="text-white text-sm font-light"
                  >
                    Contact Us
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="text-sm">
              <h6 class="text-white underline font-medium mb-2">
                Our categories
              </h6>
              <ul class="mt-3">
                <li class="mb-2">
                  <router-link
                    :to="{ name: 'index' }"
                    class="text-white text-sm font-light"
                  >
                    Hair salon
                  </router-link>
                </li>

                <li class="mb-2">
                  <router-link
                    :to="{ name: 'index' }"
                    class="text-white text-sm font-light"
                  >
                    Barbing shops
                  </router-link>
                </li>

                <li class="mb-2">
                  <router-link
                    :to="{ name: 'index' }"
                    class="text-white text-sm font-light"
                  >
                    Spa
                  </router-link>
                </li>

                <li class="mb-2">
                  <router-link
                    :to="{ name: 'index' }"
                    class="text-white text-sm font-light"
                  >
                    Gym center
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="text-sm">
              <h6 class="hidden md:block text-white font-medium mb-2 opacity-0">
                Follow Us
              </h6>
              <ul class="mt-3">
                <li class="mb-2">
                  <router-link
                    :to="{ name: 'index' }"
                    class="text-white text-sm font-light"
                  >
                    Hair salon
                  </router-link>
                </li>

                <li class="mb-2">
                  <router-link
                    :to="{ name: 'index' }"
                    class="text-white text-sm font-light"
                  >
                    Barbing shops
                  </router-link>
                </li>

                <li class="mb-2">
                  <router-link
                    :to="{ name: 'index' }"
                    class="text-white text-sm font-light"
                  >
                    Spa
                  </router-link>
                </li>

                <li class="mb-2">
                  <router-link
                    :to="{ name: 'index' }"
                    class="text-white text-sm font-light"
                  >
                    Gym center
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="text-sm md:col-span-6 lg:col-span-3">
              <div class="flex items-center gap-4">
                <h6 class="text-white font-medium">Follow Us</h6>
                <div class="flex items-center gap-3">
                  <router-link :to="{ name: 'index' }">
                    <img
                      src="/assets/icons/facebook.svg"
                      class="w-[90%] md:w-[80%]"
                    />
                  </router-link>
                  <router-link :to="{ name: 'index' }">
                    <img
                      src="/assets/icons/instagram.svg"
                      class="w-[90%] md:w-[80%]"
                    />
                  </router-link>
                  <router-link :to="{ name: 'index' }">
                    <img
                      src="/assets/icons/twitter.svg"
                      class="w-[90%] md:w-[80%]"
                    />
                  </router-link>
                  <router-link :to="{ name: 'index' }">
                    <img
                      src="/assets/icons/linkedin.svg"
                      class="w-[90%] md:w-[80%]"
                    />
                  </router-link>
                </div>
              </div>

              <div class="mt-5">
                <span class="text-white font-light"
                  >Subscribe to our newsletter to get updates from us.</span
                >
              </div>
              <div class="flex items-center mt-3">
                <input
                  type="text"
                  placeholder="Enter your email"
                  class="py-6"
                />
                <app-button
                  text="Subscribe"
                  buttonClasses="h-max py-3.5 px-6  text-white bg-[#57AEDD]  text-center items-center text-[13px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="text-white text-center text-sm border-t border-[#D3D3D4] py-8"
      >
        Copyright © 2022 Genleaders All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style lang="scss" scoped>
input {
  background-color: white !important;
  border: none !important;
}
</style>