import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
import loading from './common/images/loading.gif'
import './validate'
import './mock/mockServer'
import router from './router'
import CartControl from './components/CartControl/CartControl.vue'
import Header from './components/Header/Header.vue'
import store from './store'
import Star from './components/Star/Star.vue'

Vue.use(VueLazyLoad,{
  loading
})

Vue.component('Header', Header) , //组件名 当前组件
Vue.component('Star',Star)
Vue.component('CartControl', CartControl)
Vue.component(Button.name, Button)  // mt-button

new Vue({
  el:"#app",
  render: h => h(App),
  router,//配置路由器
  store
})