export default instance => {
  instance.interceptors.response.use(
    r => {
      const {
        data: { errorCode, errorMsg }
      } = r;

      if (errorCode !== '0') {
        if (!r.config.hasOwnError) {
          App.toast(errorMsg);
          return r;
        } else {
          return Promise.reject(r);
        }
      }

      return r;
    },
    error => {
      App.toast(error.message || '请求失败');
    }
  );
};
