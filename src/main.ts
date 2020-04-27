import Vue from 'vue'
import '@/plugins/axios'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/plugins/element.ts'

import '@/assets/stylus/main.styl'
import '@/assets/stylus/monitor.styl'
import '@/permission'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
