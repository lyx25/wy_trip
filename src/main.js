import { createApp } from 'vue'


// 重置css 引入基础样式
import "normalize.css"
import "./assets/css/index.css"

import App from './App.vue'
import router from './router'
import pinia from './stores/index.js'

createApp(App).use(router).use(pinia).mount('#app')
// const app = createApp(App)

// app.use(createPinia())
// app.use(router)

// app.mount('#app')
