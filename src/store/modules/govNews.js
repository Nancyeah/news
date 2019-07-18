const state = {   //要设置的全局访问的state对象
  detailHref: [],
  moreNewsHref: []
};
const getters = {   //实时监听state值的变化（最新状态）
  getDetailHref(state){   //承载变化的imgHref的值
    return state.detailHref
  },
  getPassLink(state){
    return state.moreNewsHref
  }
};
const mutations = {
  pushDetailHref(state, items) {
    state.detailHref.push(items);
  },
  passMoreLink(state,items){
    state.moreNewsHref.push(items);
  }
};
const actions = {
  invokePushHref(context, item){   //触发mutations里面的pushImgHrefInfo，传入数据形参item对应到items
    context.commit('pushDetailHref', item);
  },
  invokePassLink(context, item){
    context.commit('passMoreLink', item);
  }
};
export default {
  namespaced: true,//用于在全局引用此文里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
