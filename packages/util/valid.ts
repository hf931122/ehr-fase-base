import util from './util'

const valid = {
  hasX (str: string, len = 1, match = '>=') {
    if (match == '=') {
      return !!str && (str.match(/\*/g) || []).length == len
    }
    return !!str && (str.match(/\*/g) || []).length >= len
  },
  validateCode (rule: any, value: any, callback: any) {
    const str = /^[0-9_#a-zA-Z]+$/ //  /^\w+$/  \s 空格
    if (value === '' || value === null || value === undefined) {
      return Promise.resolve()
    } else if (str.test(value)) {
      return Promise.resolve()
    }
    return Promise.reject('只能由数字 英文 下划线 #组成！')
  },
  validateName (rule: any, value: any, callback: any) {
    const str = /^[\u4e00-\u9fa5(（）)0-9_#a-zA-Z]+$/
    if (value === '' || value === null || value === undefined) {
      return Promise.resolve()
    } else if (str.test(value)) {
      return Promise.resolve()
    }
    return Promise.reject('只能由中英文 数字 下划线 # 括号组成！')
  },
  // 公安户号校验
  validateGahhMinNumber (rule: any, value: any, callback: any) {
    if (value) {
      if (value.length < 6) {
        return Promise.reject('输入长度必须大于等于6')
      } else if (value.length > 10) {
        return Promise.reject('输入长度必须小于等于10')
      } else {
        return Promise.resolve()
      }
    } else {
      return Promise.resolve()
    }
  },
  validPhone (rule: any, value: any, callback: any) {
    const str = /^((0\d{2}(-)?\d{8})|(0\d{3}(-)?\d{7})|([1-9]{1}\d{6,7})|(1([1-9][0-9])[0-9]{8}))$/
    if (!value) {
      return Promise.resolve()
    } else if (value == '无' || value == '不详') {
      return Promise.resolve()
    } else if (str.test(value)) {
      return Promise.resolve()
    } else if (this.hasX(value, 4, '=')) {
      return Promise.resolve()
    }
    return Promise.reject('请输入正确的电话号码！')
  },
  number (name: string, min: number, max: number) {
    return (rule: any, value: any, callback: any) => {
      if ((typeof (value) === 'string' && value === '') || value === null) {
        return Promise.resolve()
      } else {
        if (max) {
          if (value < min) {
            return Promise.reject(name + ' 应大于等于 ' + min)
          } else if (value > max) {
            return Promise.reject(name + ' 应小于等于' + max)
          } else {
            return Promise.resolve()
          }
        } else {
          if (value < min) {
            return Promise.reject(name + ' 应大于等于 ' + min)
          } else {
            return Promise.resolve()
          }
        }
      }
    }
  },
  validNumLen (len = 2) {
    return (rule: any, value: any, callback: any) => {
      if (!value) {
        return Promise.resolve()
      } else {
        let pointIndex = (value).toString().split('.')
        if (pointIndex.length == 2) {
          if (pointIndex[1].length > len) { // 判断小数点后面的字符串长度
            return Promise.reject(`最多保留${len}位小数`)
          }
        }
        return Promise.resolve()
      }
    }
  },
  validateInt (rule: any, value: any, callback: any) {
    const str = /^[0-9]+$/
    if (value === '' || value === null || value === undefined) {
      return Promise.resolve()
    } else if (str.test(value)) {
      return Promise.resolve()
    }
    return Promise.reject('只能输入数字！')
  },
  /*
  * end 为相比较的那个组件fieldDecoratorId
  * this.valid.compare(other, '>', 'nlEnd', '开始值必须小于结束值')}
  */
  compare (mathType: string, end: string, messages: string) {
    messages = messages || '关系值错误'
    return (rule: any, value: any, callback: Function) => {
      if (value != 0 && !value) {
        return Promise.resolve()
        // callback()
      } else {
        if (!end) {
          return Promise.resolve()
        } else if (mathType.indexOf('>')) {
          if (value < end) {
            return Promise.reject(messages)
            // callback(messages)
            // message.warning(messages, 2)
          } else {
            return Promise.resolve()
          }
        } else if (mathType.indexOf('<')) {
          if (value > end) {
            return Promise.reject(messages)
          } else {
            return Promise.resolve()
          }
        } else if (mathType == '=') {
          if (value != end) {
            return Promise.reject(messages)
          } else {
            return Promise.resolve()
          }
        } else {
          return Promise.resolve()
        }
      }
    }
  },
  /**
   * 姓名判断是否是中文英文和空格
   */
   isName (maxlen = 50, minlen = 2, dstr = '无') {
    let str = /^((?![\u3000-\u303F])[\u2E80-\uFE4F\s_\-·a-zA-Z])*$/
    return (rule: any, value: string, callback: any) => {
      let reg = /^((?![\u3000-\u303F])[\u2E80-\uFE4F])*$/, len = 0
      if (!value || (dstr && dstr == value)) {
        return Promise.resolve()
      }
      for (let i = 0; i < value.length; i++) {
        if (reg.test(value[i])) {
          len += 2
        } else {
          len++
        }
      }
      if (value.length < minlen) {
        return Promise.reject(`不能低于2个字符!`)
      }
      if (len > maxlen) {
        return Promise.reject(`不能超过${maxlen / 2}个字符!`)
      }
      let space_str = /^\S.*\S$|(^\S{0,1}\S$)/
      if (!space_str.test(value)) {
        return Promise.reject('前后不能有空格！')
      }
      if (this.hasX(value)) {
        return Promise.resolve()
      }
      if (str.test(value)) {
        return Promise.resolve()
      }
      return Promise.reject('只能由中文和英文组成！')
    }
  },
  /** 区域限制，必须选择到村 */
  validCun (rule: any, value: any, callback: any) {
    if (value && value.length != 12) {
      return Promise.reject('请选择到村居级别')
    } else {
      return Promise.resolve()
    }
  },
  // 身份证校验
  idcard (access: any) {
    return (rule: any, value: any, callback: any) => {
      if (access != undefined && access === false) {
        return Promise.resolve()
      }
      if (this.hasX(value, 4, '=')) {
        return Promise.resolve()
      } else {
        if (value.length != 18) {
          return Promise.reject('身份证号码长度18位')
        } else {
          const idcard = util.idcardCheck(value)
          if (!idcard.success) {
            return Promise.reject(idcard.message)
          } else {
            return Promise.resolve()
          }
        }
      }
    }
  },
  // 身份证校验 支持临时身份证号码
  idcardWithLs (access?: any) {
    return (rule: any, value: any, callback: any) => {
      if (access != undefined && access() == false) {
        return Promise.resolve()
      }
      if (!value) {
        return Promise.resolve()
      } else {
        if (value.length != 18) {
          return Promise.reject('身份证号码长度18位')
        } else {
          if (value.startsWith('SY') || value.startsWith('LS')) {
            return Promise.resolve()
          }
          const idcard = util.idcardCheck(value)
          if (!idcard.success) {
            return Promise.reject(idcard.message)
          } else {
            return Promise.resolve()
          }
        }
      }
    }
  }
}

export default valid