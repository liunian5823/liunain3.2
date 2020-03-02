<template>
  <div>
	  <div class="name">
      <router-link to="/login" v-if="!this.userInfo.name">
        <div class="btn">
          登录
        </div>
      </router-link>
      <!-- 已经登录显示的页面 -->
      <div class="" v-else>
        <img src="http://img1.imgtn.bdimg.com/it/u=3093541962,3021165011&fm=26&gp=0.jpg" alt="头像" />
        <p>{{this.userInfo.name}}</p>
      </div>
	  </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default{
  name:"my",
  data(){
    return{
      
    }
  },
  computed:{
   ...mapState(['userInfo']),
  }
}
</script>

<style scoped="scoped">
  .name{
    background-color: #477bc7;
    padding: 1rem 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn{
    background-color: yellowgreen;
    width: 2rem;
    padding: 0.2rem 0.1rem;
    border-radius: 0.1rem;
    color: white;
    font-size: 0.6rem;
  }
  .name img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .name p{
    font-size: 0.3rem;
    color: white;
    margin-top: 0.2rem;
  }
</style>
