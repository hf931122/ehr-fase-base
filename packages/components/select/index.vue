<script setup lang="ts">
  import {ref, computed, watch} from 'vue'
  import { message } from 'ant-design-vue'
  import {getDictItems} from '../util/util'
  import {http} from '../util/http'
  
  defineOptions({
    name: 'ehrSelect'
  })

  const props = defineProps({
    placeholder: {
      type: String,
      default: '请选择'
    },
    value: {type: [String, Number]},
    url: {type: String, default: ''},
    postInfo: {type: Object,
      default: () => { return { key: 'name' } }
    },
    groupType: {type: Boolean, default: false},
    allowClear: {type: Boolean, default: true},
    selectWidth: {type: String},
    collectionType: {type: String},
    mode: {type: String},
    textBl: {type: Boolean, default: false},
    isWrite: {type: Boolean, default: false},
    showValue: {type: Boolean, default: false},
    sys: {type: String, default: ''},
    isrest: {type: Boolean, default: true},
    unArry: {type: Array, default: () => []}, // 添加一个数组到开始位置
    endArry: {type: Array, default: () => []}, // 添加一个数组到结束位置
    disabled: {type: Boolean, default: false},
    excludes: {type: Array, default: () => []}, // 排除数据形如 :excludes="['本人'、'小集体户主'，'户主']"
  });
  let selectValue = ref(props.value)
  let listArry = ref<Array<any>>([])
  let timeInter: any = null
  let orgCollection = ref<Array<any>>([])
  const emit = defineEmits(['change', 'update:value'])

  const triggerChange = (value: any) => { // 选择变化返回值
    if (props.textBl) {
      let list = listArry.value.length > 0 ? listArry.value : orgCollection.value
      list.some((item: any) => {
        if (item.value == value) {
          value = item.label
          return true
        }
      })
    }
    emit('change', value || '')
    emit('update:value', value || '')
  }
  const getItems = () => { // 通过字典获取下拉数据
    if (!props.collectionType) {
      return null
    }    
    let items = getDictItems(props.collectionType)
    if (props.excludes.length > 0) {
      items = items.filter((item: any) => !props.excludes.includes(item.label))
    }
    if (props.sys.length > 0) {
      items = items.filter((item: any) => item.field01 && item.field01.includes(props.sys))
    }
    if (props.unArry.length > 0) {
      items.unshift(...props.unArry)
    }
    if (props.endArry.length > 0) {
      items.push(...props.endArry)
    }
    orgCollection.value = items
    if (props.groupType) { // 如果分组
      return dealGroup(items)
    } else {
      return items
    }
  }
  const dealGroup = (parList: Array<any>) => { // 如果分组
    let arry: any = [], groupList: any = []
    parList.forEach((item, index) => {
      if (item.cssStyle == 'group') {
        arry.push(item)
        if (index != 0) {
          let param = arry.pop()
          param.list = groupList
          arry.push(param)
        }
        groupList = []
      } else if (arry.length == 0) {
        arry.push(item)
      } else {
        groupList.push(item)
        if (index == parList.length - 1) {
          let param = arry.pop()
          param.list = groupList
          arry.push(param)
        }
      }
    })
    return arry
  }
  const searchValue = (value: any) => { // 如果url
    if (props.url && value.length > 0) {
      getoptionList(value)
    }
  }
  const getoptionList = (value?: any) => {
    if (timeInter) {
      clearTimeout(timeInter)
    }
    if (!props.url) {
      return
    }
    timeInter = setTimeout(() =>{
      let param = props.postInfo
      param[props.postInfo.key] = value
      http.get(props.url, param).then((res: any) => {
        if (res.code == 200 && res.data) {
          listArry.value = res.data
        } else {
          message.warning(res.message)
        }
      })
    }, 200)
  }
  const getOnlineList = () => { // 通过url获取下拉数据
    if (props.url) {
      getoptionList()
    }
  }
  const filterOption = (input: string, option: any) => {
    return option.label.indexOf(input) > -1
  }
  const selectList = computed(() => {
    if (listArry.value.length > 0) {
      return listArry.value
    } else {
      return getItems()
    }
  })
  watch(
    () => props.value,
    (val, oldVal) => {
      if (props.isWrite) {
        selectValue.value = val || ''
        return
      }
      let list = listArry.value.length > 0 ? listArry.value : orgCollection.value
      let isVal = list.some((item: any) => { // 判断数组值改变，如果传入默认值，不在数组中，则显示空，不显示码值
        if (item.value == val) {
          return true
        }
      })
      selectValue.value = isVal ? val : ''
      if (props.isrest && !isVal && val !== '' && val !== undefined && val !== null && list.length > 0) {
        triggerChange(selectValue.value)
      }
    },
    {
      deep: true // 深度监听
    }
  )
  watch(
    () => orgCollection.value,
    (list, oldVal) => {
      if (props.isWrite) {
        return
      }
      let isVal = list.some((item: any) => { // 判断数组值改变，如果传入默认值，不在数组中，则显示空，不显示码值
        if (item.value == props.value) {
          return true
        }
      })
      selectValue.value = isVal ? props.value : ''
      if (props.isrest && !isVal && props.value !== '' && props.value !== undefined && props.value !== null && list.length > 0) {
        triggerChange(selectValue.value)
      }
    },
    {
      deep: true // 深度监听
    }
  )
  watch(
    () => props.postInfo,
    (val, oldVal) => {
      getOnlineList()
    },
    {
      immediate: true, // 立即执行
      deep: true // 深度监听
    }
  )
</script>

<template>
  <div class="ehrSelect">
    <a-select :showSearch="mode !== 'combobox'" :placeholder="placeholder" @change="triggerChange" v-model:value="selectValue" optionFilterProp="label"
      :mode="mode" optionLabelProp="children"
      :dropdownMatchSelectWidth="false" :disabled="disabled" :style="{width:selectWidth}" :allowClear="allowClear">
      <template v-if="!groupType">
        <a-select-option v-for="item in selectList" :key="item.value" :value="item.value" :label="item.label">{{showValue ? item.value + ' ' : ""}}{{item.label}}</a-select-option>
      </template>
      <template v-else v-for="item in selectList">
        <a-select-opt-group v-if="item.list" :key="item.value">
          <!-- <span slot="label"><a-icon type="user"/>{{item.label}}</span> -->
          <a-select-option v-for="group in item.list" :key="group.value" :value="group.value">{{showValue ? group.value + ' ' : ""}}{{group.label}}</a-select-option>
        </a-select-opt-group>
        <a-select-option v-else :key="item.value" :value="item.value">{{showValue ? item.value + ' ' : ""}}{{item.label}}</a-select-option>
      </template>
    </a-select>
  </div>
</template>

<style scoped lang="scss">
  .ehrSelect {
    .ant-select {
      width: 100%;
    }
  }
  .ant-tag {
    font-size: 14px;
  }
</style>
