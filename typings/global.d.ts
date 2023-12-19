import {EhrDate} from 'lib/date/index.ts'
// GlobalComponents for Volar
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    EhrDate: typeof EhrDate
  }

  interface ComponentCustomProperties {
    $http: typeof import('lib/util/http')
    $util: typeof import('lib/util/util')
    $valid: typeof import('lib/util/valid')
    $flie: typeof import('lib/util/file')
  }
}

export {}
