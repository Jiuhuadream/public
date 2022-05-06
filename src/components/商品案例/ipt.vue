<template>
  <!-- 增加 -->
  <div class="add">
    <!-- 需要收集用户输入的内容 给要收集每个输入框都绑定v-model -->
    编号:<input type="text" v-model="code" />

    品牌名称:<input type="text" v-model="productName" />

    <br />

    产品图片地址:<input type="text" v-model="imgUrl" />

    价格:<input type="text" v-model="price" />

    <!-- 给添加注册点击事件 -->
    <input type="button" value="添加" @click="add" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: "",
      productName: "",
      price: "",
      imgUrl: "",
    };
  },
  methods: {
    add() {
      //1.对属性进行非空验证
      if (!this.code || !this.price || !this.productName || !this.imgUrl) {
        alert("警告:输入不能为空");
        return;
      }
      //2.获取输入框中的内容 整合到一个对象中
      let obj = {
        id: Math.random().toString(32).substring(2),
        code: this.code,
        productName: this.productName,
        price: this.price,
        imgUrl: this.imgUrl,
        count: 1,
      };
      //3.添加到tb组件的goods数组中
      this.$bus.$emit("add", obj);
      //4.清空输入框内容
      this.code = "";
      this.price = "";
      this.productName = "";
      this.imgUrl = "";
    },
  },
};
</script>
