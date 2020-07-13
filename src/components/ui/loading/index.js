import Vue from 'vue';
import loading from './loading';

const LoadingConstructor = Vue.extend(loading);
const instance = new LoadingConstructor({
  el: document.createElement('div'),
});

document.body.appendChild(instance.$el);

export default instance;
