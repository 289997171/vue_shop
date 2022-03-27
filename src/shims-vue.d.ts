declare module '*.vue' {
  import Vue from 'vue'
  Vue.prototype.$http = AxiosInstance
  export default Vue
}
