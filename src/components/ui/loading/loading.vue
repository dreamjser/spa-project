<template>
  <div class="ui-loading" v-show="isShow">
    <div class="loading-box">
      <spinner type="circles" size="40px"></spinner>
      <p>{{title}}</p>
    </div>
  </div>
</template>

<script>
import { Spinner } from 'vux';

export default {
  data: () => ({
    isShow: false
  }),
  components: {
    Spinner,
  },
  props: {
    title: {
      type: String,
      default: '加载中...'
    }
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    }
  }
};
</script>


<style lang="less" scoped>
.ui-loading{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  .loading-box{
    width: 120PX;
    padding: 20PX 0 14PX;
    background-color: rgba(0,0,0,.7);
    border-radius: 8PX;
    text-align: center;
  }
  p{
    padding: 8PX 0 0;
    font-size: 14PX;
    text-align: center;
    color: #fff;
  }
}
</style>
<style lang="less">
.ui-loading{
  .vux-spinner{
    display: flex;
    margin: auto;
    vertical-align: inherit;
    stroke: #fff;
    fill: #fff;
    align-items: center;
    justify-content: center;
  }
}
</style>
