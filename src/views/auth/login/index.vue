<template>
  <div class="router-view">
    <div class="page-container">
      <tabs>
        <tab-item label="登录">
          1
        </tab-item>
        <tab-item label="注册">
          2
        </tab-item>
      </tabs>
    </div>
  </div>
</template>

<script>
import mixins from '@/common/mixins';
import filters from '@/common/filters';
import {tabs, tabItem } from '@ui/tabs';

export default {
  data() {
    return {

    };
  },
  mixins,
  filters,
  components: {
    tabs,
    tabItem,
  },
  created() {
    this.$api.auth.login().then(r => {
      console.log(r, 9090);
    }).catch(r => {
      console.log(r, 888);
    });
  }
};
</script>

<style lang="less" scoped>

</style>

