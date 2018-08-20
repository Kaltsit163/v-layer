import Vue from 'vue'
import App from './App.vue'
import Layer from './lib/layer/index'

Vue.use(Layer)

new Vue({
  el: '#app',
  render: h => h(App)
})
