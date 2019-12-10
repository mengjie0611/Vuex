<template>
  <div>
    <p>当前：{{ count }}当前count是{{ evenOrOdd }}</p>
    <button @click="increament">+</button>
    <button @click="decreament">-</button>
    <button @click="increamentIfOdd">increamentIfOdd</button>
    <button @click="increamentAsync">increamentAsync</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      count:0
    }
  },
  computed: {
    evenOrOdd(){
      return this.count % 2 == 1 ? '奇数':'偶数'
      console.log(evenOrOdd)
    }
  },
  methods: {
    increament(){
     this.count++
    },
    decreament(){
      this.count--
    },
    increamentIfOdd(){
      if(this.count % 2 == 1){
        this.count++
      }
    },
    increamentAsync(){
      setTimeout(() => {
        this.count++
      }, 1000);
    }
  },

}
</script>

<style scoped></style>
