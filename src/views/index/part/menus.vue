<template>
  <a-menu mode="inline" @click="selectedItem" v-model:selectedKeys="selectedKeys"
   :style="{ height: '100%', borderRight: 0 }" class="user-menu">
   <template v-for="item in menuList" :key="item.menuPath">
      <a-menu-item v-if="!item.children || item.children.length == 0" :key="item.menuPath" :data-item="item">
        <router-link :to="item.menuPath">{{item.name}}</router-link>
      </a-menu-item>
      <sub-menu v-else :menuInfo="item"/>
    </template>
  </a-menu>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import subMenu from './subMenu.vue'

  let selectedKeys = ref<Array<string>>([])
  let menuList = [
    {name: '系统管理', menuIcon: 'el-icon-message', menuPath: '/sys', children:
      [
        {name: '应用系统', menuIcon: '', menuPath: '/application', children: []},
        {name: '角色类型', menuIcon: '', menuPath: '/roleType', children: []},
        {name: '角色管理', menuIcon: '', menuPath: '/role', children: []},
        {name: 'ApI角色', menuIcon: '', menuPath: '/apiRole', children: []},
        {name: 'ApI接口资源', menuIcon: '', menuPath: '/apiInterface', children: []},
        {name: '部门管理', menuIcon: '', menuPath: '/department', children: []},
        {name: '资源管理', menuIcon: '', menuPath: '/sysManange', children: []},
        {name: '安全配置', menuIcon: '', menuPath: '/safety'},
        {name: '登录日志', menuIcon: '', menuPath: '/log'}
      ]
    },
    {name: '用户管理', menuIcon: 'el-icon-message', menuPath: '/user', children:
      [
        {name: '用户管理', menuIcon: '', menuPath: '/userMange', children: []},
        {name: '用户组列表管理', menuIcon: '', menuPath: '/userList', children: []}
      ]
    }
  ]

  const selectedItem = (menu: any) => {
    console.log(menu)
  }
</script>

<style lang='scss' scoped>
  .user-menu {
    overflow: auto;
    overflow-x: hidden;
  }
</style>