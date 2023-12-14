<template>
  <a-layout class="main">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible
      width="200" class="main-menus">
      <menu-vue />
    </a-layout-sider>
    <a-layout>
      <a-layout-content class="main-content" :style="{ background: '#fff', margin: 0, minHeight: '280px' }">
        <iframeContent />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import iframeContent from './part/iframeContent.vue'
  import menuVue from './part/menus.vue'

  let collapsed = ref(false)
</script>

<style scoped lang="scss">
  .main {
    height: 100%;

    .header {
      height: 64px;
      padding: 0 10px;
      color: #fff;

      .logo {
        width: 150px;

        .icon {
          display: inline-block;
          font-size: 25px;
          cursor: pointer;
        }
      }
    }
    .main-menus {
      margin-right: 5px;
      min-height: 320px;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .main-content {
      overflow: auto;
    }
  }
  
</style>
<style lang="scss">
.icon-content {
  width: 230px;

  p {
    line-height: 35px;
  }
  
  .icon-left {
    width: 75px;
    display: inline-block;
  }

  .user-sign-ctr {
    height: 35px;
    line-height: 35px;
    color: #1890ff;
    cursor: pointer;

    span {
      display: block;
      // margin: 0px 22px;
      border-bottom: 0.5px dotted #d5d7d8;
    }
  }
}
</style>
