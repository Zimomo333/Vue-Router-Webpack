import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
    { 
        path: '/info',
        component: () => import('./views/info.vue'),
        meta: { 
            title: '个人中心',
            icon: 'el-icon-user-solid'
        }
    },
    { 
        path: '/orders',
        component: () => import('./views/orders/index.vue'),
        meta: { 
            title: '订单管理',
            icon: 'el-icon-s-order'
        },
        children: [
            {
                path: '/my-orders',
                component: () => import('./views/orders/myOrders.vue'),
                meta: { 
                    title: '我的订单',
                    icon: 'el-icon-s-order'
                }
            },
            {
                path: '/submit',
                component: () => import('./views/orders/submit.vue'),
                meta: { 
                    title: '提交订单',
                    icon: 'el-icon-s-order'
                }
            }
        ]
    }
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router