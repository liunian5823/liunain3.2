// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
//使用轮播图组件
Vue.use(VueAwesomeSwiper)

// 引入全局css
import './assets/style/reset.css'
// 引入轮播图css
import 'swiper/dist/css/swiper.css'

//引入弹出组件
import popupToast from './popup/popup.js'
//使用弹出框组件
Vue.use(popupToast)

//全局使用拦截器
import './axios'
import Axios from 'axios';
Vue.prototype.$http=Axios

//引入vuex
import store from './store/store.js'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
