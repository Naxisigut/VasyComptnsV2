<template>
  <div class="Vasy_searchBox">
    <el-form
      ref="form"
      inline
      :model="form"
      class="searchForm"
      label-position="top"
    >
      <el-form-item
        v-for="(option, index) in formOption"
        :key="index"
        :label="option.label"
        class="formItem"
        size="medium"
      >
        <slot :name="`slot${index}`" :value="form">
          <el-input v-model="form[option.key]" placeholder="请输入" />
        </slot>
      </el-form-item>
    </el-form>
    <div ref="btns" v-blur class="btns">
      <button class="normalBtn orangeBtn" @click="apply">搜索</button>
      <el-button class="normalBtn" @click="reset">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  directives: {
    blur: {
      bind(el) {
        const btns = el.querySelectorAll("button");
        el.addEventListener("click", () => {
          btns.forEach((item) => item.blur());
        });
      },
    },
  },
  props: {
    formOption: {
      type: Array,
      required: true,
    },
    /* 注意定义此方法时设置形参，执行时会传入data里的form */
    searchFunc: {
      type: Function,
      default: () => {
        console.log("没有设置搜索方法");
      },
    },
    resetFunc: {
      type: Function,
      default: () => {
        console.log("没有设置重置方法");
      },
    },
  },
  data() {
    return {
      form: {},
    };
  },
  mounted() {
    /* 根据formOption挂载响应式数据 */
    this.formOption.forEach((option) => {
      this.$set(this.form, option.key, "");
    });
  },
  methods: {
    apply() {
      this.searchFunc(this.form);
    },
    reset() {
      this.defaultReset();
      this.resetFunc();
    },

    /* 可以通过ref直接调用默认重置，不进行额外操作 */
    defaultReset() {
      Object.keys(this.form).forEach((key) => {
        this.form[key] = "";
      }); // 清空
    },
  },
};
</script>

<style lang="less">
@import "./index.less";
</style>
