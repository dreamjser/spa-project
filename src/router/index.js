import Vue from 'vue';
import Router from 'vue-router';

import home from './home';
import authlogin from './auth/login';
import myaccountindex from './my-account/index';
Vue.use(Router);

const router = new Router({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return {
      x: 0,
      y: 0
    };
  },

  routes: [
    ...myaccountindex,
    ...authlogin,
    ...home,
  ]
});

router.afterEach(route => {
  if (route.name) {
    document.body.setAttribute('data-page', route.name);
  }
});

export default router;
