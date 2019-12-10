<template>
  <div>
    <p>当前：{{ $store.state.count }}当前count是{{ $store.getters.evenOrOdd }}</p>
    <button @click="increament">+</button>
    <button @click="decreament">-</button>
    <button @click="increamentIfOdd">increamentIfOdd</button>
    <button @click="increamentAsync">increamentAsync</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    increament(){
     this.$store.commit('increament')
    },
    decreament(){
     this.$store.commit('decreament')
    },
    increamentIfOdd(){
     this.$store.dispatch('INCREAMENTIFODD')
    },
    increamentAsync(){
    this.$store.dispatch('INCREAMENTASYNC')
    },
  },
}
</script>

<style scoped></style>
