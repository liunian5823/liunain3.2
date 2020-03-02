<template>
	<!-- 标题组件 -->
  <div class="covers">
    <div class="covers-sipers">
      <img :src="images" />
    </div>
    <div class="covers-title">
      {{this.culum}}
    </div>
    <div class="covers-img" @click="imgeShow">
      {{this.album.length}}张图片
    </div>
    <!-- 小导航 -->
    <div class="calssify">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </div>
</template>

<script>
import Bus from '../../../bus/bus.js'
export default{
  name:"covers",
  //props接受父组件传过来的值
  props:{
    culum:'',
    images:'',
    album:Array,

  },
  data(){
    return{
      showImage:String
    }
  },
  mounted() {
    //接受从sliding组件传过来的
    Bus.$on('val',(data)=>{
        console.log("传过来的值是"+data)
        // 把这个值赋值到一个变量上
        this.showImage=data
    })
  },
  methods:{
    imgeShow(){
      // 发生事件改变那个传过来的值
      this.showImage=true
      //发送过去改变后的值  再把改变后的值发给sliding组件
      Bus.$emit('val',this.showImage)
    }
  }
}
</script>

<style scoped="scoped">
  .covers{
    position: relative;
  }
  .covers-sipers img{
    width: 100%;
  }
  .covers-title{
    position: absolute;
    top: 2rem;
    font-size: 0.5rem;
    color: white;
    left: 0.5rem;
  }
  .covers-img{
    position: absolute;
    top: 3rem;
    left: 0.5rem;
    font-size: 0.36rem;
    color:white;
  }
  .calssify{
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 0.5rem;
    width: 100%;
  }
</style>
