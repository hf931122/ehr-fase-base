import moment from "moment"
import { message } from 'ant-design-vue'
import dict from './dict'
import {http} from './http'
import {setMaxDigits} from './Rsa/BigInt.js'
import {RSAKeyPair, encryptedString} from './Rsa/RSA.js'

const util = {
    checkQuery (areaId: string, keyword: string, len = 4, isLsZjhm = false):any {
      keyword && (keyword = keyword.trim())
      message.config({
        top: `100px`,
        duration: 2,
        maxCount: 3
      })
      if (keyword && keyword.length > 50) {
        message.info('搜索字符长度不能超过50个！')
        return false
      }
      if (isLsZjhm && keyword && keyword.length > 5) {
        return true
      }
      if (Array.isArray(areaId)) {
        return true
      }
      return util.checkArea(keyword, areaId, len)
    },
    checkArea (value: string, areaId: string, len: number) {
      if (areaId.length > len) {
        return true
      }
      if (areaId.length <= 2) {
        if (!value || value.length != 18) {
          message.info('区县级以上，请输入18位身份证号进行精确查询')
          return false
        }
      } else if (areaId.length <= 4 && len >= 4) {
        if (value && value == 'undefined') {
          message.info('请选择市级以下区域')
          return false
        } else if (!value || value.length != 18) {
          message.info('区县级以上，请输入18位身份证号进行精确查询')
          return false
        }
      } else if (areaId.length <= 6 && len >= 6) {
        if (value && value == 'undefined') {
          message.info('请选择县级以下区域')
          return false
        } else if (value && value.length != 18 && len >= 6) {
          message.info('区县级，请输入18位身份证号进行精确查询')
          return false
        }else if (!value) {
          message.info('区县级数据，请输入姓名或身份号查询')
          return false
        }
      }
      return true
    },
    getDictItems(code: string, sys?: string, excludes?: any) {
      return dict.getItems(code, sys, excludes)
    },
    /** 解析url */
    getUrlParams(url: any) {
      let queryString = url.split('?')[1]
      let params: any = {}
      if (queryString) {
        let parts = queryString.split('&')
        for (let i = 0; i < parts.length; i++) {
          let values = parts[i].split('=')
          let key = values[0]
          let value = values.length > 1 ? values[1] : null
          params[decodeURIComponent(key)] = decodeURIComponent(decodeURIComponent(value))
        }
      }
      return params
    },
    isEqualData(o_param: any, n_param: any) {
      const o_str = JSON.stringify(this.delNull(o_param))
      const n_str = JSON.stringify(this.delNull(JSON.parse(JSON.stringify(n_param))))
      return o_str === n_str
    },
    dealTrimFrom (form: any) {
      if (form instanceof Object) {
        let new_form = Object.assign({}, form)
        for (let key in new_form) {
          if (Array.isArray(new_form[key])) {
            new_form[key] = new_form[key].join(',')
          } else if (form && typeof(form) == 'string') {
            new_form[key] = new_form[key].trim()
          }
        }
        return new_form
      } else if (form && typeof(form) == 'string') {
        return form.trim()
      } else {
        return form
      }
    },
    trimForm (form: any) {
      if (form instanceof Object) {
        let new_form = Object.assign({}, form)
        return util.dealForm(new_form)
      } else if (form && typeof(form) == 'string') {
        return form.trim()
      } else {
        return form
      }
    },
    dealForm (form: any): any {
      if (Array.isArray(form)) {
        return form.forEach((item: any) => {
          return util.trimForm(item)
        })
      } else if (form instanceof Object) {
        for (let key in form) {
          form[key] = util.trimForm(form[key])
        }
        return form
      } else {
        return form.trim()
      }
    },
    delNull (param: any) {
      for (const key in param) {
        if (param[key] === '' || param[key] === null || param[key] === undefined) {
          delete param[key]
        } else if (param[key] instanceof Array || param[key] instanceof Object) {
          this.delNull(param[key])
        }
      }
      return param
    },
    getFormData(data: any, format: string = 'YYYY-MM-DD') {
      for (const key in data) {
        const obj = data[key]
        if (obj && obj._isAMomentObject) {
          data[key] = obj._i || obj.format(format)
        }
      }
      return data
    },
    attrs(array: Array<any>, name: string) {
      let values = []
      for (let i = 0; i < array.length; i++) {
        values.push(array[i][name])
      }
      return values
    },
    /**
     * 部分属性通过位运算传给后端
     * @param data form对象
     * @param val 位运算的字段可以是字符串，可以是数组-字符串
    */
    setBitData (data: any, val: string|Array<string>) {
      if (typeof (val) == 'string') {
        let val_str = data[val] ? data[val].split(',') : []
        if (val_str.length > 0) {
          data[val] = val_str.reduce((prev: string, curr: string) => {
            return parseInt(prev) | parseInt(curr)
          })
        }
      } else {
        val.forEach(item => {
          let val_str = data[item] ? data[item].split(',') : []
          if (val_str.length > 0) {
            data[item] = val_str.reduce((prev: string, curr: string) => {
              return parseInt(prev) | parseInt(curr)
            })
          }
        })
      }
      return data
    },
    /**
     * 把后端位运算值转化为字符串
     * @param data form对象
     * @param val 位运算的字段可以是字符串，可以是数组-字符串
    */
    parsingBit (data: any, val: string|Array<string>) {
      if (typeof (val) == 'string') {
        let bitVal = data[val]
        let bitArry = util.bitForArry(bitVal)
        data[val] = bitArry.join(',')
      } else {
        val.forEach(item => {
          let bitVal = data[item]
          let bitArry = util.bitForArry(bitVal)
          data[item] = bitArry.join(',')
        })
      }
      return data
    },
    bitForArry (bitVal: number, arry:any = [], num = 0) {
      let newVal = Math.pow(2, num)
      if (newVal <= bitVal) {
        if (newVal & bitVal) {
          arry.push(newVal)
        }
        util.bitForArry(bitVal, arry, num + 1)
      }
      return arry.length > 1 ? arry : [bitVal]
    },
    idcard(idcard: any) {
        const info: any = {'idcard': idcard}
        if (idcard.length == 18) { // 51010419540203456X
          const region = idcard.substring(0, 6)
          const year = idcard.substring(6, 10)
          const month = idcard.substring(10, 12)
          const day = idcard.substring(12, 14)
          const sex = idcard.substring(16, 17)
          info['birthday'] = year + '-' + month + '-' + day
          info['sex'] = parseInt(sex) % 2 == 1 ? '1' : '2'// 奇数男，偶数女
          info['year'] = parseInt(year)
          info['month'] = parseInt(month)
          info['day'] = parseInt(day)
          info['region'] = region
          info['age'] = this.getAge(info['birthday'])
        } else if (idcard.length == 15) { // 510104540203456
          const region = idcard.substring(0, 6)
          const year = '19' + idcard.substring(6, 8)
          const month = idcard.substring(8, 10)
          const day = idcard.substring(10, 12)
          const sex = idcard.substring(14, 15)
          info['birthday'] = year + '-' + month + '-' + day
          info['sex'] = parseInt(sex) % 2 == 1 ? '1' : '2'// 奇数男，偶数女
          info['year'] = parseInt(year)
          info['month'] = parseInt(month)
          info['day'] = parseInt(day)
          info['region'] = region
          info['age'] = this.getAge(info['birthday'])
        }
        const check = this.idcardCheck(idcard)
        info.success = check.success
        info.message = check.message
        return info
    },
    idcardCheck(idcard: any) {
      const info = []
        info.push({'success': true, 'message': '身份证校验正确！'})
        info.push({'success': false, 'message': '该身份证号码无效！'})
        const area: any = {
          11: '北京',
          12: '天津',
          13: '河北',
          14: '山西',
          15: '内蒙古',
          21: '辽宁',
          22: '吉林',
          23: '黑龙江',
          31: '上海',
          32: '江苏',
          33: '浙江',
          34: '安徽',
          35: '福建',
          36: '江西',
          37: '山东',
          41: '河南',
          42: '湖北',
          43: '湖南',
          44: '广东',
          45: '广西',
          46: '海南',
          50: '重庆',
          51: '四川',
          52: '贵州',
          53: '云南',
          54: '西藏',
          61: '陕西',
          62: '甘肃',
          63: '青海',
          64: '宁夏',
          65: '新疆',
          71: '台湾',
          81: '香港',
          82: '澳门',
          91: '国外'
        }
        let Y, JYM
        let S, M
        let idcard_array = []
        idcard_array = idcard.split('')
        let ereg: any = ''
        // 地区检验
        if (area[parseInt(idcard.substr(0, 2))] == null) {
          return info[1]
        }
    
        // 身份号码位数及格式检验
        switch (idcard.length) {
          case 15:
            if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)) {
              ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/
              // 测试出生日期的合法性
            } else {
              ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/
              // 测试出生日期的合法性
            }
            return ereg.test(idcard) ? info[0] : info[1]
          case 18:
            // 18位身份号码检测
            if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
              ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/
              // 闰年出生日期的合法性正则表达式
            } else {
              ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/
              // 平年出生日期的合法性正则表达式
            }
            if (ereg.test(idcard)) { // 测试出生日期的合法性
              // 计算校验位
              S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 +
                (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 +
                (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 +
                (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 +
                (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 +
                (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 +
                (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 +
                parseInt(idcard_array[7]) * 1 +
                parseInt(idcard_array[8]) * 6 +
                parseInt(idcard_array[9]) * 3
              Y = S % 11
              M = 'F'
              JYM = '10X98765432'
              M = JYM.substr(Y, 1)
              // 判断校验位
              if (M == idcard_array[17].toUpperCase()) {
                return info[0]
              } else {
                return info[1]
              }
            } else {
              return info[1]
            }
          default:
            return info[1]
        }
    },
    getAge(value: string, isyear = false) {
        if (!value) {
            return {}
        }
        const newDate = moment()
        let csrq = moment(value)
        if (isyear) {
          csrq = moment(moment(value).year() + '-01-01')
        }
        const {_data} = moment.duration(newDate.diff(csrq))
        const age = {
            year: _data.years,
            month: _data.months,
            day: _data.days
        }
        return age
    },
    getTreeNode(list: Array<any>, key: string): any {
      let bean = null
      const findDeep = (items: any) => {
        for (let i = 0; i < items.length; i++) {
          if (items[i].key == key) {
            bean = items[i]
            return
          } else {
            findDeep(items[i].children || [])
          }
        }
      }
      findDeep(list)
      return bean
    },
    exportExecll (method: string, url: string, exportTitle: string, exportParam: any, headers?: any) {
      http.submit(method, url, undefined, {...exportParam, responseType: 'blob'}, headers).then((res: any) => {
        if (res.type == 'application/json') {
          util.excellError(res)
          return
        }
        if (window.navigator && (window.navigator as any).msSaveOrOpenBlob) {
          (navigator as any).msSaveBlob(res, exportTitle || '导出报表.xls')
        } else {
          let a = document.createElement('a')
          a.download = exportTitle || '导出报表.xls'
          a.href = window.URL.createObjectURL(res)
          a.click()
          window.URL.revokeObjectURL(a.href)
        }
      })
    },
    excellError (res: any) {
      const fileReader: any = new FileReader()
      fileReader.readAsText(res, 'utf-8')
      fileReader.onloadend = (e: any) => {
        const result = JSON.parse(e.target.result)
        message.warn(result.message || '出现一点小意外，请稍后再试！')
      }
    },
    /**
     * 加密公共方法
     */
    encryptedRsa(data: string){
      setMaxDigits(130)
      let rsaKey = new RSAKeyPair('10001', '', '906C793510FB049452764740B21B97A51DAEA794AB6E43836269D5E6317D49226C12362BA22DAB5EC3BC79553A8A098B01F3C4D81A87B3EE5BD2F4F1431CC495EE2FE54688B212145BB32D56EEEEE1430CE26234331B291CFC53C9B84FAFFDF0B44371A032880C3D567F588D2CD5FCE28D9CDD2923CB547DAD219A6A1B8B5D3D')
      return encryptedString(rsaKey, encodeURI(data))
    },
    /** 计算页码 */
  getPageSize (height?: number, rowHeight?: number) {
    height = height || 120
    rowHeight = rowHeight || 43
    let all_height:number = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
    let tbDiv = document.getElementsByClassName('ant-layout-content')[0]
    if (tbDiv) {
      let tbHeight = tbDiv.clientHeight
      all_height = Math.min(all_height, tbHeight)
    }
    let pageSize = Math.floor((all_height - height) / rowHeight)
    return pageSize > 0 ? pageSize : 10
  },
  /** 禁止选择未来日期*/
  disabledFutureDate (current: any) {
    return current > moment().endOf('day')
  },
  /** 禁止选择过去日期*/
  disabledPastDate (current: any) {
    return current < moment().startOf('day')
  },
  base64toFile (dataurl: any, filename = 'hearer') {
    let arr = dataurl.split(',')
    let mime = arr[0].match(/:(.*?);/)[1]
    let suffix = mime.split('/')[1]
    let bstr = atob(arr[1])
    let n = bstr.length
    let u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], `${filename}.${suffix}`, {
      type: mime
    })
  }
}
const getDictItems = util.getDictItems
export { getDictItems }
export default util
