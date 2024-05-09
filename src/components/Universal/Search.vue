<template>
  <div class="search-holder">
    <input type="text" :placeholder="placeholder"  v-model="searchTerm" @input="onInput" />
    <!-- button region -->
    <div v-if="hasButton" class="button-region" @click="onSubmitSearch">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.75 0.999999C13.75 0.585786 13.4142 0.25 13 0.249999L6.25 0.249999C5.83579 0.249999 5.5 0.585786 5.5 0.999999C5.5 1.41421 5.83579 1.75 6.25 1.75H12.25V7.75C12.25 8.16421 12.5858 8.5 13 8.5C13.4142 8.5 13.75 8.16421 13.75 7.75L13.75 0.999999ZM1.53033 13.5303L13.5303 1.53033L12.4697 0.469669L0.46967 12.4697L1.53033 13.5303Z"
          fill="#F5F2EE" />
      </svg>

    </div>
  </div>
</template>
  
<script>
import { computed } from 'vue'
import { debounce } from "lodash";
import { useGlobalTrackingStore } from '@/stores/globalTracking'



export default {
  name: "Search",
  props: {
    placeholder: {
      type: String,
      required: true,
      default: "Search ...",
    },
    searchOnSubmit: {
      type: Boolean,
      default: false,
    },

    hasButton: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      searchText: "",
    };
  },

  setup() {
    const globalTracking = useGlobalTrackingStore();
    const { changeSearchTerm } = useGlobalTrackingStore()
    const searchTerm = computed(() => globalTracking.searchTerm);
    changeSearchTerm('')
    return { searchTerm, changeSearchTerm }
  },
  computed: {},
  methods: {
    debounceSearch: debounce(function (e) {
      // this.$emit("input", e.target.value);
      this.changeSearchTerm(e.target.value);
    }, 300),
    onInput(e) {
      if (this.searchOnSubmit) {
        this.searchText = e.target.value;
        !e.target.value ? this.changeSearchTerm(e.target.value) : null;
        return;
      } else {
        this.debounceSearch(e);
      }
    },
    onSubmitSearch(e) {
      this.$emit("input", this.searchText);
      this.changeSearchTerm(this.searchText);
    },
  },
};
</script>
  
<style scoped lang="scss">
.search-holder {
  position: relative;
  width: 100%;

  input {
    border: 1px solid #000;
    padding: 0 14px;
    border-radius: 40px;
    background-color: transparent;
    font-family: "Inter", sans-serif;
    height: 2.5rem;
    font-size: 0.813rem;
    color: #232220;
    width: 100%;

    &::placeholder {
      text-transform: uppercase;
      font-size: 0.813rem;
      color: #7e7e7e;
      font-weight: 400;
    }

    &:focus,
    &:active {
      border: 1px solid #000 !important;
      outline: none;
      box-shadow: none !important;
    }
  }

  .button-region {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: #232220;
    height: 2.5rem;
    border-radius: 0px 40px 40px 0px;
    padding: 0 1rem;
    right: 0;
    top: 0;
  }
}
</style>
  