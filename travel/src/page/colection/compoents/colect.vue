<template>
  <div class="collect">
    <div  v-for="(item,index) in colldata" :key="index">
      <router-link :to="'/container/' + item.goods.id">
      <div class="content">
        <div class="content_img">
          <img :src='item.goods.name.image' />
        </div>
        <div class="content_list">
          <div>{{item.goods.name.name}}</div>
          <div>{{item.goods.name.title}}</div>
        </div>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { myscoll } from "../../../api/api";
export default {
  name: "colect",
  data() {
    return {
      colldata: []
    };
  },
  //请求收藏列表
  mounted() {
    myscoll({})
      .then(res => {
        console.log(res);
        this.colldata = res.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
@import url("../../../assets/style/public.css");
.collect {
  margin-top: 0.8rem;
}
</style>