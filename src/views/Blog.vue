<template>
  <div class="bg-white">
    <Banner />
    <div class="layout-wrapper-content top-0">
      <p class="text-2xl text-center md:pt-10 lg:py-0">
        Our Blog: Your Beauty and Wellness Guide
      </p>
      <p class="text-center font-light mt-2 text-sm">
        Explore our weekly tips for maintaining gorgeous hair and managing your
        facial glow. <br />
        We're here to help you master the art of self-care."
      </p>

      <div class="my-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="(blog, index) in blogs" :key="index">
            <Blog :blog="blog" />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
    


<script>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import Banner from "@/components/pages/blog/Banner.vue";
import Footer from "@/components/Universal/Footer.vue";
import Blog from "@/components/Universal/Blog.vue";
import { ref, computed, defineComponent } from "vue";
import { useBlogsStore } from "@/stores/blogs";
import useBlogs from "@/composables/useBlog";

export default defineComponent({
  setup() {
    const blogsStore = useBlogsStore();
    console.log(blogsStore);
    const blogs = blogsStore.blogs

    const { getBlogs } = useBlogs();

    const loadingBlogs = computed(() => blogsStore.loadingBlogs);

    return {
      loadingBlogs,
      blogsStore,
      getBlogs,
      blogs
    };
  },

  components: { Banner, Footer, Blog },

  mounted() {
    this.getBlogs(36);
  },

  created() {},
  methods: {
    async loginUser() {
      const isValid = await this.v$.$validate();

      if (isValid) {
        this.loggingIn = true;
        await this.login(this.credentials);
        this.loggingIn = false;
      }
    },
  },
});
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