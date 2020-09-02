import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
    { 
        path: '/info',
        title: '个人中心',
        icon: 'el-icon-user-solid',
        component: () => import('./views/info.vue')
    },
    { 
        path: '/orders',
        title: '订单管理',
        icon: 'el-icon-s-order',
        component: () => import('./views/orders/index.vue'),
        children: [
            {
                path: '/my-orders',
                title: '我的订单',
                icon: 'el-icon-s-order',
                component: () => import('./views/orders/myOrders.vue'),
            },
            {
                path: '/submit',
                title: '订单管理',
                icon: 'el-icon-s-order',
                component: () => import('./views/orders/submit.vue'),
            }
        ]
    }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router