import { createApp } from 'vue'
// import 'modern-css-reset'
import './style/tailwind.css'

import { createPinia } from 'pinia'

// ElementPlus
import ElementPlus from 'element-plus'
import langZhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

// ElementPlusIconsVue
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// import { Http } from './api/index.js'
import SingleMessage from './components/single-message/index.js'
// import { router } from './router/index.js'

// highlight.js
// import 'highlight.js/styles/stackoverflow-light.css'
// import hljs from 'highlight.js/lib/core'
// import javascript from 'highlight.js/lib/languages/javascript'
// import diff from 'highlight.js/lib/languages/diff'
// import json from 'highlight.js/lib/languages/json'
// import hljsVuePlugin from '@highlightjs/vue-plugin'

import './style/base.less'
import './style/element-plus.less'
// import { useMock } from './mock/index.js'

// import { isMobile } from './utils/client-util.js'

export function createVueApp(App) {
  const app = createApp(App)

  // app.config.globalProperties.$http = Http
  app.config.globalProperties.$msg = SingleMessage
  // app.config.globalProperties.$loading = ElLoading.service

  //   app.use(router)

  // 使用 Element Plus
  app.use(ElementPlus, {
    locale: langZhCn,
  })

  // 注册所有图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

  // pinia
  const pinia = createPinia()
  app.use(pinia)

  return app
}
