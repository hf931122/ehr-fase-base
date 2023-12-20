import select from './index.vue'

import { withInstall } from 'packages/util/install'

export const EhrSelect = withInstall(select)
export default EhrSelect
export * from './index.vue'
type EhrSelectInstance = InstanceType<typeof select>
export type { EhrSelectInstance }