/**
 *  Action 类似于 mutation，不同在于：
    Action 提交的是 mutation，而不是直接变更状态。
    Action 可以包含任意异步操作。
 * @param {*} param0 
 * @param {*} e 
 */

// 登录状态
export const changeIsLogin = ({ commit }, e) => commit("changeIsLogin", e);

// 底部Tabbar状态
export const changeTabbarStatus = ({ commit }, e) => commit("changeTabbarStatus", e);

// 未读消息数量
export const changeUnreadMessageCount = ({ commit }, e) => commit("changeUnreadMessageCount", e);