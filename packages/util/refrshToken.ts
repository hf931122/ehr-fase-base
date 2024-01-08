import {http} from './http'
import cache from './cache'
import {message} from 'ant-design-vue'
import modal from './modal/index'

const refrsh = {
  env: false,
  init (env = false) {
    refrsh.env = !!env
  },
  getCookie (cname = 'token') {
    if (!refrsh.env && document.cookie !== undefined && document.cookie !== null) {
      const arr = document.cookie.match(new RegExp('(^| )' + cname + '=([^;]*)(;|$)'))
      if (arr != null) {
        return arr[2]
      }
      return ''
    } else {
      let login = localStorage.getItem('login')
      let bean = login ? JSON.parse(login) : ''
      let accessToken = bean ? bean.accessToken : ''
      return accessToken
    }
  },
  getLogin (cname = 'token') {
    let c_token = ''
    if (!refrsh.env && document.cookie !== undefined && document.cookie !== null) {
      const arr = document.cookie.match(new RegExp('(^| )' + cname + '=([^;]*)(;|$)'))
      if (arr != null) {
        c_token = arr[2]
      }
    } else {
      c_token = 'development'
    }
    if (c_token) {
      return localStorage.getItem('login')
    }
    return ''
  },
  remove (title?: string) {
    let date = new Date()
    date.setTime(date.getTime() + (-1 * 1000))
    let expires = 'expires=' + date.toUTCString()
    cache.clear('user')
    cache.clear('org')
    cache.clear('area')
    // document.cookie = 'sid=; ' + expires + '; path=/'
    document.cookie = 'token=; ' + expires + '; path=/'
    localStorage.removeItem('login')
    this.outLogin(title)
  },
  outLogin (title = '登录过期') {
    let p_count = sessionStorage.getItem('ecount')
    if (p_count) {
      return
    }
    sessionStorage.setItem('ecount', '1')
    let timestamp = new Date().getTime()
    let o_tamp = sessionStorage.getItem('outTime')
    sessionStorage.setItem('outTime', timestamp + '')
    let top_url = (top as any).window.location.href
    top_url = top_url.replace('index', 'login');
    if (!o_tamp || timestamp - Number(o_tamp) > 30000) {
      message.warning(title)
      setTimeout(() => {
        sessionStorage.removeItem('ecount');
        (top as any).window.location.href = top_url
      }, 800)
    } else {
      modal({
        type: 'waring',
        title: title,
        content: '确认跳转认证',
        okText: '确定',
        onOk: () => {
          sessionStorage.removeItem('ecount');
          (top as any).window.location.href = top_url
        }
      })
    }
  },
  validTokenTime (url: string) {
    let login = localStorage.getItem('login')
    let bean = login ? JSON.parse(login) : ''
    if (!bean || !bean.timestamp) {
      return
    }
    let token_time = bean.accessExpiresIn
    let refresh_time = bean.refreshExpiresIn
    let count_time = Math.min(token_time, refresh_time)
    count_time = count_time < 0 ? 600 : count_time
    let timestamp = bean.timestamp
    let timestr = new Date().getTime()
    let stamp_cont = count_time * 1000 - (timestr - timestamp)
    if (stamp_cont < 8000 && url.indexOf('/oauth/refreshToken') == -1) {
      let param = {refreshToken: bean.refreshToken}
      let result = http.ajax('post', '/oauth/refreshToken', param, false)
      if (result.code == '200' && result.data) {
        delete result.data.ticket
        delete result.data.userVO
        this.setLogin(Object.assign({}, bean, result.data))
        this.setCookie(result.data.accessToken)
        setTimeout(() => {
          this.countRefresfTime()
        }, 10)
      }
    }
  },
  countRefresfTime () {
    let login = localStorage.getItem('login')
    let bean = login ? JSON.parse(login) : ''
    if (!bean) {
      return
    }
    let token_time = bean.accessExpiresIn
    let refresh_time = bean.refreshExpiresIn
    let timestamp = bean.timestamp
    let count_time = Math.min(token_time, refresh_time)
    if (count_time <= 0) {
      this.remove()
      return
    }
    let timestr = new Date().getTime()
    let stamp_cont = timestr - timestamp // 已过时间
    count_time > 300 && (count_time -= 300)
    let refresh_num = count_time * 1000
    refresh_num -= stamp_cont
    if ((window as any).refresh) {
      clearTimeout((window as any).refresh)
    }
    (window as any).refresh = setTimeout(() => {
      this.refreshTokens()
    }, refresh_num)
  },
  refreshTokens () {
    let login = localStorage.getItem('login')
    let bean = login ? JSON.parse(login) : ''
    let refresh = bean.refreshToken
    let param = {refreshToken: refresh}
    http.post('/oauth/refreshToken', param).then((res : any) => {
      if (res.code == '200' && res.data) {
        delete res.data.ticket
        delete res.data.userVO
        this.setLogin(Object.assign({}, bean, res.data))
        this.setCookie(res.data.accessToken)
        setTimeout(() => {
          this.countRefresfTime()
        }, 10)
      }
    })
  },
  /** 保存token */
  setCookie (value: string) {
    if (document.cookie !== undefined && document.cookie !== null) {
      document.cookie = 'token=' + value + '; path=/'
    }
  },
  /** 保存login */
  setLogin (param: any) {
    param.timestamp = new Date().getTime()
    localStorage.setItem('login', JSON.stringify(param))
  }
}

export default refrsh
