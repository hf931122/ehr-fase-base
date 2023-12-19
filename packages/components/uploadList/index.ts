import uploadList from './index.vue'

import { withInstall } from '../util/install'

export const EhrUploadList = withInstall(uploadList)
export default EhrUploadList
export * from './index.vue'
type EhrUploadListInstance = InstanceType<typeof uploadList>
export type { EhrUploadListInstance }