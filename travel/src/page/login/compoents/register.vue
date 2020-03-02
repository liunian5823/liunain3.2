<template>
  <div class="loginend">
    <input type="text" placeholder="请输入手机号" v-model="iphone" />
    <div class="verififcation">
      <input type="text" placeholder="请输入验证码" v-model="code" />
      <input type="button" :disabled="!send" :value="codeText" @click="seedCode" v-bind="teSting" />
    </div>
    <input type="password" placeholder="请设置密码" v-model="password" />
    <div>
      <button
        type="button"
        v-bind="minitor"
        :disabled="!isregist"
        :class="{regid_active:sendergid,'regis_begin':regisin}"
        @click="sterRegis"
      >注册并登录</button>
    </div>
  </div>
</template>

<script>
//引入cookie
import cookie from "../../../axios/cookie";
//代表引入了两个
import { getcode, register } from "../../../api/api";
export default {
  name: "register",
  data() {
    return {
      iphone: "",
      code: "",
      password: "",
      isregist: false,
      //输入框未输入
      sendergid: true,
      //输入框已输入
      regisin: false,
      codeText: "发送验证码",
      send: true,
      iphones: ""
    };
  },
  //发送验证码
  methods: {
    seedCode() {
      var that = this;
      //定义一个时间
      var countdown = 60;
      codetime();
      function codetime() {
        if (countdown == 0) {
          that.codeText = "发送验证码";
          countdown = 60;
          that.send = true;
          return;
        } else {
          countdown--;
          that.codeText = "" + countdown + "秒后重发";
          that.send = false;
        }
        setTimeout(function() {
          codetime();
        }, 1000);
      }
      //发送验证码
      getcode({
        mobile: that.iphone
      })
        .then(res => {
          console.log(res);
          // console.log('000')
        })
        .catch(error => {
          // console.log(error);
          //手机号码已经存在
          that.iphones = error.mobile[0];
          that.showToast();
        });
    },
    //注册
    sterRegis() {
      register({
        username: this.iphone,
        code: this.code,
        password: this.password
      })
        .then(res => {
          console.log(res);
          localStorage.setItem('name',res.data.username)
          localStorage.setItem('token',res.data.token)
          // cookie.setCookie("name", res.data.username, 7);
          // cookie.setCookie("token", res.data.token, 7);
          //更新数据仓库里面的数据
          this.$store.dispatch("users")
          //跳转到首页
          this.$router.push({name:'home'})
        })
        .catch(error => {
          console.log(error);
          // this.iphones = error.code[0];
          this.showToast();
        });
    },
    //提示框
    showToast() {
      this.$popups(this.iphone);
    }
  },
  //计算属性
  computed: {
    minitor() {
      if (this.iphone && this.code && this.password != "") {
        this.isregist = true;
        this.sendergid = false;
        this.regisin = true;
      } else {
        this.isregist = false;
        this.sendergid = true;
        this.regisin = false;
      }
    },
    //验证手机号码是否真确
    teSting() {
      if (/^1(3|4|5|7|8)\d{9}$/.test(this.iphone)) {
        console.log("手机号不对");
        this.send = true;
      } else {
        this.send = false;
      }
    }
  }
};
</script>

<style scoped="scoped">
input {
  display: block;
  width: 100%;
  border: 1px solid #909090;
  padding: 0.2rem 0;
  border-radius: 3px;
  height: 0.4rem;
}
input[type="button"] {
  display: block;
  height: 1rem;
}
.loginend {
  margin: 0 0.5rem;
}
.verififcation {
  display: flex;
  margin: 0.3rem 0;
}
.regid_active {
  background-color: #6cd868;
}
.regis_begin {
  background-color: #02bf03;
}
</style>
