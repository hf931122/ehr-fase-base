let basePath: string = 'https://ehr.scwjxx.cn/ehrc'
let ehrPath: string = 'https://ehr.scwjxx.cn/ehrc'

const paretUrl = document.location.href

if (paretUrl.indexOf("localhost") > -1) {
  basePath = "http://11.0.32.112:99/ehrcfis"
} else { //正式环境-灰度
  basePath = "/ehrc"
  let urlLocation = document.location
  ehrPath = urlLocation.protocol + '//' + urlLocation.host + '/ehrc'
}

export default {
  basePath: basePath,
  ehrPath: ehrPath
}
