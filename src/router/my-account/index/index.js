const name = 'my-account/index';
const path = '/my-account/index';
const title = '我的账户';

const component = () => import('@/views/my-account/index');

export default [{
  name,
  path,
  component,
  meta: {
    title,
  },
}];
