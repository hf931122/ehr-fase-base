import date from './index.vue'
import { withInstall } from 'packages/util/install'

export const EhrDate = withInstall(date)
export default EhrDate
export * from './index.vue'
type EhrDateInstance = InstanceType<typeof date>
export type { EhrDateInstance }