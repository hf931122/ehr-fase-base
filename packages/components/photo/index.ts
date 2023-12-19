import photo from './index.vue'

import { withInstall } from '../util/install'

export const EhrPhotot = withInstall(photo)
export default EhrPhotot
export * from './index.vue'
type EhrPhototInstance = InstanceType<typeof photo>
export type { EhrPhototInstance }