<template>
  <div>
    <Covers :culum='culum' :images='images' :album='album'></Covers>
    <Collect :productId='productId'></Collect>
    <Speech :culum='culum' :lecturer='lecturer' :article='article'></Speech>   <!-- 语音子组件-->
    <Sliding :album='album'></Sliding>
    <Revert :culum='culum'></Revert>
    <Loading v-show="showLoding"></Loading>
  </div>
</template>

<script>
import Covers from './compoents/covers.vue'   //大图 轮播  组件
import Revert from './compoents/revert.vue'  //返回首页头部组件
import Sliding from './compoents/sliding.vue'//轮播图组件
import Collect from './compoents/collect.vue'  //收藏组件
import Speech from './compoents/speech.vue' //语音组件
import Loading from '../login/login' //loging动画组件
//引入攻略详情页
import { goods } from '../../api/api.js'
export default{
  name:"home_container",
  components:{
    Covers,
    Revert,
    Sliding,
    Collect,
    Speech,
    Loading
  },
  data(){
    return{
      productId:null,//取到第几详情页的id
      culum:'',
      images:"",
      album:[],
      lecturer:'',
      article:"",
      showLoding:true
    }
  },
  mounted() {
    goods(this.productId)
    .then((res)=>{
      console.log(res);
      var data=res.data;
      //标题
      this.culum=data.curriculum
      //背景图
      this.images=data.image
      //相册
      this.album=data.images
      //语音描述
      this.lecturer=data.lecturer
      //文章
      this.article=data.goods_desc
    })
    .catch((error)=>{
      console.log(error)
    })
  },
  beforeCreate(){
    this.showLoding=true
  },
  created() {
    //获取列表页传过来的id值
    this.productId=this.$route.params.id
    console.log(this.productId)
    this.showLoding=false
  }
}
</script>

<style>
</style>
