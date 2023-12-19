import config from './config'
import {message} from 'ant-design-vue'
import {http} from './http'

let faceConfig: any = {}
let file = {
  init (urls: any) {
    faceConfig = urls
  },
  // 上传文件
  upload (file: any, dirCode: any, resId: string, resType: string, success: any) {
    let maxSize = config.getValue('MAX_FILE_SIZE')
    let maxSizes = maxSize * 1024 * 1024
    let arry = ['image/png', 'image/jpeg', 'image/gif']
    if ((file.size / 1024 > 500) && (file.type && arry.includes(file.type))) {
      // 文件大于1M（根据需求更改），进行压缩上传
      photoCompress(file, 0.8, (file: any) => {
        if (file.size && file.size > maxSizes) {
          message.error(`上传文件不能大于${maxSize}M`, 3);
          (window as any).Base.showMask(false)
          return
        }
        this.setUpload(file, dirCode, resId, resType, success)
      })
    } else {
      // 小于等于1M 原图上传
      if (file.size && file.size > maxSizes) {
        message.error(`上传文件不能大于${maxSize}M`, 3);
        (window as any).Base.showMask(false)
        return
      }
      this.setUpload(file, dirCode, resId, resType, success)
    }
  },
  setUpload (file: any, dirCode: string, resId: string, resType: string, success: any) {
    let form = new FormData()
    form.append('file', file)
    form.append('dirCode', dirCode)
    form.append('resId', resId)
    form.append('resType', resType)
    http.submit('post', faceConfig.ehrPath + '/api/file/uploadFile', form, undefined).then((res: any) => {
      success(res)
    })
  },
  // 下载文件
  view (fid: string) {
    let url = this.getUrl(fid)
    window.open(url)
  },
  // 取得文件路径
  getUrl (fid: string) {
    let server = eval('(' + config.getValue('FILE_SERVER') + ')')
    let url = server.url + '/api/file/view?fid=' + fid
    return url
  }
}
/**
   * 将一个dataURL字符串转变为一个File（Blob）对象
   * 转变时可以确定File对象的类型
   *
   * @param {string} dataURL
   * @param {string=} type - 确定转换后的图片类型，选项有 "image/png", "image/jpeg", "image/gif"
   * @returns {Promise(Blob)}
   */
