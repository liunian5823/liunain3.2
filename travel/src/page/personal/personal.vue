<template>
  <!-- 大组件 父组件-->
  <div>
    <My></My>
    <Business></Business>
    <Naver></Naver>
  </div>
  
</template>

<script>
  import Naver from './compoents/nav'
  import My from './compoents/my'
  import Business from './compoents/business'
export default{
  name:"personal",
  components:{
    Naver,
    My,
    Business
  }
}
</script>

<style>
</style>
