<template>
  <div id="app">
    <!-- 主页面 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view><!-- 需要缓存的 -->
    </keep-alive>
    <!-- 不需要缓存的-->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>