function dataURLtoFile (dataURL: string, type: string, file: any) {
  let arr: any = dataURL.split(',')
  let mime = arr[0].match(/:(.*?);/)[1], // 去掉url的头，并转化为byte
    bstr = atob(arr[1]), // 处理异常,将ascii码小于0的转换为大于0
    n = bstr.length,
    u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  // 转blob
  // return new Blob([u8arr], {type: mime})
  let filename = file.name
  // 转file
  return new File([u8arr], filename, { type: mime })
}
/*
压缩图片
file：文件(类型是图片格式)，
obj：文件压缩后对象width， height， quality(0-1)
callback：容器或者回调函数
*/
async function photoCompress (file: any, quality: number, callback: any) {
  const dataURL: any = await filetoDataURL(file)
  const config = {quality: quality}
  let originalMime = dataURL.split(',')[0].match(/:(.*?);/)[1] // 原始图像图片类型
  let mime = 'image/jpeg' // 默认压缩类型
  const image = await dataURLtoImage(dataURL)
  const canvas = imagetoCanvas(image, Object.assign({}, config))
  const compressDataURL = canvas.toDataURL(mime, config.quality)
  const compressFile = dataURLtoFile(compressDataURL, originalMime, file)
  if (compressFile.size < file.size && (compressFile.size / 1024 > 500)) {
    photoCompress(compressFile, 0.6, callback)
  } else if (compressFile.size > file.size) {
    callback(file)
  } else {
    callback(compressFile)
  }
}
function filetoDataURL (file: any) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = (e: any) => resolve(e.target.result)
    reader.onerror = () => reject(new Error('dataURLtoImage(): dataURL is illegal'))
    reader.readAsDataURL(file)
  })
}
/**
* 将dataURL字符串转变为image对象
*
* @param {srting} dataURL - dataURL字符串
* @returns {Promise(Image)}
*/
function dataURLtoImage (dataURL: string) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('dataURLtoImage(): dataURL is illegal'))
    img.src = dataURL
  })
}
/**
* 将一个image对象转变为一个canvas对象
*
* @param {image} image
*
* @typedef {Object=} config - 转变为canvas时的一些参数配置
* @param {number} width - canvas图像的宽度，默认为image的宽度
* @param {number} height - canvas图像的高度，默认为image的高度
* @param {number} scale - 相对于image的缩放比例，范围0-10，默认不缩放；
* 设置config.scale后会覆盖config.width和config.height的设置；
* @param {number} orientation - 图片旋转参数，默认不旋转，参考如下：
* 参数	 旋转方向
* 1		0°
* 			2		水平翻转
* 			3		180°
* 			4		垂直翻转
* 			5		顺时针90°+水平翻转
* 			6		顺时针90°
* 			7		顺时针90°+垂直翻转
* 			8		逆时针90°
* @type {config}
*
* @returns {Promise(canvas)}
*/
function imagetoCanvas (image: any, config = {}) {
  const myConfig: any = { ...config }
  const cvs = document.createElement('canvas')
  const ctx: any = cvs.getContext('2d')
  let height
  let width
  for (const i in myConfig) {
    if (Object.prototype.hasOwnProperty.call(myConfig, i)) {
      myConfig[i] = Number(myConfig[i])
    }
  }
  // 设置宽高
  if (!myConfig.scale) {
    width = myConfig.width || myConfig.height * image.width / image.height || image.width
    height = myConfig.height || myConfig.width * image.height / image.width || image.height
  } else {
    // 缩放比例0-10，不在此范围则保持原来图像大小
    const scale = myConfig.scale > 0 && myConfig.scale < 10 ? myConfig.scale : 1
    width = image.width * scale
    height = image.height * scale
  }
  // 当顺时针或者逆时针旋转90时，需要交换canvas的宽高
  if ([5, 6, 7, 8].some(i => i === myConfig.orientation)) {
    cvs.height = width
    cvs.width = height
  } else {
    cvs.height = height
    cvs.width = width
  }
  // 设置方向
  switch (myConfig.orientation) {
    case 3:
      ctx.rotate(180 * Math.PI / 180)
      ctx.drawImage(image, -cvs.width, -cvs.height, cvs.width, cvs.height)
      break
    case 6:
      ctx.rotate(90 * Math.PI / 180)
      ctx.drawImage(image, 0, -cvs.width, cvs.height, cvs.width)
      break
    case 8:
      ctx.rotate(270 * Math.PI / 180)
      ctx.drawImage(image, -cvs.height, 0, cvs.height, cvs.width)
      break
    case 2:
      ctx.translate(cvs.width, 0)
      ctx.scale(-1, 1)
      ctx.drawImage(image, 0, 0, cvs.width, cvs.height)
      break
    case 4:
      ctx.translate(cvs.width, 0)
      ctx.scale(-1, 1)
      ctx.rotate(180 * Math.PI / 180)
      ctx.drawImage(image, -cvs.width, -cvs.height, cvs.width, cvs.height)
      break
    case 5:
      ctx.translate(cvs.width, 0)
      ctx.scale(-1, 1)
      ctx.rotate(90 * Math.PI / 180)
      ctx.drawImage(image, 0, -cvs.width, cvs.height, cvs.width)
      break
    case 7:
      ctx.translate(cvs.width, 0)
      ctx.scale(-1, 1)
      ctx.rotate(270 * Math.PI / 180)
      ctx.drawImage(image, -cvs.height, 0, cvs.height, cvs.width)
      break
    default:
      ctx.drawImage(image, 0, 0, cvs.width, cvs.height)
  }
  return cvs
}
export default file
