<template>
  <div>
    <div class="collect" v-if="notcoll" @click="noColl">未收藏</div>
    <div class="collect" v-else @click="canCel">已收藏</div>
  </div>
</template>

<script>
import { getcoll, collect, delcoll } from "../../../api/api";
export default {
  name: "collect",
  props: {
    productId: "",
    collectplay: ""
  },
  data() {
    return {
      notcoll: true
    };
  },
  //判断是否登录
  created() {
    console.log("当前景点的id是" + this.productId);
    //方便取到
    var productId = this.productId;
    if (localStorage.getItem("token")) {
      console.log("收藏了没有");
      //判断是否收藏
      getcoll(productId)
        .then(res => {
          console.log("判断是否收藏" + res);
          this.notcoll = false;
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.notcoll = true;
      // alert('请登录')
    }
  },
  methods: {
    //收藏
    noColl() {
      if (localStorage.getItem("token")) {
        collect({
          //根据id来知道收藏的是哪一个
          goods: this.productId
        })
          .then(res => {
            console.log(res);
            this.notcoll = false;
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.collectplay = "请登录后再收藏";
        this.showToast();
      }
    },
    //提示组件
    showToast() {
      this.$popups(this.collectplay);
    },
    //取消收藏
    canCel(){
      delcoll(this.productId).then((res)=>{
        console.log(res)
        this.notcoll = true;
      }).catch((error)=>{
        console.log(error)
      })
    }
      
  }
};
</script>

<style scoped="scoped">
.collect {
  font-size: 0.6rem;
}
</style>
