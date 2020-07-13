import Vue from 'vue';
import Render from './App';
import router from './router';
import fastClick from 'fastclick';
import api from '@/api';
import '@/common/app';

Vue.config.productionTip = false;

fastClick.attach(document.body);

Vue.use(api);

App.vm = new Vue({
  el: '#app',
  router,
  render: h => h(Render)
});
