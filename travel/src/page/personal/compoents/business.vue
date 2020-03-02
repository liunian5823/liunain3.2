<template>
  <div class="business" v-if="this.userInfo.name">
    <div>
      <router-link to="/mycollection">
        <img src alt="收藏" />
        <p>我的收藏</p>
      </router-link>
    </div>
    <div @click="loGout">
      <img src alt="退出登录" />
      <p>退出登录</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import cookie from "../../../axios/cookie";
export default {
  name: "business",
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    loGout() {
      localStorage.removeItem("name");
      localStorage.removeItem("token");
      //更新vuex里面的数据
      this.$store.dispatch("users");
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style scoped="scoped">
.business {
  display: flex;
  justify-content: space-between;
  margin: 0.3rem 0.1rem;
}
.business img {
  width: 0.7rem;
  padding-bottom: 0.1rem;
}

.business div {
  background-color: #3aa4f0;
  text-align: center;
  padding: 0.2rem 0;
  width: 46%;
  border-radius: 3px;
  color: white;
  font-size: 0.2rem;
}
</style>
