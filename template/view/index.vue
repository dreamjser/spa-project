<template>
  <div class="router-view">
    <div class="page-container">
      {{title}}
    </div>
  </div>
</template>

<script>
import mixins from '@/common/mixins';
import filters from '@/common/filters';

export default {
  data() {
    return {

    }
  },
  mixins,
  filters,
  created() {

  }
}
</script>

<style lang="less" scoped>

</style>

