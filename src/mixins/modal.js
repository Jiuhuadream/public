import modal from "../modal组件封装";
export default {
  components: {
    //组件注册
    modal,
  },
  data() {
    return {
      isShow: false, //控制弹出框的显示和隐藏
    };
  },
  methods: {
    openModal() {
      //点击打开modal
      this.isShow = true;
    },
    confirm() {
      // 触发确认关闭modal的回调(@ok=“confirm”)
      this.isShow = false;
    },
  },
};
