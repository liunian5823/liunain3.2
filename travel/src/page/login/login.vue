<template>
  <div>
    <Header></Header>
    <Loginpage></Loginpage>
  </div>
</template>

<script>
import Header from './compoents/headers'
import Loginpage from './compoents/loginpage'
export default{
  name:"login",
  components:{
    Header,
    Loginpage
  }
}
</script>

<style>
</style>
