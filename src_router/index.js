import Vue from 'vue'
import App from './app.vue'
import router from './router'

Vue.prototype.globaEventBus = new Vue()
new Vue({
  el: '#root',
  // 注册局部组件
  components: { // 注册组件(后面才能写组件标签)
    App: App
  },
  router,
  template: '<App/>'
})