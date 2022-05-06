<template>
  <fieldset>
    <legend>C组件</legend>
    <modal :visible="isShow" @ok="confirm">
      <template v-slot:title>
        <h1>警告</h1>
      </template>
      <template v-slot:body>
        <select name="" id="">
          <option value="1">南京</option>
          <option value="2">北京</option>
          <option value="3">上海</option>
          <option value="4">广州</option>
        </select>
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
