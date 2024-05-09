<template>
    <div>
      <div class="layout-wrapper">
  
        <Header />
        <div class="">
            <slot />
        </div>
      </div>
    </div>
  </template>
  <script>
  import Header from "@/components/Header.vue"
  export default {
    name: "DefaultLayout",
    components: {
      Header
    },
  };
  </script>
  
  <style lang="scss" scoped>
  
  .layout-wrapper-content {
    position: relative;
    top: 70px;
    margin: 0px 80px;
    min-width: calc(100vw - 144px);
    max-width: 1200px;
    margin: 0px auto;
    padding: 2rem 1rem;
  }
  </style>
  