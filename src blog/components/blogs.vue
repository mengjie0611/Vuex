<template>
  <div>
    <h2>{{msg}}</h2>
    <blog v-for="(blog, index) in blogs" :key="blog.id" :blog='blog'/>
  </div>
</template>

<script type="text/ecmascript-6">
import blog from './blog'
  export default {
    data() {
      return {
        msg:'IT博客列表',
        blogs:[
         {id:1,title:'vue'},
         {id:2,title:'react'},
         {id:3,title:'jquery'}
        ]
      }
    },
    components:{
      blog
    }
  }
</script>

<style scoped>

 
</style>
