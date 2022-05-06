import Vue from "vue";
import App from "./App.vue";

import bus from "./utils/EventBus"; //引入bus总线
import "animate.css";
Vue.prototype.$bus = bus; //把bus总线添加到原型上
Vue.config.productionTip = false;

import router from "./router"; //引入路由

import store from "./store"; //引入vuex库
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
