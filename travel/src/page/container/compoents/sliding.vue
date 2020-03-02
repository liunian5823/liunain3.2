
<template>
  <!-- 相册轮播组件 -->
  <div class="sliding" v-show="this.showswiper" @click="disAppear">
    <div class="sliding-swiper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for='item in album' :key='item.id'>
          <img :src="item.image" />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

  </div>
</template>

<script>
  import Bus from '../../../bus/bus.js'
  export default {
    name: "sliding",
    props: {
      album: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction' ,//点变成数字
        },
        showswiper:false
      }
    },
    methods:{
      disAppear(){
        this.showswiper=false
      }
    },
    mounted(){
      //把showswiper发送到covers组件
        Bus.$emit('val',this.showswiper)
        //接收covers传过来的值
        Bus.$on('val',(data)=>{
          console.log(data)
          // 改变需要改变的值
          this.showswiper=data
        })
    }
  }
</script>

<style>
  .sliding {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: black;
    z-index: 999;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .swiper-pagination {
    color: white;
    position: fixed;
    bottom: 1rem;
    z-index: 999;
  }
</style>
