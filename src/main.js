// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Mint from 'mint-ui';
import Vue from 'vue';
import App from './App';
import router from './router';
// eslint-disable-next-line import/first
import 'mint-ui/lib/style.css';
import './assets/css/reset.css';
import './assets/js/rem';

Vue.config.productionTip = false;
Vue.use(Mint);
Vue.use(router);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
