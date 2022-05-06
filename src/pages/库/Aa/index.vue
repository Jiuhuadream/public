<template>
  <fieldset>
    <legend>users</legend>
    <h1>{{ msg }}</h1>
    <h1>{{ name }}</h1>
    <!-- <h1>{{ reverseMsg }}</h1>
        <button @click="CHANGE_NAME('55开')">点击更改vuex中的name</button>
        <button @click="simple">一个简单粗暴的按钮</button> -->
  </fieldset>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["msg", "name"]),
  },
  mounted() {
    console.log(mapState(["name", "msg"]));
  },
};
</script>
