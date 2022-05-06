const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: ".", //打包时要添加的
  transpileDependencies: true,
  lintOnSave: false,
});
