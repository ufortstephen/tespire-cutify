<template>
  <section class="bg-[#F8FCFE] md:pb-10 w-full overflow-x-hidden">
    <div class="layout-wrapper-content top-0">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 lg:col-span-3 flex flex-col w-full pb-8 relative">
          <h1
            class="font-normal text-black leading-[2.5rem] text-left text-base text-2xl text-left"
          >
            What people are saying about us?
          </h1>
          <p class="text-sm font-light">
            Check out what customers and professionals are happily sharing about
            their Cutify experiences.
          </p>
         <div class="absolute -bottom-24 lg:bottom-10 left-0 w-full">
            <img src="/assets/icons/arrow.png" alt="" class="w-[40%] mr-24 md:w-[20%] md:mr-20 lg:w-[80%] ml-auto lg:mr-0">
         </div>
        </div>
        <div class="col-span-12 lg:col-span-9">
          <div class="text-left my-4">
            <img src="/assets/icons/quotes.svg" alt="" class="w-max ml-auto" />
          </div>

          <div class="grid md:grid-cols-3 gap-4 pb-10">
            <div class="rounded-md p-6 testimonial-box relative h-[240px] mb-10 bg-bottom md:bg-center  bg-cover md:bg-contain md:h-max pb-10 lg:pb-0 lg:h-[260px] lg:mb-0">
              <p class="font-normal text-sm leading-7">
                I love how convenient it is to book my favorite spa treatments
                through this platform. The service providers are top-notch!
              </p>
              <div class="absolute -bottom-8 left-8 w-full">
                <div class="flex items-center gap-3">
                  <img
                    src="/assets/images/testimonial-one.svg"
                    alt=""
                    class="w-12"
                  />
                  <div>
                    <h1 class="text-base text-[#46474B]">Jessica T.</h1>
                    <p class="font-light text-sm">12th may, 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-md p-6 testimonial-box relative h-[240px] mb-10 bg-bottom md:bg-center  bg-cover md:bg-contain md:h-max pb-10 lg:pb-0 lg:h-[260px] lg:mb-0">
              <p class="font-normal text-sm leading-7">
                As a professional in the industry, I've found this platform to
                be a game-changer. It connects me with clients who value my
                expertise
              </p>
              <div class="absolute -bottom-8 left-8 w-full">
                <div class="flex items-center gap-3">
                  <img
                    src="/assets/images/testimonial-one.svg"
                    alt=""
                    class="w-12"
                  />
                  <div>
                    <h1 class="text-base text-[#46474B]">Jessica T.</h1>
                    <p class="font-light text-sm">12th may, 2023</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="rounded-md p-6 testimonial-box relative h-[240px] mb-10 bg-bottom md:bg-center  bg-cover md:bg-contain md:h-max pb-10 lg:pb-0 lg:h-[260px] lg:mb-0">
              <p class="font-normal text-sm leading-7">
                I love how convenient it is to book my favorite spa treatments
                through this platform. The service providers are top-notch!
              </p>
              <div class="absolute -bottom-8 left-8 w-full">
                <div class="flex items-center gap-3">
                  <img
                    src="/assets/images/testimonial-one.svg"
                    alt=""
                    class="w-12"
                  />
                  <div>
                    <h1 class="text-base text-[#46474B]">Jessica T.</h1>
                    <p class="font-light text-sm">12th may, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
        
    <script setup>
</script>
        
        
    <style scoped lang="scss">
@import "@/assets/main.scss";
.testimonial-box {
  background-image: url("/assets/images/Union.svg");
  background-repeat: no-repeat;
//   background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>