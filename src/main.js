import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.use(MuseUI)
Vue.use(ElementUI)
Vue.use(MintUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store, //将状态集注入vue实例(把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件)
    template: '<App/>',
    components: { App }
})