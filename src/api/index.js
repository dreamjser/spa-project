import request from '@/common/request';
import qs from 'qs';
import urls from './urls';

const API_URL = 'http://yapi.demo.qunar.com/mock/63572';
const api = {};

const createFormData = params => {
  const formData = new FormData();
  Object.keys(params).forEach(k => {
    formData.append(k, params[k]);
  });
  return formData;
};

// 获取url
const getConfigUrl = config => {
  const { url, baseURL } = config;

  if (baseURL) {
    return baseURL + url;
  }

  return API_URL + url;
};

// 获取method
const getConfigMethod = config => {
  let m = 'post';

  if (config.method) {
    const { method } = config;
    m = method;
  }

  return m;
};

// 生成请求方法
const createRequestFunction = o => (opts = { data: {}, config: {} }) => {
  let { data, config } = opts;
  config = Object.assign({}, o, config);

  if (!config.isUpload) {
    data = qs.stringify(data);
  } else {
    data = createFormData(data);
  }

  config.url = getConfigUrl(config);
  config.method = getConfigMethod(config);

  if (config.method === 'get') {
    config.params = data;
  } else {
    config.data = data;
  }

  return request(config).then(r => {
    return r.data;
  });
};

// 组装请求方法
const fillRequestMethods = (api, urls) => {
  Object.keys(urls).forEach(k => {
    let o = urls[k];
    if (typeof o === 'string') {
      o = { url: urls[k] };
    }
    if (o.url) {
      api[k] = createRequestFunction(o);
    } else {
      api[k] = {};
      fillRequestMethods(api[k], o);
    }
  });
};

fillRequestMethods(api, urls);

api.install = Vue => {
  Vue.prototype.$api = api;
};

export default api;
