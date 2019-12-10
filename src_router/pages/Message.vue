<template>
  <div>
    <ul>
       <li v-for="(message, index) in messages" :key="message.id">
         <router-link to="/message/datail">{{message.title}}</router-link>
       </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      messages:[
       
      ]
    }
  },
  mounted() {
  setTimeout(() => {
      const messages = [
       {id: 1, title: 'message001'},
       {id: 3, title: 'message003'},
       {id: 4, title: 'message004'},
    ]
     this.messages = messages
  }, 0);
 
  },
}
</script>

<style scoped></style>
