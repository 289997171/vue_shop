import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import './plugins/element.js'

import '@/assets/css/global.css'

Vue.config.productionTip = false

Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.url = "http://192.168.3.35:8888/api/private/v1/";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
