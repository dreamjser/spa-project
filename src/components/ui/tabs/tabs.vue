<template>
  <div class="tabs-wrap">
    <div class="tabs-header">
      <div class="header-item"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{'tab-active': tab.isActive}"
        @click="onTabClick(tab)">
        {{ tab.label }}
      </div>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: this.$children,
    };
  },
  methods: {
    onTabClick(tab) {
      this.tabs.forEach(tab => {
        tab.isActive = false;
      });
      tab.isActive = true;
      tab.isLoad = true;
    },
    initActiveTab() {
      let hasActive = this.tabs.some(tab => {
        return tab.isActive === true;
      });

      if(!hasActive) {
        this.tabs[0].isActive = true;
        this.tabs[0].isLoad = true;
      }
    }
  },
  created() {
    this.$nextTick(() => {
      this.initActiveTab();
    });
  }
};
</script>

<style lang="less">
.tabs-header{
  display: flex;
  padding: 30px 20px 0;
  >.header-item{
    flex: 1;
    color: #333;
    background-color: #fff;
    border: 1px #419aff solid;
    border-right: none;
    font-size: 30px;
    text-align: center;
    padding: 20px 0;
    &:first-child{
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    &:last-child{
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-right: 1px #419aff solid;
    }
  }
  >.tab-active{
    background-color: #419aff;
    color: #fff;
  }
}
.tab-content{
  padding: 20px;
}
</style>
