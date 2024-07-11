<script setup lang="ts">
  import {watch, ref} from 'vue'
  import { UploadOutlined } from '@ant-design/icons-vue'
  import { message } from 'ant-design-vue'
  import config from 'packages/util/config'
  import files from 'packages/util/file'
  import { http } from 'packages/util/http'

  defineOptions({
    name: 'ehrPhoto'
  })
  
  const props = defineProps({
    isFile: {type: Boolean, default: false}, // 是否是上传文件
    sping: {type: Boolean, default: false},
    fileBt: {type: String, default: '导入数据'},
    upUrl: {type: String, default: ''}, // 上传文件的url，不是传到文件服务
    styles: {type: Object, default: () => { return {width: '114px', height:'160px'} }},
    fid: {type: String, default: ''},
    edit: {type: Boolean, default: false}, // 控制上传按钮是否显示
    saveBool: {type: Boolean, default: true}, // 控制是否保存文件fid
    saveUrl: {type: String, default: ''}, // 保存文件fid的url
    accept: {type: String, default: 'image/png, .jpg, .PNG, .JPG, gif, .GIF'},
    src: {type: String, default: ''}, // 传入的显示图片url
    xb: {type: String, default: ''},
    validFun: {type: Function},
    showReadCard: {type: Boolean, default: false},
    otherParam: {type: Object, default: () => {}},
    upInfo: {type: Object, default: () => { // 保存到文件服务的相关信息
      return {
        dirCode: 'fis',
        id: '',
        resType: 'RY'
      }
    }}
  })
  let imgUrl = ref(props.src)
  //  使用defineEmits创建名称，接受一个数组
  let $myemit = defineEmits(['change', 'update', 'update:sping', 'success', 'uploadSuccess'])

  watch(() => props.fid, (val) => {
    setImg()
  })
  watch(() => props.src, (val) => {
    imgUrl.value = val
  })
  let setImg = () => {
    if (props.fid) {
      let url = props.fid
      let base_url = url.substring(0, 5).toUpperCase()  // data:
      if (url.indexOf('http://') > -1 || url.indexOf('https://') > -1) {
        imgUrl.value = url
      } else if (url.length > 50) {
        if (base_url == 'DATA:') {
          imgUrl.value = url
        } else {
          imgUrl.value = 'data:image/jpg;base64,' + url
        }
      } else {
        let server = eval("(" + config.getValue('FILE_SERVER', undefined) + ")")
        imgUrl.value = server.url + '/api/file/view?fid=' + props.fid
      }
    }
  }
  setImg()

  const beforeUpload = async (file: any)  => {
    if (props.validFun && !props.validFun()) {
      return
    }
    if (!!props.upUrl) {
      await uploadExport(file)
      return false
    }
    files.upload(file, props.upInfo.dirCode, props.upInfo.id, props.upInfo.resType, (res: any) => {
      if (res.data && res.data.fid) {
        let server = eval("(" + config.getValue("FILE_SERVER") + ")")
        imgUrl.value = server.url + '/api/file/view?fid=' + res.data.fid
        $myemit('change', res.data.fid)
        if (props.saveBool && props.saveUrl) {
          savePid(res.data.fid)
        }
      } else {
        let error = res.message || '上传失败！'
        message.error(error)
      }
    })
    return false
  }
  const uploadExport = async (file: any) => { // 文件不是上传到文件服务时
      // let maxSize = await config.getValue('MAX_FILE_SIZE')
      // let maxSizes = maxSize * 1024 * 1024
      // if (file.size && file.size > maxSizes) {
      //   message.error(`上传文件不能大于${maxSize}M`, 3)
      //   return
      // }
      let form = new FormData()
      form.append('file', file)
      if (props.otherParam && Object.keys(props.otherParam).length > 0) {
        for (let key in props.otherParam) {
          form.append(key, props.otherParam[key])
        }
      }
      let header = {
        contentType: "multipart/form-data; boundary=----WebKitFormBoundaryvcg43Df1DwTijpey"
      }
      $myemit('update:sping', true)
      http.postFile(props.upUrl, form, undefined, header).then((res: any) => {
        $myemit('update:sping', false)
        $myemit('success', res)
      })
    }
    const savePid = (fid: string) => {
      http.post(props.saveUrl, {ryId: props.upInfo.id, photo: fid}).then((res: any) => {
        message.success('保存成功！')
        $myemit('uploadSuccess')
      })
    }
</script>

<template>
  <div v-if="!isFile" :style="styles" class="upload">
    <img v-if="xb == '1' && imgUrl == ''" alt="证件照" class="user-img" border="0" src="/images/man.png"/>
    <img v-else-if="xb == '2' && imgUrl == ''" alt="证件照" class="user-img" border="0" src="/images/woman.png"/>
    <img v-else-if="imgUrl == ''" alt="证件照" class="user-img" border="0" src="/images/unknow.png"/>
    <img v-else alt="证件照" class="user-img" border="0" :src="imgUrl"/>
    <a-upload :showUploadList="false" :accept="accept" :beforeUpload="beforeUpload" v-if="edit">
      <a-button type="primary"  style="margin-top:5px;">
        <template #icon><upload-outlined /></template>更改头像
      </a-button>
    </a-upload>
  </div>
  <a-upload v-else :showUploadList="false" :accept="accept" :beforeUpload="beforeUpload">
    <a-button type="primary" style="margin-top:5px;">
      <template #icon><upload-outlined /></template>{{fileBt}}
    </a-button>
  </a-upload>
</template>

<style lang="scss" scoped>
  .upload {
    text-align: center;
    z-index: 99;
    .user-img {
      // width:100%;
      height:100%;
      border-radius: 10px;
      object-fit:cover;
    }
    :deep(.ant-upload.ant-upload-select) {
      display: block;
    }
  }
</style>
