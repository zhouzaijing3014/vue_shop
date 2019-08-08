import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import store from './store'
import Star from './components/Star/Star.vue'



Vue.component('Header', Header) , //组件名 当前组件
Vue.component('Star',Star)

new Vue({
  el:"#app",
  render: h => h(App),
  router,//配置路由器
  store
})