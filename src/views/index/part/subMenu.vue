<template>
  <a-sub-menu>
    <template #title>
      <label>{{menuInfo.name}}</label>
    </template>
    <template v-for="item in menuInfo.children" :key="item.menuPath">
      <a-menu-item v-if="!item.children || item.children.length == 0" :key="item.menuPath" :data-item="item">
        <router-link :to="item.menuPath">{{item.name}}</router-link>
      </a-menu-item>
      <sub-menu v-else :menuInfo="item"/>
    </template>
  </a-sub-menu>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'subMenu'
  })

  defineProps(<{menuInfo: any}>{
    menuInfo: { type: Object}
  })

  const emit = defineEmits(['selectedItem'])

  const selectedItem = () => {
    emit('selectedItem')
  }
</script>

<style lang='scss' scoped>

</style>