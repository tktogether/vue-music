// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import App from './App'
import VueRouter from 'vue-router';
import routes from './routers'; // 引入路由配置
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex'


Vue.config.productionTip = false

// 引入路由
Vue.use(VueRouter);
// 用 axios 进行 Ajax 请求
Vue.use(VueAxios, axios);

const router = new VueRouter({
  mode: 'history',
  'linkActiveClass': 'active',
  routes // （缩写）相当于 routes: routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})