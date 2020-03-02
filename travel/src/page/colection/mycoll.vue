<template>
  <div>
    <Header></Header>
    <Colect></Colect>
  </div>
</template>

<script>
import Header from "./compoents/header";
import Colect from './compoents/colect'
export default {
  name: "mycoll",
  components: {
    Header,
    Colect
  }
};
</script>

<style scoped>
</style>