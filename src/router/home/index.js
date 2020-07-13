const name = 'home';
const path = '/';
const title = '首页';

const component = () => import('@/views/home');

export default [{
  name,
  path,
  component,
  meta: {
    title,
  },
}];
