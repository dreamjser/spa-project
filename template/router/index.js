const name = '{{paths}}';
const path = '/{{paths}}';
const title = '{{title}}';

const component = () => import('@/views/{{paths}}');

export default [{
  name,
  path,
  component,
  meta: {
    title,
  },
}];
