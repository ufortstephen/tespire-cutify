<template>
  <button
    class="flex items-center justify-center gap-1 md:gap-2 disabled:opacity-[0.4]"
    :type="type"
    :disabled="isDisabled"
    :class="buttonClasses"
    @click="callback($event)"
  >
    <slot name="icon" v-if="showIcon"></slot>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    text: {
      type: String,
      default: "Bitton Text",
    },
    buttonClasses: {
      type: String,
    },
    showIcon: Boolean,
    isDisabled: Boolean,
    type: String,
  },
  methods: {
    callback: function (e) {
      this.$emit("onClick", e);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  &:disabled {
    opacity: 0.4  !important;
    background-color: #57AEDD;
  }
}
</style>