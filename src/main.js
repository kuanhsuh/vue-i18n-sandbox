import Vue from 'vue'
import App from './App.vue'
import i18n from './lang/lang'


export const vue$ = new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})

window['vue'] = vue$