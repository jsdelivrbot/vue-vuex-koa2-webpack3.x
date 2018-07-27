import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";//获取数据并渲染
import * as actions from "./actions";//数据的异步操作
import * as mutations from "./mutations";//处理数据的唯一途径

Vue.use(Vuex);

const state = {
    isLogin: false,//是否登录
    tabbarStatus: true,//底部Tabbar是否显示，默认显示
    unreadMessageCount: 0//未读消息数量
}

const store = new Vuex.Store({
    state,// 存放项目中需要多组件共享的状态
    getters,// 从state中派生出状态，比如将state中的某个状态进行过滤然后获取新的状态。
    mutations, // 存放更改state里状态的方法
    actions// mutation的加强版，它可以通过commit mutations中的方法来改变状态，最重要的是它可以进行异步操作。
});

export default store;