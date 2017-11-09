// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import './common/js/rem.js';
import './common/stylus/index.styl';
import VueResource from 'vue-resource';
import store from './store/index';

Vue.use(VueResource);
Vue.config.productionTip = false;

// 全局放一个routlist
window.routeList = [];
router.beforeEach((to, from, next) => {
  if (to.name === 'home' || to.name === 'shops' || to.name === 'mine') {
    store.commit('showTabs');
  } else {
    store.commit('hideTabs');
  }

  if ((to.name === 'home' && (from.name === 'shops' || from.name === 'mine')) || (to.name === 'shops' && (from.name === 'home' || from.name === 'mine')) || (to.name === 'mine' && (from.name === 'shops' || from.name === 'home'))) {
    store.commit('noneEffect');
    // window.routeList = [];
    window.routeList.push({
      name: to.name,
      path: to.path,
      query: to.query,
      params: to.params,
      timer: +new Date()
    });
    next();
    return;
  }

  if (window.routeList.length > 1 && to.name === window.routeList[window.routeList.length - 2]['name']) {
    store.commit('prevEffect'); // 返回
    window.routeList.splice(window.routeList.length - 1, 1);
    next();
    // return;
  } else {
    store.commit('nextEffect'); // 前进
    window.routeList.push({
      name: to.name,
      path: to.path,
      query: to.query,
      params: to.params,
      timer: +new Date()
    });
    next();
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
});
