import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
    { path: '/info', name: '个人中心', icon: 'el-icon-user-solid', component: () => import('../views/info.vue') },
    { path: '/orders', name: '我的订单', icon: 'el-icon-s-order', component: () => import('../views/orders.vue') }
]
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router