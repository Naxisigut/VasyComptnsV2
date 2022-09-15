<template>
  <div class="searchBoxView">
    <!-- searchBox view -->
    <SearchBox
      :formOption="formOpts"
      :searchFunc="search"
      :resetFunc="reset"
      style="width: 1000px; display: flex; margin: auto"
    ></SearchBox>

    <!-- extra -->
    <div class="display">
      <div
        v-for="(item, index) in msgs"
        :key="index"
        style="margin-bottom: 10px"
      >
        <div>你点击了{{ item.type === 2 ? "重置" : "搜索" }}按钮</div>
        <div v-if="item.type === 0">没有填写表单</div>
        <div v-if="item.type === 1">表单为：{{ item.msg }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "@/components/SearchBox/index.vue";
export default {
  name: "SearchBoxView",
  components: { SearchBox },
  data() {
    return {
      formOpts: [
        { label: "姓名", key: "name" },
        { label: "年龄", key: "age" },
        { label: "性别", key: "gender" },
        { label: "性别", key: "gender" },
      ],
      msgs: [],
    };
  },
  methods: {
    search(form) {
      const values = Object.values(form);
      if (values.every((item) => item === "")) {
        this.msgs.push({ type: 0 });
      } else {
        this.msgs.push({ type: 1, msg: JSON.stringify(form) });
      }
    },
    reset() {
      this.msgs.push({ type: 2 });
    },
  },
};
</script>

<style></style>
