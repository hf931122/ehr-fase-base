import {EhrDate} from '../lib/date/index.ts'
// GlobalComponents for Volar
declare module 'vue' {
  export interface GlobalComponents {
    EhrDate: typeof EhrDate
  }

  interface ComponentCustomProperties {
    $http: typeof import('../lib/util/http')['http']
    $util: typeof import('../lib/util/util')
    $valid: typeof import('../lib/util/valid')
    $flie: typeof import('../lib/util/file')
    $dict: typeof import('../lib/util/dict')
    $cache: typeof import('../lib/util/cache')
  }
}

export {}
