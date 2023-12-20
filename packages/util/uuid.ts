const uuid = {
  created () {
    let uuid = this.getCookie('uuid')
    if (uuid) {
      return uuid
    }
    let s: Array<any> = []
    let hexDigits = '0123456789abcdef'
    for (let i = 0; i < 32; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23]
    uuid = s.join('')
    this.setCookie('uuid', uuid)
    return uuid
  },
  /**
   * 读取cookie
   */
  getCookie (name: string) {
    let secretkey = null
    if (document.cookie.length > 0) {
      let arr = document.cookie.split('; ') // 这里显示的格式需要切割一下自己可输出看下
      for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].split('=') // 再次切割
        // 判断查找相对应的值
        if (arr2[0] == name) {
          secretkey = arr2[1] // 保存到保存数据的地方
        }
      }
    }
    if (secretkey) {
      return unescape(secretkey)
    } else {
      return ''
    }
  },
  setCookie (name: string, value: string) {
    let exp = new Date()
    let month = exp.getMonth(), year = exp.getFullYear()
    let time = year + '-10-03 00:00:00'
    if (month >= 9) {
      time = (year + 1) + '-10-03 00:00:00'
    }
    let useTime = new Date(time)
    document.cookie = name + '=' + escape(value) + ';expires=' + useTime.toUTCString()
  }
}
export default uuid
