import Vue from 'vue';
import Router from 'vue-router';
import App from '../App';

Vue.use(Router);
const home = r => require.ensure([], () => r(require('../components/home/home')), 'home');
const shops = r => require.ensure([], () => r(require('../components/shops/shops')), 'shops');
const mine = r => require.ensure([], () => r(require('../components/mine/mine')), 'mine');
const navTabs = r => require.ensure([], () => r(require('../components/navTabs/navTabs')), 'navTabs');
const login = r => require.ensure([], () => r(require('../components/login/login')), 'login');
const beanfun = r => require.ensure([], () => r(require('../components/beanfun/beanfun')), 'beanfun');
const beanfunExplain = r => require.ensure([], () => r(require('../components/beanfun_explain/beanfun_explain')), 'beanfun_explain');
const collectList = r => require.ensure([], () => r(require('../components/collectList/collectList')), 'collectList');

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: '',
        redirect: '/tab'
      }, {
        path: '/tab',
        component: navTabs,
        children: [{
          path: '',
          redirect: '/tab/login'
        }, {
          path: '/tab/home',
          component: home,
          name: 'home'
        }, {
          path: '/tab/shops',
          component: shops,
          name: 'shops'
        }, {
          path: '/tab/mine',
          component: mine,
          name: 'mine'
        }, {
          path: '/tab/login',
          component: login,
          name: 'login'
        }, {
          path: '/tab/beanfun',
          component: beanfun,
          name: 'beanfun'
        }, {
          path: '/tab/beanfun_explain',
          component: beanfunExplain,
          name: 'beanfun_explain'
        }, {
          path: '/tab/collect_list',
          component: collectList,
          name: 'collectList'
        }]
      }]
    }
  ],
  linkActiveClass: 'active'
});

