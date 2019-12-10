import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Datail from '../pages/Datail.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
   {
     path:'/about',
     component:About
   },
   {
     path:'/home',
     component:Home,
     children:[
       {
         path:'/home/message',
         component:Message,
         children:[
           {
             path:'datail',
             component:Datail
           }
         ]
       },
       {
         path:'/home/news',
         component:News
       },
       {
         path:'',
         component:News
       }
     ]
   },
   {
     path:'/',
     component:About
   }
  ]
})