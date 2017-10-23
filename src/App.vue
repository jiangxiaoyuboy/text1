<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
  <!--   <home></home> -->
    <router-link to="/bs">Go to hello</router-link>
    <router-link to="/bs/helloworld">Go to header</router-link>
    <div class="tab-item">
      <router-link to="/post">日志</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/movie">电影</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/music">音乐</router-link>
    </div>
    <button @click="goMusic()">音乐</button>
    <button @click="goMovie()">电影</button>
    <router-view/>
  </div>
</template>
  
<script>
import CompontentA from './components/compontentA'
import Home from './components/home'
export default {
  methods: {
    goMovie () {
      this.$router.push('/movie')
    },
    goMusic () {
      this.$router.push('/music')
    }
  },
  name: 'app',
  components: { CompontentA, Home }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
.finshed {
  text-decoration: underline;
}
</style>
