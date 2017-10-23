import Vue from 'vue'
import Router from 'vue-router'

import post from '../components/post'
import movie from '../components/movie'
import music from '../components/music'
const home = resolve => require(['@/components/home'], resolve)
const HelloWorld = resolve => require(['@/components/HelloWorld'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/bs',
      name: 'home',
      component: home
    },
    {
      path: '/bs/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/post',
      component: post
    },
    {
      path: '/movie',
      component: movie
    },
    {
      path: '/music',
      component: music
    }
  ]
})
