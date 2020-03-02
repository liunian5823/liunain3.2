<template>
  <div style="margin-bottom: 100px;">
    <div v-for="item in homes" :key="item.id">
      <router-link :to="'/container/' + item.id"><!-- 动态路由  根据id渲染不同页面 -->
        <div class="content">
          <div class="content_img">
            <img :src="item.image" />
          </div>
          <div class="content_list">
            <div>{{item.name}}</div>
            <div>{{item.title}}</div>
          </div>
        </div>
      </router-link>
    </div>
     <!-- 提示文字加载中 -->
     <div class="loading" v-show="load">{{loadText}}</div>
  </div>

</template>

<script>
  //引入请求js
  import {homes} from '../../../api/api.js'
  export default {
    name: "home_content",
    data() {
      return {
        homes: [],
        //第一页数据 默认请求第一页数据
        pages: 1,
        //提示
        load:false,
        //提示文字
        loadText:"加载中"
      }

    },
    methods: {
      hodeData() {
        homes(this.pages).then((res) => {
            console.log(res);
            // this.homes = res.data.results
            //判断数据是否为空
            if(res.data.results!=null){
              console.log(this.pages)
              if(this.pages==1){
                this.homes=res.data.results
              }else{//上拉加载请求后的数据和之前的数据进行合并
                this.homes=this.homes.concat(res.data.results)
              }
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    mounted() {
      this.hodeData()
      //上拉加载  元素滚动事件
      window.onscroll=()=>{
        console.log('发生了滚动')
        //滚动条滚动时距离顶部距离  (注意兼容)
        let scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
        //可视区域高度
        let windowHeight=document.documentElement.clientHeight+20 || document.body.clientHeight+20
        //滚动条总高度
        let scrollHeight=document.documentElement.scrollHeight || document.body.scrollHeight
        //判读 滚动条到底部
        // console.log(scrollTop + windowHeight)
        // console.log(scrollHeight)
        if(scrollTop + windowHeight>=scrollHeight){
          console.log("到底部了")
          this.pages++
          this.load=true
          if(this.pages<5){
            this.hodeData()
          }else{
            // alert("没有了")
            this.loadText="没有更多数据了"
            this.load=true
          }
        }
      }
    }
  }
</script>

<style scoped="scoped">
  @import url("../../../assets/style/public.css");

  a {
    color: black;
  }
</style>
