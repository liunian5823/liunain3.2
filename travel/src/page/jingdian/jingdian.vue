<template>
  <!-- 首页  大组件/父组件-->
  <div>
    <neirong></neirong>
    <Navers></Navers>
  </div>
</template>

<script>
import Navers from "./compoents/nav.vue"  //底部导航组件
import neirong from "./compoents/neirong.vue"  //内容
export default{
  name:"jingdian",
  data(){
    return{
      logShow:true,
    }
  },
  components:{
    Navers,
    neirong,
  },
  beforeCreate(){
    console.log('欢迎来到111')
    this.logShow=true
  },
  created(){
    this.logShow=false
  }
}
</script>

<style>
</style>
