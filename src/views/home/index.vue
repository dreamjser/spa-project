<template>
  <div class="router-view">
    <div class="page-container">
      {{a|formatAmount}}
    </div>
  </div>
</template>

<script>
import mixins from '@/common/mixins';
import filters from '@/common/filters';
export default {
  data() {
    return {
      a: '2222333.444'
    };
  },
  mixins,
  filters,
  created() {
    console.log(GLOBAL_VARS.TEST_HOST, 222);
  }
};
</script>

<style lang="less" scoped>

</style>

