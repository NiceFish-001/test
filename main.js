import Vue from 'vue'
import App from './App'
import validCode from './pages/components/validCode'
import index from './pages/components/index.vue'

Vue.config.productionTip = false
Vue.component('validCode',validCode)
Vue.component('index',index)

App.mpType = 'app'

const app = new Vue({
    ...App,
})
app.$mount()
