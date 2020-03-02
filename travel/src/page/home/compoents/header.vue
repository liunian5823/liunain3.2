<template>
  <div>
    <router-link to="/search">
      <div class="search">
        <a href="##">sss</a>
        <input type="text" disabled="disabled" placeholder="输入目的地/攻略/游记" />
      </div>
    </router-link>
    
  </div>
</template>

<script>
export default{
  name:"home_header",

}
</script>

<style scoped="scoped">
  .search{
    display:flex;
    height: 1rem;
    align-items: center;
    padding: 0 0.2rem;
  }
  .search img{
    width: 2rem;
    height: 0.76rem;
    padding-right:0.1rem;
  }
  .search input{
    height: 0.4rem;
    width: 100%;
    border-radius:0.3rem;
    padding:0.06rem 0.2rem;
  }
</style>
