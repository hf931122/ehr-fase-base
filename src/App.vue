<template>
  <a-config-provider :locale="locale">
    <a-style-provider hash-priority="high">
      <RouterView />
    </a-style-provider>
  </a-config-provider>
</template>

<script setup lang="ts">
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
</script>

<style scoped>
</style>
