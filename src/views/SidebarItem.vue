<template>
  <!-- 隐藏不需要显示的路由 -->
  <div v-if="!item.hidden">
    <!-- 如果没有子路由 -->
    <template v-if="!item.children">
        <el-menu-item :key="item.path" :index="item.path">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
    </template>
    <!-- 如果有子路由，渲染子菜单 -->
    <el-submenu v-else :index="item.path">
      <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
      </template>
      <sidebar-item v-for="child in item.children" :key="child.path" :item="child" />
    </el-submenu>
  </div>
</template>

<script>

export default {
  name: 'SidebarItem',    //组件自调用，必须有name属性
  props: {                //接收父组件传参
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
