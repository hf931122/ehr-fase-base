<script setup lang="ts">
  import {ref} from 'vue'
  import type { UploadProps } from 'ant-design-vue'
  import { Upload, Modal } from 'ant-design-vue'
  import { PlusOutlined, FilePdfOutlined, FileTextOutlined, FileZipOutlined, FileUnknownOutlined, EyeOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons-vue'
  import config from 'packages/util/config'
  import files from 'packages/util/file'

  defineOptions({
    name: 'ehrUploadList'
  })
  
  const props = defineProps({
    filelist: { type: Array, default: []},
    dirCode: {type: String, default: 'fis'},
    relationId: {type: String, default: ''},
    title: {type: String, default: ''},
    resType: {type: String, default: 'fileUpload'},
    max: {type: Number, default: 5}, // 最大上传数量
    isDownLoad: {type: Boolean, default: false},// 始终显示下载
    disabled: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false}// 是否只读（可编辑器：上传文件、删除文件）
  });
  let previewVisible = ref(false)
  let pdfVisible = ref(false)
  let previewImage = ref('')

  const emit = defineEmits(['download', 'update:filelist', 'change'])

  const downLoadFile = (file: any) => {
    emit('download', file)
    if (file.url.indexOf('train.scwjxx.cn:99') == -1 && file.url.indexOf('ehr.scwjxx.cn') == -1 && file.url.indexOf('11.0.32.112:99') == -1) {
      window.open(file.url)
    }
    //
  }
  const isDocx = (file: any) => {
    if (!isImage(file.name) && !isPdf(file.name) && !props.readonly) {
      if (file.downSrc) {
        return file.downSrc.split('name')[0]
      }
      return file.url
    }
    return ''
  }
  const fileExtension = (fileName: string) => {
    const arr = fileName.split('.')
    let file_name = arr[arr.length - 1]
    return file_name.toLowerCase()
  }
  const isImage = (fileName: string) => {
    const images = ['gif', 'jpg', 'jpeg', 'png']
    return fileName && images.includes(fileExtension(fileName))
  }
  const isPdf = (fileName: string) => {
    return fileExtension(fileName) === 'pdf'
  }
  const handleCancelPreview = () => {
    previewVisible.value = false
    pdfVisible.value = false
  }
  const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }
  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview && !file.src) {
      file.preview = await getBase64(file.originFileObj)
    }
    previewImage.value = file.src || file.url || file.preview
    previewImage.value = previewImage.value.split('name')[0]
    if (isPdf(file.name)) {
      pdfVisible.value = true
      return
    }
    previewVisible.value = true
  }
  const handleDelete = (file: any) => {
    Modal.confirm({
        title: '确认删除上传的图片或文件吗？',
        okText: '确定',
        cancelText: '取消',
        onOk: () => {
          emit('update:filelist',
            props.filelist.filter((item: any) => {
              return item.uid !== file.uid
            })
          )
          emit('change')
        }
      })
  }

  const beforeUpload: UploadProps['beforeUpload'] = (file: any, fileLists: any) => {
    try {
      files.upload(file, props.dirCode, props.relationId, props.resType, (res: any) => {
        if (res.data && res.data.fid) {
          let server = eval("(" + config.getValue("FILE_SERVER") + ")")
          let imgUrl = server.url + '/api/file/view?fid=' + res.data.fid + '&name=' + file.name + '&type=' + file.type
          let item = {
            uid: file.uid,
            status: 'done',
            name: file.name.replace(/，/g, ''),
            type: file.type,
            src: server.url + '/api/file/view?fid=' + res.data.fid,
            url: imgUrl,
            downSrc: server.url + '/api/file/download?fid=' + res.data.fid,
            preview: true
          }
          emit('change')
          emit('update:filelist', [...props.filelist, item])
        }
      })
    } catch (e) {
      console.log(e)
    }
    return Upload.LIST_IGNORE
  } 
</script>

<template>
  <div>
    <div class="upload-list">
      <div
        v-for="file in filelist"
        class="upload-list-item"
        :key="file.uid"
      >
        <div class="upload-list-item-info">
          <img v-if="isImage(file.name)" :src="file.src.split('name')[0]" />
          <template v-else>
            <div style="text-align: center">
              <file-pdf-outlined style="font-size: 30px" v-if="isPdf(file.name)"/>
              <file-text-outlined style="font-size: 30px" v-else-if="fileExtension(file.name) === 'txt'"/>
              <file-zip-outlined style="font-size: 30px" v-else-if="fileExtension(file.name) === 'zip'"/>
              <file-unknown-outlined style="font-size: 30px" v-else />
            </div>
            <div style="font-size: 12px; text-align: center">
              {{file.name}}
            </div>
          </template>
        </div>
        <div class="upload-list-item-actions">
          <!--预览-->
          <eye-outlined style="font-size: 25px" title="预览" v-if="isImage(file.name) || isPdf(file.name)" @click="handlePreview(file)" />
          <!--下载-->
          <a v-if="isDocx(file) || isDownLoad" style="font-size: 25px" title="下载" :href="isDocx(file) || file.downSrc.split('name')[0]"><download-outlined @click="downLoadFile(file)" /></a>
          <!--下载-->
          <a v-if="readonly" style="font-size: 25px" title="下载" :href="file.downSrc.split('name')[0]"><download-outlined @click="downLoadFile(file)" /></a>
          <!--删除-->
          <delete-outlined v-else-if="!disabled" style="font-size: 25px" title="删除" @click="handleDelete(file)" />
        </div>
      </div>
    </div>
    <a-upload
      v-if="!readonly && filelist.length < max"
      :file-list="filelist"
      :before-upload="beforeUpload"
      :disabled="disabled"
      :show-upload-list="false"
      v-bind="$attrs"
    >
      <div :title="title">
        <plus-outlined />
        <div class="ant-upload-text">
          上传
        </div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancelPreview">
      <img v-if="previewImage" alt="example" style="width: 100%" :src="previewImage" />
      <template v-else>失败</template>
    </a-modal>
    <a-modal
      :visible="pdfVisible"
      width="80%"
      style="overflow: visible"
      :footer="null" @cancel="handleCancelPreview"
      wrapClassName="modal-pdf"
    >
      <iframe style="width: 100%; height: 100%" :src="previewImage"></iframe>
    </a-modal>
  </div>
</template>

<style lang='scss' scoped>
.upload-list {
  .upload-list-item {
    position: relative;
    float: left;
    width: 104px;
    height: 104px;
    margin: 0 8px 8px 0;

    &-info {
      position: relative;
      width: 104px;
      height: 104px;
      overflow: hidden;
      transition: background-color .3s;
      padding: 8px;
      border: 1px solid #d9d9d9;
      border-radius: 4px;

      &:before {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .5);
        opacity: 0;
        transition: all .3s;
        content: " ";
      }

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    &-actions {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 10;
      white-space: nowrap;
      transform: translate(-50%,-50%);
      opacity: 0;
      transition: all .3s;

      .anticon {
        cursor: pointer;
        color: #fff;
      }
    }

    &:hover {
      .upload-list-item-actions,
      .upload-list-item-info::before {
        opacity: 1;
      }
    }
  }
}
.ant-upload-picture-card-wrapper {
  width: auto;
}
</style>