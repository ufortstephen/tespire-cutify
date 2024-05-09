<template>
  <section class="bg-white md:pb-10">
    <div class="layout-wrapper-content top-0">
      <div class="flex flex-col w-full mr-auto overflow-x-hidden pb-8">
        <h1
          class="font-normal text-black leading-[2.5rem] text-left text-base text-2xl text-center"
        >
          Why Cutify service booking <br class="md:hidden" />
          app
          <span class="text-primary hero-text">is perfect for you</span>
        </h1>
      </div>

      <div
        class="grid md:grid-cols-2 gap-x-10 lg:gap-x-40 gap-y-8 md:gap-y-12 py-5"
      >
        <div class="flex items-start gap-4">
          <img src="/assets/icons/booking.svg" alt="" class="w-10 md:w-14" />
          <div class="flex flex-col gap-2">
            <p>Easy booking</p>
            <p class="text-sm font-light md:w-full leading-7">
              Say goodbye to long wait times and phone calls. Browse and book
              beauty and wellness services with ease with our user-friendly
              interface. Book your favorite services anytime, anywhere
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <img src="/assets/icons/cogs.svg" alt="" class="w-10 md:w-14" />
          <div class="flex flex-col gap-2">
            <p>Wide Range of Services</p>
            <p class="text-sm font-light md:w-full leading-7">
              Discover a diverse array of beauty and wellness services all in
              one place. We have everything you need to look and feel your best.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <img src="/assets/icons/bx-group.svg" alt="" class="w-10 md:w-14" />
          <div class="flex flex-col gap-2">
            <p>Expert Professionals</p>
            <p class="text-sm font-light md:w-full leading-7">
              Connect with top professionals who are dedicated to providing
              top-notch services tailored to your preferences.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <img src="/assets/icons/bx-group.svg" alt="" class="w-10 md:w-14" />
          <div class="flex flex-col gap-2">
            <p>Personalized Experience</p>
            <p class="text-sm font-light md:w-full leading-7">
              Customize your appointments according to your schedule,
              preferences, and desired treatments. Enjoy a personalized
              experience that caters to your individual needs.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <img src="/assets/icons/bell.svg" alt="" class="w-10 md:w-14" />
          <div class="flex flex-col gap-2">
            <p>Convenient Reminders</p>
            <p class="text-sm font-light md:w-full leading-7">
              Never miss an appointment again with our convenient reminder
              notifications. Stay organized and keep track of your upcoming
              beauty and wellness sessions effortlessly.
            </p>
          </div>
        </div>
        <div class="flex items-start gap-4">
          <img src="/assets/icons/card.svg" alt="" class="w-10 md:w-14" />
          <div class="flex flex-col gap-2">
            <p>Secure Payment</p>
            <p class="text-sm font-light md:w-full leading-7">
              Experience worry-free transactions with our secure payment
              options. Your financial information is protected, allowing you to
              focus solely on your self-care journey.
            </p>
          </div>
        </div>
      </div>
      <div class="mt-10 text-center w-max mx-auto">
        <app-button
          text="Try Cutify now"
          buttonClasses="border h-max p-3 px-6 rounded-lg text-white bg-[#57AEDD] border-[#57AEDD] text-[13px] "
        />
      </div>
    </div>
  </section>
</template>
      
  <script setup>
</script>
      
      
  <style scoped lang="scss">
@import "@/assets/main.scss";
.hero-text {
  position: relative;
  display: inline-block;
  &::after {
    content: "";
    position: absolute;
    display: block;
    top: 10%;
    left: 30px;
    width: 180%;
    height: 40px;
    background-image: url("/assets//icons/divider.svg");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 99999;
  }
}

@media (max-width: 768px) {
  .hero-text {
    &::after {
      content: "";
      top: 30%;
      left: 50px;
      width: 100%;
    }
  }
}
</style>