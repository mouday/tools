//导入
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { getToken } from '@/utils/token-util.js'
import { useUserStore } from '@/store/user-store.js'
import { hasPermission } from './permission.js'

const WHITE_LIST = ['/login']

export function routerHook(router) {
  router.beforeEach(async (to, from, next) => {
    // 显示
    NProgress.start()
    next()
  })

  router.afterEach(() => {
    // 关闭
    NProgress.done()
  })
}
