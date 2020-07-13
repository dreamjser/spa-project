import loading from '@ui/loading';

let count = 0;

const showLoading = () => {
  count++;
  if (count <= 1) {
    loading.show();
  }
};

const hideLoading = () => {
  if (count > 0) {
    count--;
  }

  if (count <= 0) {
    loading.hide();
  }
};

export default (instance) => {
  instance.interceptors.request.use((config) => {
    if (!config.slient) {
      showLoading();
    }
    return config;
  }, error => Promise.reject(error));

  instance.interceptors.response.use((r) => {
    if (!r.config.slient) {
      hideLoading();
    }
    return r;
  }, (error) => {
    hideLoading();
    return Promise.reject(error);
  });
};
