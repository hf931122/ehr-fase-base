<template>
  <layou-view>
    <template #header>
      <div>
        12121<ehr-date type="daterange" size=""></ehr-date>
        <ehr-select collectionType="XB"/>
        
      </div>
    </template>
    <div>
      <p>测试</p>
      <a-button @click="createZj">生成临时证件号码</a-button>
      <label>{{ zjhm }}</label>
      <ehr-photo edit></ehr-photo>
    </div>
  </layou-view>
</template>

<script setup lang="ts">
  import {ref, getCurrentInstance} from 'vue'

  const {proxy} = getCurrentInstance() as any
  const allpro = getCurrentInstance()

  let zjhm = ref('12')
  
  const createZj = () => {
    debugger
    proxy.$http.get('/fis/qyRk/getLsZjHm', null).then((res: any) => {
    if (res.code == '200') {
      zjhm.value = res.data
    }
  })
  }
  
</script>

<style>

</style>