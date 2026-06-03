import { createApp } from 'vue'
import { VueQueryPlugin } from 'vue-query'

import '@arco-themes/vue-mu-design/css/arco.css'

import router from '@/router'
import i18n from '@/i18n'
import App from '@/App.vue'
import 'animate.css'

import VueAnimateOnScroll from 'v-animate-onscroll'
import '@/common/style/index.less'

import './index.css'
const app = createApp(App)

app.use(VueAnimateOnScroll)
app.use(VueQueryPlugin)
app.use(router)
app.use(i18n)

app.mount('#app')
