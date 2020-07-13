import Vue from 'vue';
import { AlertPlugin, ToastPlugin, ConfirmPlugin } from 'vux';
Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);

window.App = {
  device: navigator.userAgent.indexOf('iPhone') > -1 ? 'ios' : 'android',
  toast(text, type = 'text') {
    App.vm.$vux.toast.show({
      type,
      text,
      time: 1000
    });
  },
  alert(msg, title = '提示') {
    return new Promise(resolve => {
      App.vm.$vux.alert.show({
        title,
        content: msg,
        onHide: resolve
      });
    });
  },
  confirm(
    msg,
    opts = { title: '提示', confirmText: '确认', cancelText: '取消' }
  ) {
    const { title, confirmText, cancelText } = opts;
    return new Promise((resolve, reject) => {
      App.vm.$vux.confirm.show({
        title,
        content: msg,
        confirmText,
        cancelText,
        onCancel: reject,
        onConfirm: resolve
      });
    });
  }
};
