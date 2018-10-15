<template>
  <div class="hello" v-on:click="show('msg',$event)">
    <input v-on:keyup="show('msg',$event)">
    <demo/>
    <demo2/>
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
    <!-- <div></div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {};
  },
  methods: {
    show(msg,event){
      console.log(msg);
      console.log(event);
      console.log('hello')
    },
     warn: function (message, event) {
       console.log(event);
    // 现在我们可以访问原生事件对象
    if (event) event.preventDefault()
    alert(message)
  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
