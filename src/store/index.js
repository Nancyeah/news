import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'
//这是为Vuex持久化存储而生的一个插件，不需要手动存储storage
//直接将状态保存至cookie或者localStorage中
import schNews from './modules/schNews'
import enterNews from './modules/enterNews'
import govNews from './modules/govNews'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex);
//const store = new Vuex.Store();

export default new Vuex.Store({
  modules:{
    schNews,
    enterNews,
    govNews
  },
  plugins: [vuexLocal.plugin]
});
