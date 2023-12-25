import photo from './index.vue'

import { withInstall } from 'packages/util/install'

export const EhrPhoto = withInstall(photo)
export default EhrPhoto
export * from './index.vue'
type EhrPhotoInstance = InstanceType<typeof photo>
export type { EhrPhotoInstance }