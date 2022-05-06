<template>
  <div id="app">
    <h1>APP组件</h1>
    <!-- tab案例 -->
    <!-- <A></A> -->
    <!-- <B></B> -->
    <!-- <Parent></Parent> -->
    <router-link to="/aa">测试</router-link>
    <router-link to="/home">主页蔬菜列表</router-link>
    <!-- | -->
    <!-- <router-link to="/users">用户页蔬菜详情</router-link> -->
    <router-view></router-view>

    <!-- 商品案例 -->
    <!-- <Ipt></Ipt>
    <Search></Search>
    <Tb></Tb> -->
  </div>
</template>

<script>
import Ipt from "./components/商品案例/ipt.vue";
import Search from "./components/商品案例/search.vue";
import Tb from "./components/商品案例/tb.vue";
// import B from "../src/components/B.vue";
// import A from "../src/components/A.vue";
// import Parent from "./components/Parent.vue";
export default {
  name: "App",
  components: {
    Ipt,
    Search,
    Tb,
    // A,
    // B,
    // Parent,
  },
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
