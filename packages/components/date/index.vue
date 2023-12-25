<script setup lang="ts">
  // import { DatePicker } from 'iview'
  import { ref, watch } from 'vue'
  import zhCN from 'ant-design-vue/es/date-picker/locale/zh_CN'
  import moment from 'moment'
  defineOptions({
    name: 'ehrDate'
  })
  const prop = defineProps({
    // 选值为 date、daterange、datetime、datetimerange、year、month
    type: {type: String, default: 'date'},
    format: {type: String, default: 'YYYY-MM-DD'},
    value: {type: String, default: ''},
    end: {type: String, default: ''},
    disabledDate: {},
    clearable: {type: Boolean, default: true},
    readonly: {type: Boolean, default: false},
    placeholder: {type: String, default: '请输入日期'},
    disabled: {type: Boolean, default: false}
  });
  const locale = zhCN
  let dateType = ref<string>('date')
  let boolRange = ref<boolean>(false)
  let showTime = ref<boolean>(false)
  let showDate1 = ref<string>('')
  let showDate2 = ref<string>('')
  const emit = defineEmits(['change', 'update:value', 'update:end'])

  if (prop.type.indexOf('range') > -1) {
    boolRange.value = true
    dateType.value = prop.type.indexOf('timerange') > -1 ? prop.type.slice(0, -9) : prop.type.slice(0, -5)
  } else {
    dateType.value = prop.type
  }
  showTime.value = prop.type.indexOf('datetime') > -1

  const setdateOfType = (type: number, item: string) => {
    if (prop.type.indexOf('year') > -1) {
      if (type === 1) {
        showDate1.value = item
      } else {
        showDate2.value = item
      }
    } else if (prop.type.indexOf('month') > -1) {
      if (type === 1) {
        showDate1.value = item
      } else {
        showDate2.value = item
      }
    } else {
      if (type === 1) {
        showDate1.value = item
      } else {
        showDate2.value = item
      }
    }
  }

  if (prop.value) {
    setdateOfType(1, prop.value)
  }
  if (prop.end) {
    setdateOfType(2, prop.end)
  }
  watch(() => prop.value,
    (newVal?: string) => {
      if (!newVal) {
        showDate1.value = ''
      } else {
        setdateOfType(1, newVal)
      }
    },
    { immediate: true, deep: true }
  )
  watch(() => prop.end,
    (newVal?: string) => {
      if (!newVal) {
        showDate2.value = ''
      } else {
        setdateOfType(2, newVal)
      }
    },
    { immediate: true, deep: true }
  )

  const lChange = (date: string) => {
    change(date, 1)
  }
  const rChange = (date: string) => {
    change(date, 2)
  }
  const change = (date: string, type: number) => {
    let res_date2: Array<string>|string = []
    if (boolRange.value) {
      res_date2.push(date)
      if (type == 1) {
        // showDate1 = date
        res_date2.push(showDate2.value)
        emit('update:value', date || '')
      } else {
        // showDate2 = date
        res_date2.unshift(showDate1.value)
        emit('update:end', date || '')
      }
    } else {
      res_date2 = date
      emit('update:value', res_date2 || '')
    }
    emit('change', res_date2)
  }

  const disabledDate1 = (date: any) => {
    let defalut = false
    if (typeof prop.disabledDate === "function") {
      defalut = prop.disabledDate(moment(date.format(prop.format)))
    }
    if (boolRange.value) {
      return (date && showDate2.value && moment(date.format(prop.format)) > moment(showDate2.value)) || defalut
    } else {
      return defalut
    }
  }
  const disabledDate2 = (date: any) => {
    let defalut = false
    if (typeof prop.disabledDate === "function") {
      defalut = prop.disabledDate(moment(date.format(prop.format)))
    }
    if (boolRange.value) {
      return (date && showDate1.value && moment(date.format(prop.format)) < moment(showDate1.value)) || defalut
    } else {
      return defalut
    }
  }
</script>

<template>
  <div :class="[{'ehr-range': boolRange }, 'ehr-date']">
    <a-date-picker :picker="dateType"
      :class="{'ehr-picker': !boolRange}"
      :showTime="showTime"
      :placeholder="placeholder"
      v-model:value="showDate1"
      :valueFormat="format"
      :format="format"
      :disabledDate="disabledDate1"
      :allowClear="clearable"
      :read-only="readonly"
      :disabled="disabled"
      :locale="locale"
      @change="lChange">
    </a-date-picker>
    <span v-if="boolRange" class="date-center">-</span>
    <a-date-picker :picker="dateType"
      v-if="boolRange"
      :locale="locale"
      :showTime="showTime"
      :placeholder="placeholder"
      v-model:value="showDate2"
      :valueFormat="format"
      :format="format"
      :disabledDate="disabledDate2"
      :allowClear="clearable"
      :read-only="readonly"
      :disabled="disabled"
      @change="rChange">
    </a-date-picker>
  </div>
</template>

<style lang='scss'>
  .ehr-date {
    word-wrap: normal;
    width: 100%;

    .date-center {
      padding: 0 5px;
    }
    .ehr-picker {
      width: 100%;

      .ivu-date-picker-rel .ivu-input {
        font-size: 14px;
      }
    }
  }

  .ehr-range {
    display: flex;
    width: 255px;
    line-height: normal;
  }
</style>