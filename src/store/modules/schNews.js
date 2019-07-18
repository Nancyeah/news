// import VuexPersistence from 'vuex-persist'
// //这是为Vuex持久化存储而生的一个插件，不需要手动存储storage
// //直接将状态保存至cookie或者localStorage中
//
// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// })

const state = {   //要设置的全局访问的state对象
  imgHref: [],
  //要设置的初始属性值
  moreNews:[],
  pageNews:[]
};
const getters = {   //实时监听state值的变化（最新状态）
  getImgHref(state){   //承载变化的imgHref的值
    return state.imgHref
  },
  getMoreNews(state){
    return state.moreNews
  },
  getPageNews(state){
    return state.pageNews
  }
};
const mutations = {
  pushImgHrefInfo(state, items) {   //如何变化imgHref，插入items
    state.imgHref.push(items);
  },
  pushMoreNews(state, items){
    state.moreNews.push(items);
  },
  pushPageNews(state, items){
    state.pageNews.push(items);
  }
};
const actions = {
  invokePushItems(context, item){   //触发mutations里面的pushImgHrefInfo，传入数据形参item对应到items
    context.commit('pushImgHrefInfo', item);
  },
  invokeMoreNews(context, item){
    context.commit('pushMoreNews', item);
  },
  invokePageNews(context, item){
    context.commit('pushPageNews',item)
  }
};
export default {
  namespaced: true,//用于在全局引用此文里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
