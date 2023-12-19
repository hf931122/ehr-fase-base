<template>
  <a-config-provider :locale="locale">
    <RouterView />
  </a-config-provider>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import locale from 'ant-design-vue/es/date-picker/locale/zh_CN';
dayjs.locale('zh-cn');
</script>

<style scoped>
</style>
