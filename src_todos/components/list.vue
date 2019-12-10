<template>
   <ul class="todo-main">
     <item  v-for="(todo, index) in todos" :key="index" :todo='todo' :deleteTodo='deleteTodo' :updateTodo='updateTodo'/>
   </ul>
</template>
<script type="text/ecmascript-6">
import item from './item'
  export default {
    props:{
      todos:Array,
      deleteTodo:Function,
      updateTodo:Function
    },
    components:{
      item
    }
  }
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
 
</style>
