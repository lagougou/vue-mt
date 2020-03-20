import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Order from '@/pages/Order';
import My from '@/pages/My';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
    },
    {
      path: '/my',
      name: 'My',
      component: My,
    },
  ],
});
