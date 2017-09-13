import Vue from 'vue'
import App from './App.vue'
import i18n from './lang/lang'
import store from './store'



export const app = new Vue({
  el: '#app',
  store,
  i18n,
  render: h => h(App)
})

// window['vue'] = app
// window.store = store