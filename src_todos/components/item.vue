<template>
  <li :style="{background:bgColor}" @mouseenter="isEnter(true)" @mouseleave='isEnter(false)'>
    <label>
      <input type="checkbox" v-model="isCompleted"/>
      <span>{{todo.name}}</span>
    </label>
    <button class="btn btn-danger" style="display:none" v-show="isShow" @click="remove">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      todo:Object,
      deleteTodo:Function,
      updateTodo:Function
    },
    data() {
      return {
        isShow:false,
        bgColor:'white'
      }
    },
    methods: {
      isEnter(enter){
        if(enter){
          this.bgColor='skyblue'
          this.isShow = true
        }else{
          this.bgColor='white'
          this.isShow = false
        }    
      },
      remove(){
        if(window.confirm('确定删除吗')){
          this.deleteTodo(this.index)
        }
      }
    },
    computed: {
      isCompleted:{
        get(){
          console.log(this.todo.completed)
          return this.todo.completed
        },
        set(value){
          this.updateTodo(this.todo,value)
        }
      }
    },
  }
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
