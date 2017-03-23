import data2 from '../../data/index'

//初始化数据
const state = {
    list: []
};

//异步逻辑
const actions = {
    getNews({ commit }) {
        data2.getnews(function(res) {
            commit('GETNEWS', { res })
        })
    }
};

//同步 改变状态
const mutations = {
    GETNEWS(state, { res }) {
        state.list = res
    }
}

export default {
    state,
    actions,
    mutations
}