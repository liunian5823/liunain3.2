<template>
  <div>
    <!-- 登录注册切换 -->
    <ul class="switchs">
      <li>
        <router-link to="/logiend">
          登录
        </router-link>
       </li>
      <li>
        <router-link to="/register">
          注册
        </router-link>

      </li>
    </ul>
    <!-- 二级路由渲染-->
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  name:"loginpage"
}
</script>

<style scoped="scoped">
.switchs{
  display: flex;
  justify-content: space-around;
  margin: .5rem 0;
}
.switchs li{
  font-size: .3rem;
}
</style>
