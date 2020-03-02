import Vue from 'vue'
import Router from 'vue-router'
// 首页
import home from '@/page/home/home'
// 我的
import personal from '@/page/personal/personal'
//����ҳ
import container from '@/page/container/container'
//搜索页
import search from '@/page/search/search'
//登录注册
import login from '@/page/login/login'
//登录
import logiend from '@/page/login/compoents/loginend'
//注册
import register from '@/page/login/compoents/register'
//我的收藏
import mycollection from '@/page/colection/mycoll'
//景点
import jingdian from '@/page/jingdian/jingdian'
Vue.use(Router)

export default new Router({
	  base: '/ibms/',
  routes: [
    //首页
      {
        path:"/",
        name:"home",
        component:home,
        meta:{
          keepAlive:true //该页面需要缓存
        }
      },
      //登录页
      {
        path:"/personal",
        name:"personal",
        component:personal
      },
      //详情页
      {
        path:"/container/:id",
        name:"container",
        component:container
      },
      //搜索页
      {
        path:"/search",
        name:"search",
        component:search,
        meta:{
          keepAlive:true ,//该页面需要缓存
        }
      },
      //登录注册
      {
        path:"/login",
        name:"login",
        component:login,
        //重定向
        redirect:'/logiend',
        children:[
          //登录
          {
            path:"/logiend",
            name:"logiend",
            component:logiend
          },
          // 注册
          {
            path:"/register",
            name:"register",
            component:register
          },
        ]
      },
      //我的收藏
      {
        path:"/mycollection",
        name:"mycollection",
        component:mycollection
      },
      {
        path:"/jingdian",
        name:"jingdian",
        component:jingdian
      }
      
  ]
})
