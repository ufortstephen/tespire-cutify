<template>
  <div class="rounded-t-lg">
    <vue-load-image>
      <template #image>
        <img
          :src="`${blog.jetpack_featured_media_url}`"
          class="w-full h-[200px] object-cover rounded-t-lg cursor-pointer"
          @click="handleBlogRoute(blog.link)"
        />
      </template>
      <template #preloader>
        <img
          :src="`/images/noun_image_trending.svg`"
          class="w-full h-[200px] object-cover rounded-t-lg"
        />
      </template>
    </vue-load-image>
    <div
      class="border border-[#D3D3D4] rounded-b-lg flex flex-col gap-4 p-2 md:p-4 h-28 max-h-28"
    >
      <p
        class="text-sm font-normal cursor-pointer"
        @click="handleBlogRoute(blog.link)"
      >
        {{ truncateString(blog.title.rendered) }}
      </p>

      <div
        class="flex items-center justify-between gap-2 flex-row"
      >
        <div class="flex items-center gap-2">
          <div class="flex items-cener gap-2">
            <p class="font-light text-sm text-[#46474B]">
              {{handleBlogTime(blog.date)}}
            </p>
          </div>
        </div>
        <button
          @click="handleBlogRoute(blog.link)"
          class="text-primary font-normal text-sm flex gap-1 items-center"
        >
          <img
            src="../../../assets/icons/arrow-right.svg"
            alt=""
            class="w-3 h-3"
          />
        </button>
      </div>
    </div>
  </div>
</template>
    
<script>
import moment from "moment";
export default {
  name: "Blog",
  props: {
    blog: Object,
  },
  methods: {
    callback: function (e) {
      this.$emit("onClick", e);
    },
    truncateString: (string, maxLength = 50) => {
      return string.length > maxLength
        ? `${string.substring(0, maxLength)}…`
        : string;
    },
    handleBlogRoute: (link) => {
      window.open(link, "_blank");
    },
    handleBlogTime: (time) => {
        return moment(time).fromNow()
    }
  },
  created() {},
};
</script>
    
    <style lang="scss" scoped>
</style>