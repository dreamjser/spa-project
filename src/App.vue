<template>
  <div class="page-view">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="less">
@import '~@/assets/styles/reset';
@import '~@/assets/styles/reset-vux';

html,body{
  height: 100%;
}
.page-view {
  overflow: hidden;
}
.router-view {
  display: flex;
  flex-direction: column;
}
.router-view,
.page-view {
  width: 100%;
  height: 100%;
}
.page-container {
  flex: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 50px;
}
</style>
