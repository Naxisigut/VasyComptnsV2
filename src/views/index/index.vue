<template>
  <div class="index">
    <h2>Components List</h2>
    <div class="cpntList">
      <div v-for="route in routes" :key="route.path" class="cpnt">
        <router-link :to="route">{{ route.name }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexView",
  data() {
    return {
      routes: [],
    };
  },
  mounted() {
    this.routes = this.$router.getRoutes().filter((item) => item.name);
    console.log("this.$router.getRoutes() =", this.$router.getRoutes());
  },
};
</script>

<style scoped>
.index {
  width: 70%;
  margin: auto;
}
h2 {
  margin-top: 100px;
  font-size: 30px;
}
a {
  color: olivedrab;
}
.cpntList {
  display: flex;
  flex-wrap: wrap;
}
.cpnt {
  width: 25%;
}
</style>
