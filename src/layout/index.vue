<template>
  <div class="layout">
    <div class="nav">
      <button class="normalBtn">
        <router-link to="/">回到首页</router-link>
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "LayoutView",
  data() {
    return {
      routes: [],
    };
  },
  mounted() {
    this.routes = this.$router.getRoutes();
    console.log("this.$router.getRoutes() =", this.$router.getRoutes());
  },
};
</script>

<style scoped>
.nav {
  padding: 50px 80px;
}
a {
  color: black;
  text-decoration: none;
}
</style>
