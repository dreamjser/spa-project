const name = 'auth/login';
const path = '/auth/login';
const title = '登录';

const component = () => import('@/views/auth/login');

export default [{
  name,
  path,
  component,
  meta: {
    title,
  },
}];
