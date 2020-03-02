<template>
  <div class="loginend">
    <form>
      <input type="text" placeholder="请输入手机号" v-model="phone" v-bind='loginIng' />
      <input type="password" v-model="password" placeholder="请输入密码" />
      <button type="button" :disabled="!isregist" :class="{regid_active:sendergid,'regis_begin':regisin}" v-bind='loginIng' @click="loGin">登录</button>
    </form>
   
  </div>
</template>

<script>
import {login} from '../../../api/api'
import cookie from '../../../axios/cookie';
export default{
  name:"loginend",
  components:{
   
  },
  data(){
    return{
      phone:'',
      password:'',
      isregist:false,
      //输入框未输入
      sendergid:true,
      //输入框已输入
      regisin:false,
      //错误提示信息
      iphones:''

    }
  },
  //计算属性 每次发生改变都会重新执行一次
  computed:{
    loginIng(){
      if(this.phone && this.password !=''){
        this.isregist=true;
        this.sendergid=false;
        this.regisin=true,
        //this.iphones='提示有了',
        this.showToast()
      }else{
        this.isregist=false;
        this.sendergid=true;
        this.regisin=false
      }
    }
  },
  methods:{
    //弹窗组件
    showToast(){
      this.$popups(this.iphones)
    },
    //点击登录
    loGin(){
      var that=this
      login({
        username:that.phone,
        password:that.password
      }).then((res)=>{
        console.log(res)
        //成功后存储不会到本地
        localStorage.setItem("name",that.phone)
        localStorage.setItem('token',res.data.token)
        // cookie.setCookie('name',that.phone,7)
        // cookie.setCookie('token',res.data.token,7)
        //更新数据仓库的数据
        this.$store.dispatch('users');
        //跳转到首页
        this.$router.push({name:'home'})
      }).catch((error)=>{
        console.log(error)
        if('non_field_errors' in error){
          this.iphones='手机号或者密码错误'
          this.showToast()
        }
      })
    }
  }
}
</script>

<style scoped="scoped">
  input{
    display: block;
    width: 100%;
    border: 1px solid #909090;
    padding: 0.2rem 0;
    border-radius: 3px;
    height: .4rem;

  }
  .loginend{
    margin: 0 0.5rem;
  }
  .loginend input:first-of-type{
    margin: 0.3rem 0;
  }
  button{
    border-radius: 20px;
    margin-top: .8rem;
    border: 0;
    font-size: 0.3rem;
    color: white;

    width: 2rem;
  }
  .regid_active{
    background-color: #6cd868;
  }
  .regis_begin{
    background-color: #02bf03;
  }
</style>
