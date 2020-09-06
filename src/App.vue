<template>
    <div id="app">
        <el-row class="tac">
            <el-col :span="4">
                <el-row>
                    <el-col>
                        <el-radio-group v-model="isCollapse">
                            <el-radio-button :label="false">展开</el-radio-button>
                            <el-radio-button :label="true">收起</el-radio-button>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                  <el-col>
                    <h3>导航栏</h3>
                    <el-menu
                    :default-active="this.$route.path"
                    :collapse="isCollapse"
                    router
                    >
                        <sidebar-item v-for="route in routes" :key="route.path" :item="route" />
                    </el-menu>
                  </el-col>
                </el-row>
            </el-col>
            <el-col :span="16">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item 
                    v-for="item in this.$route.matched" 
                    :key="item.path" 
                    :to="item.path"
                    >
                        {{item.meta.title}}
                    </el-breadcrumb-item>
                </el-breadcrumb>
                <h3>正文</h3>
                <router-view />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { routes } from './router'   // {}指定需要引用的模块
import SidebarItem from './components/SidebarItem.vue'

export default {
    name: 'App',
    components: { 
        SidebarItem
    },
    data() {
        return {
            isCollapse: false,
            routes
        }
    }
}
</script>

<style scoped>  /* scoped 范围css 防止全局污染 */
h3 {
    text-align: center;
}
.el-breadcrumb {
    font-size: 1.17em;
    margin: 21.92px;
}
.el-radio-group {
    display: flex;
    justify-content: center;
    margin-top: 13px;
}
</style>

<style>     /* 解决导航栏折叠子菜单文字不隐藏的bug，必须覆盖全局样式 */
/* 隐藏文字 */
.el-menu--collapse .el-submenu__title span{
    display: none;
}
/* 隐藏 > , 默认该i元素标签无hash值，因此scoped无效，必须使用全局样式覆盖 */
.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow{
    display: none;
}
</style>