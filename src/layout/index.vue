<template>
  <div class="layout">layout</div>
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

<style></style>
