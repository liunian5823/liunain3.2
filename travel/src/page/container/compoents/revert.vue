<template>
  <div>
      <div class="header-abs" v-show="showVet" @click="prev">
        <
      </div>

    <div class="header-fixed" v-show="!showVet">
        <div class="header-fixed-back"  @click="prev">
          <img src="" alt="大理">
        </div>
      {{this.culum}}
      <!-- 你好啊 -->
    </div>


  </div>
</template>

<script>
  export default {
    name: "revert",
    props: {
      culum: ''
    },
    data() {
      return {
        showVet: true
      }
    },

    methods: {
      //一个滚动监听的函数
      revert() {
        let add = document.documentElement.scrollTop || document.body.scrollTop
        if (add > 70) {
          this.showVet = false
        } else {
          this.showVet = true
        }
        // console.log(add)
      },
	  //返回上一步
	  prev(){
		  this.$router.go(-1)
	  }
    },
    // 滚动监听后调用上面那个对应的函数
    created() {
      //事件监听
      window.addEventListener("scroll", this.revert)
    }
  }
</script>

<style scoped="scoped">
@import url("../../../assets/style/public.css");
</style>
