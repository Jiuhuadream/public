<template>
  <fieldset>
    <legend>Parent组件</legend>
    <h1>{{ name }}</h1>
    <button
      v-for="btn in btns"
      :key="btn"
      :class="['tab-button', { active: btn == activeBtn }]"
      @click="toTab(btn)"
    >
      <!-- btn代表btns数组中的每一项 -->
      <!-- 如果btn和activeBtn名字一样,那么就加上active这个类名 -->
      <!-- 将btn作为参数传给toTab,用于逻辑判断 -->
      {{ btn }}
    </button>
    <!-- <A></A>
    <B></B>
    <C></C> -->
    <h1 class="tab" :is="tabs"></h1>
    <!-- 动态添加tabs(tabs是点击的按钮名字截取后作为组件名动态添加) -->
  </fieldset>
</template>

<script>
import A from "./A.vue";
import B from "./B.vue";
import C from "./C.vue";
export default {
  components: { A, C, B },
  data() {
    return {
      name: "parent组件",
      btns: ["tab-A", "tab-B", "tab-C"],
      activeBtn: "tab-A",
    };
  },
  methods: {
    // 点击事件:让activeBtn重新赋值为传过来的btn
    toTab(btn) {
      this.activeBtn = btn;
    },
  },
  computed: {
    // 计算属性截取需要的组件名
    tabs() {
      return this.activeBtn.substr(4);
    },
  },
};
</script>
<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  background: #e0e0e0;
}

.tab-button.active {
  background: hotpink;
}

.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
