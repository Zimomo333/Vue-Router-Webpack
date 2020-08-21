<template>
    <div id="app">
        <el-row class="tac">
            <el-col :span="4">
                <h3>导航栏</h3>
                <el-menu
                :default-active="this.$route.path"
                class="el-menu-vertical-demo"
                router
                >
                <el-menu-item v-for="item in routes" :key="item.path" :index="item.path">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="16">
                <h3>正文</h3>
                <router-view />
            </el-col>
        </el-row>
    </div>
</template>
<style>
h3 {
    text-align: center;
}
</style>
<script>
import { routes } from './router'
export default {
    name: 'App',
    data(){
        return {
            routes
        }
    }
}
</script>
