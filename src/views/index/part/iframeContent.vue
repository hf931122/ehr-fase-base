<template>
  <div class='content' id="iframeContent">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" :key="route.path">
        </component>
      </keep-alive>
    </router-view>
  </div>
</template>

<style lang='scss' scoped>
  .content {
    width: 100%;
    height: 100%;
    min-width: 800px;
    padding: 5px;
    overflow: auto;
    position: relative;
  }
</style>