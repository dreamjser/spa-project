<template>
<div v-show="isActive">
  <div v-if="isLoad">
    <slot></slot>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      isLoad: this.active,
      isActive: this.active,
    };
  },
  props: {
    label: {
      type: String,
    },
    active: {
      type: Boolean,
      default: false,
    },
    onBefore: {
      type: Function,
      default: function(){},
    }
  }
};
</script>

<style lang="less" scoped>

</style>
