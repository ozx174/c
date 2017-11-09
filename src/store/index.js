import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  effect: 'next', // 切换页面显示
  nav: true
};
const mutations = {
  nextEffect(state) {
    // 修改却还页面过度动画
    state.effect = 'next';
  },
  prevEffect(state) {
    // 修改却还页面过度动画
    state.effect = 'prev';
  },
  noneEffect(state) {
    state.effect = '';
  },
  showTabs(state) {
    state.nav = true;
  },
  hideTabs(state) {
    state.nav = false;
  }
};
export default new Vuex.Store({
  state,
  mutations
});
