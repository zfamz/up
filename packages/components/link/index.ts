import { withInstall } from '@ptest/utils/with-install'
import Link from './index.vue'

// const Link = {
//   name: 'p-link',
//   template: `<div> hello link </div>`,
// }

export const PLink = withInstall(Link)
export default PLink
