export default {
    mode: 'history',
    routes: [
        // 首页
        {
            path: '/index',
            component: () => import('./views/index/index.vue')
        },
        // 消息列表
        {
            path: '/message',
            component: () => import('./views/message/index.vue'),
            meta: {
                requiresAuth: true
            }
        },
        // 消息对话
        {
            path: '/chat',
            component: () => import('./views/message/chat.vue'),
            meta: {
                requiresAuth: true
            }
        },
        // 登录
        {
            path: '/login',
            component: () => import('./views/login/index.vue')
        },
        // 注册
        {
            path: '/register',
            component: () => import('./views/register/index.vue')
        },
        // 个人中心
        {
            path: '/mine',
            component: () => import('./views/mine/index.vue'),
            meta: {
                requiresAuth: true
            }
        },
        // 个人资料
        {
            path: '/datum',
            component: () => import('./views/mine/datum.vue'),
            meta: {
                requiresAuth: true
            }
        },
        // 攻略
        {
            path: '/strategy',
            component: () => import('./views/strategy/index.vue')
        },
        // 游记
        {
            path: '/travels',
            component: () => import('./views/travels/index.vue')
        },
        // 结伴
        {
            path: '/mate',
            component: () => import('./views/mate/index.vue')
        },
        // 签证
        {
            path: '/visa',
            component: () => import('./views/visa/index.vue')
        },
        {
            path: '*',
            component: () => import('./views/index/index.vue')
        }
    ]
}