import axios from 'axios';
import showLoading from './interceptors/show-loading';
import handleError from './interceptors/handle-error';

const instance = axios.create({
  timeout: 20000,
});

showLoading(instance);
handleError(instance);

export default instance;
