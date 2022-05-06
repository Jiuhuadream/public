<template>
  <fieldset>
    <legend>A组件</legend>
    <modal :visible="isShow" @ok="confirm">
      <template v-slot:title>
        <h1>警告</h1>
      </template>

      <template v-slot:body>
        <h3>充值一个亿？</h3>
      </template>
    </modal>
    <button @click="openModal">点击打开modal</button>
  </fieldset>
</template>
<script>
import modalMix from "../mixins/modal";
export default {
  mixins: [modalMix],
};
</script>
