<template>
  <div>
    <h1>{{msg}}</h1>
    <blogs/>
  </div>
</template>

<script type="text/ecmascript-6">
import blogs from './components/blogs'
  export default {
    data() {
      return {
        msg:'博客网'
      }
    },
    components:{
      blogs
    }
  }
</script>

<style scoped>
h1{
  background: green
}
 
</style>
