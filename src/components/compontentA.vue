<template>
  <div class="hello">
    <h1 class="msg">{{ msgs }}</h1>
    <h1>{{ msgForm }}</h1>
    <button v-on:click="onClickMe">Click</button>
  </div>
</template>

<script>
export default {
  // name: 'compontentA',
  data () {
    return {
      msg: 'Welcome to Your Vue.js yes!'
    }
  },
  props: ['msgForm'],
  methods: {
    onClickMe: function () {
      console.log(this.msgForm)
      this.$emit('child-content', this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .msg {
    color:red;
  }
</style>