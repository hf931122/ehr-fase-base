<script lang="ts" setup>
  import { getCurrentInstance, markRaw, nextTick, watch, ref} from 'vue'
  import zhCN from 'ant-design-vue/es/locale/zh_CN'
  import dayjs from 'dayjs'
  import 'dayjs/locale/zh-cn'

  import { message } from 'ant-design-vue'

  const {proxy} = getCurrentInstance() as any
  
  dayjs.locale('zh-cn')
  const locale = zhCN

  const prop = defineProps({
    
    url: {type: String, default: ''},
    data: {type: Object, default: () => {}},
    options: {type: Object, default: () => {}},
    isShow: {type: Boolean, default: false},
  })

  let visible = ref(false)
  let isFlesh = ref(false)
  let title = ref('')
  let width = ref('50%')
  let showFooter = ref(true)
  let footer = ref({okText:"确 定", cancelText:"取 消", showOk:true, showClose:true, disableOk:false})
  let options = ref<any>({})
  let component = ref<any>(null)
  let isSave: boolean = false
  let content = ref()

  const emit = defineEmits(['destroyed', 'update:component', 'isReload'])

  const modules = import.meta.glob('@/views/**/dialog/*.vue')

  watch(
    () => prop.isShow,
    (val: boolean) => {
      if (val) {
        open(prop.data, prop.url, prop.options)
      }
    }
  )

  const open = (data: object, url: string, option: any) => {
    const cpData = JSON.parse(JSON.stringify(data))
    options.value = option
    title.value = option.title || title.value
    width.value = option.width || width.value
    setFooter(option.footer)
    visible.value = true
    let path = '/src/' + url
    modules[path]().then((mod: any) => {
      const asyncView = mod.default
      component.value = markRaw(asyncView)
      nextTick(() => {
        let timer: any = setInterval(() => {
          if (content.value) { //  && typeof(content.value) === 'object'
            console.log(content.value)
            clearInterval(timer)
            const init: any = content.value["init"]
            if ( init ) {
              init(cpData)
            } else {
              message.warning('组件没有实现init方法!')
            }
          }
        }, 50)
      })
    })
  }

  const setFooter = (foot: any) => {
    if( foot === false ) {
      showFooter.value = false
    } else {
      showFooter.value = true
      footer.value = Object.assign({}, footer.value, foot || {})
    }
  }

  const isTimeSave = () => {
    const TIME_COUNT = 3
    const save_str: any = footer.value.okText
    footer.value.disableOk = true
    let showNum = TIME_COUNT
    footer.value.okText = showNum + ''
    let timer: any = setInterval(() => {
      if (showNum > 0 && showNum <= TIME_COUNT) {
        showNum--
        footer.value.okText = showNum + ''
      } else {
        isSave = false
        footer.value.disableOk = false
        footer.value.okText = save_str
        clearInterval(timer)
        timer = null
      }
    }, 1000)
  }

  const onClose = (result: any) => {
    visible.value = false
    if( result instanceof MouseEvent ){ // MouseEvent
      (options.value.onClose || function(){ /**/ })(isFlesh.value)
    }else{
      (options.value.onClose || function(){ /**/ })(result)
    }
    proxy.$parent.mydestroyed()
    proxy.$parent.isShow = false
  }

  const onReload = (result: boolean) => {
    isFlesh.value = result
  }

  const save = () => {
    const saves: any = content.value["save"]
    if( saves ){
      if (!isSave) {
        isSave = true
        isTimeSave()
        saves()
      }
    }else{
      message.warning('组件没有实现save方法!')
    }
  }

  // 将组件中的属性暴露出去，这样父组件可以获取
  defineExpose({
    open,
    setFooter,
    onClose,
    save
  })
</script>
<template>
  <a-config-provider :locale="locale">
    <a-modal
      class="my-dialog"
      :title="title"
      ref="dialog"
      :destroyOnClose="true"
      v-model:visible="visible"
      :mask-closable="false"
      :width="width"
      @cancel="onClose">
      <component ref="content" @onClose="onClose" @isReload="onReload" @setFooter="setFooter" :is="component"></component>
      <template #footer>
        <div v-if="showFooter" class="dialog-footer">
          <a-button @click="onClose" v-if="footer.showClose">{{footer.cancelText}}</a-button>
          <a-button type="primary" @click="save" v-if="footer.showOk" :disabled="footer.disableOk">{{footer.okText}}</a-button>
        </div>
        <div v-else></div>
      </template>
    </a-modal>
  </a-config-provider>
</template>

<style scoped lang='scss'>
  .my-dialog {
    :deep(.el-dialog__body) {
      padding: 20px 20px 10px;
    }
    :deep(.el-dialog__footer) {
      padding: 0px 20px 20px;
    }
  }
</style>