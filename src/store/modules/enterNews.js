const state = {   //要设置的全局访问的state对象
  detailLink: []
};
const getters = {   //实时监听state值的变化（最新状态）
  getDetailLink(state){   //承载变化的imgHref的值
    return state.detailLink
  }
};
const mutations = {
  pushDetailLink(state, items) {
    state.detailLink.push(items);
  }
};
const actions = {
  invokePushLink(context, item){   //触发mutations里面的pushImgHrefInfo，传入数据形参item对应到items
    context.commit('pushDetailLink', item);
  }
};
export default {
  namespaced: true,//用于在全局引用此文里的方法时标识这一个的文件名
  state,
  getters,
  mutations,
  actions
}
