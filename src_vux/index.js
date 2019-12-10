import Vue from 'vue'
import App from './app.vue'
import store from './vux/store'

new Vue({
  el: '#root',
  // 注册局部组件
  components: { // 注册组件(后面才能写组件标签)
    App: App
  },
  store,
  template: '<App/>'
})