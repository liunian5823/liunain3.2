<template>
  <!-- 首页  大组件/父组件-->
  <div>
    <Header></Header><!-- 头部组件 -->
    <Swiperhome></Swiperhome><!-- 轮播图组件 -->
    <Ticket></Ticket>	<!-- 小导航组件 -->
    <Content></Content><!-- 列表组件 -->
    <Naver></Naver><!-- 底部导航组件 -->
    <Loading v-show='logShow'></Loading>
  </div>
</template>

<script>
import Naver from "./compoents/nav.vue"  //底部导航组件
import Header from "./compoents/header.vue"	//头部组件
import Swiperhome from "./compoents/swiper.vue"	//轮播图组件
import Ticket from "./compoents/ticket.vue"	//小导航组件
import Content from "./compoents/content.vue"  //列表组件
import Loading from '../loading/loading'
export default{
  name:"home",
  data(){
    return{
      logShow:true
    }
  },
  components:{
    Naver,
    Header,
    Swiperhome,
    Ticket,
    Content,
    Loading
  },
  beforeCreate(){
    console.log('欢迎来到')
    this.logShow=true
  },
  created(){
    this.logShow=false
  }
}
</script>

<style>
</style>
