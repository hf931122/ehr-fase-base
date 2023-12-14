// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    EhrDate: typeof import('../packages/components/date')
  }

  interface ComponentCustomProperties {
    $http: typeof import('../packages/components/util/http')
    $util: typeof import('../packages/components/util/util')
    $valid: typeof import('../packages/components/util/valid')
    $flie: typeof import('../packages/components/util/file')
  }
}

export {}
