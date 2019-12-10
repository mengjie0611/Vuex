<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo='addTodo'/>
      <list :todos='todos' :deleteTodo='deleteTodo' :updateTodo='updateTodo'/>
      <Footer :todos='todos' :removeAllCompleted='removeAllCompleted' :checkAll="checkAll"/>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Header from "./components/Header";
import list from "./components/list";
import Footer from "./components/Footer";
  export default {
    data() {
      return{
       todos:[
          {id:'1',name:"xxx",completed:true},
          {id:'2',name:"xxx",completed:true},
          {id:'3',name:"xxx",completed:true}
       ]
      }
    },
    components:{
      Header,
      list,
      Footer
    },
    methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    updateTodo(todo,value){
      todo.completed = value
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    removeAllCompleted () {
        this.todos = this.todos.filter((todo, index) => !todo.completed)
      },
    checkAll(isCheckAll){
       this.todos.forEach(todo => todo.completed = isCheckAll)
    }
    }
  }
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
