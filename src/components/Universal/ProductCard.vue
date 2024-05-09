<template>
  <div class="rounded-t-lg h-[320px] max-h-[350px] mb-5">
    <vue-load-image>
      <template #image>
        <img
          :src="`/assets/images/products/${product.imageurl}`"
          class="w-full h-[200px] object-cover rounded-t-lg"
        />
      </template>
    </vue-load-image>
    <div
      class="border border-[#D3D3D4] rounded-b-lg flex flex-col gap-4 h-[150px]"
      :class="isMini ? 'p-3' : 'p-5'"
    >
      <p class="text-base font-normal">{{ product.name }}</p>

      <div class="flex gap-2" :class="isMini ? 'items-start' : 'items-center'">
        <img src="../../../assets/icons/location.svg" alt="" class="w-5 h-5" />
        <p class="font-light text-sm text-[#46474B]">
          No 26. St Ives street. Lagos island. Lagos.
        </p>
      </div>
      <div
        class="flex items-center justify-between gap-2"
        :class="isMini ? 'flex-col md:flex-row' : 'flex-row'"
      >
        <div class="flex items-center gap-2">
          <img src="../../../assets/icons/star.svg" alt="" class="w-4 h-4" />
          <div class="flex items-cener gap-2">
            <p class="font-light text-sm text-[#46474B]">5.0</p>
            <p class="font-light text-sm text-[#46474B]">100 reviews</p>
          </div>
        </div>
        <router-link
          :to="{ name: 'index' }"
          class="text-primary font-normal text-sm flex gap-1"
          :class="isMini ? 'self-end' : 'items-center'"
        >
          <img
            src="../../../assets/icons/arrow-right.svg"
            alt=""
            class="w-3 h-3"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
    isMini: Boolean,
  },
  methods: {
    callback: function (e) {
      this.$emit("onClick", e);
    },
  }
};
</script>
  
  <style lang="scss" scoped>
</style>