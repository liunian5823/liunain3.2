<template>
  <div>
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item,index) in banner" :key="item.id">
          <img :src="item.image" />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import {banner} from '../../../api/api.js'
export default{
  // name:"lunbo",
  data(){
    return{
      swiperOption:{
        pagination:'.swiper-pagination',
        loop:true,
        autoplay:2000
      },
      banner:[]
    }
  },
  created() {
    banner({})
    .then((res)=>{
      // console.log(res)
      this.banner=res.data
    }).catch((err)=>{
      console.log(err)
    })
  }
}
</script>

<style>
</style>
