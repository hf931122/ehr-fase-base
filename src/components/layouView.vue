<template>
  <a-layout class="la-yout">
    <a-layout-header v-if="header">
      <slot name='header'/>
    </a-layout-header>
    <a-layout-content>
      <slot />
    </a-layout-content>
    <a-layout-footer v-if="footer">
      <slot name='footer'/>
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts" setup>
  defineOptions({
    name: 'layouView'
  })
  defineProps({
    header: {type: Boolean,default: true},
    footer: {type: Boolean,default: false}
  })
</script>

<style scoped lang='scss'>
  .la-yout {
    position: relative;
    height: 100%;
    width: 100%;
    background-color: #fafafa;

    .ant-layout-header {
      color: #000;
      height: auto;
      // min-height: 50px;
      line-height: 50px;
      background: #fff;
      padding: 10px 10px 0;
    }
    .ant-layout-content {
      padding: 10px 5px;
      overflow: auto;
      background: #fff;
    }
    .ant-layout-footer {
      padding: 8px;
      height: auto;
      min-height: 50px;
      line-height: 50px;
      color: rgb(0, 0, 0);
      
      &::after {
        display: block;
        clear: both;
        content: "";
        visibility: hidden;
        height: 0
      }
    }
  }
</style>