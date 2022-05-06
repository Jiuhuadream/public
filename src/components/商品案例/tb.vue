<template>
  <!-- 表格数据展示 -->
  <div>
    <table class="tb">
      <tr>
        <th>
          <input type="checkbox" v-model="checkAll" @change="change" />
          <!-- 动态绑定一个字符串控制全选反选 -->
        </th>
        <th>产品图片</th>
        <th>编号</th>
        <th>品牌名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>操作</th>
      </tr>

      <!-- 动态生成内容tr -->
      <tr v-for="(item, index) in goods" :key="item.id">
        <!-- key作为唯一标识符 -->

        <!-- 手动写td -->
        <td>
          <!-- 勾选框 -->
          <input
            type="checkbox"
            name=""
            id=""
            v-model="checkArr"
            :value="item"
          />
        </td>
        <td>
          <!-- 图片 -->
          <img :src="item.imgUrl" width="50px" height="50px" />
        </td>
        <td>
          <!-- 编号 -->
          {{ item.code }}
        </td>
        <td>
          <!-- 品牌名称 -->
          {{ item.productName }}
        </td>
        <td>
          <!-- 价格 -->
          {{ item.price }}
        </td>
        <td>
          <!-- 数量 -->

          <!-- 给-按钮注册点击事件 -->
          <button :disabled="item.count <= 1" @click="decrement(item)">
            -
          </button>
          {{ item.count }}
          <button @click="increment(item)">+</button>
          <!-- 给+按钮注册点击事件 -->
        </td>
        <td>
          <!-- 删除 -->
          <!-- 给删除注册点击事件 -->
          <!-- 要把索引传过去用于删除使用 -->
          <input type="button" value="删除" @click.prevent="del(index)" />
        </td>
      </tr>
    </table>
    <div class="add" style="text-align: center" v-show="goods.length === 0">
      没有更多数据了
    </div>
    <!-- 只有goods的内容为空的时候显示出来 -->
    <!-- 也可以写成v-show="!goods.length" 有内容隐式转换成“非是”false，没有内容隐式转换成“非非”true-->
    <h1 class="add" style="text-align: right">
      总价:￥
      <b style="color: hotpink">{{ total | tofix }}</b>
    </h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: [
        //商品展示图片、编号、价格、名称数量、操作
        {
          id: 1,
          imgUrl:
            "https://img.zcool.cn/community/0112305cc00f40a801208f8b95ee56.jpg@1280w_1l_2o_100sh.jpg",
          code: 1, //编号
          productName: "绿水鬼",
          price: 300,
          count: 1,
        },
        {
          id: 2,
          imgUrl:
            "https://n.sinaimg.cn/sinacn20191114ac/533/w800h533/20191114/0243-iikmuth5562980.png",
          productName: "2022款玛莎拉蒂",
          code: 2,
          price: 200,
          count: 1,
        },
        {
          id: 3,
          imgUrl:
            "https://tse1-mm.cn.bing.net/th/id/R-C.9f247a5472024bf13eaed7931407a5c0?rik=N9OjnOMml2thSg&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn%2f20171031%2fcf56-fynhhay9827967.jpg&ehk=1hcK%2fXviGUM9jZbIhdjLSnxgOFH%2brZmlG2BjRYZ%2f3NE%3d&risl=&pid=ImgRaw&r=0",
          productName: "吕布的赤兔马",
          code: 3,
          price: 100,
          count: 1,
        },
      ],
      //总价初始值为0
      // total: "0.00",
      checkArr: [], //checkbox动态绑定v-model=“数组”，可以吧checkbox的value值添加到数组内
      checkAll: false,
      a: 1,
    };
  },

  //全选反选：全选被选中的时候，让checkArr直接等于goods就可以了
  watch: {
    // checkAll(checked) {
    //   //侦听checkAll（全选）返回的布尔值状态
    //   //checked是v-model绑定checkAll属性，给checkAll返回的布尔值
    //   if (checked) {
    //     //如果布尔值是true
    //     this.checkArr = [...this.goods];
    //     // this.checkArr = this.goods;
    //   } else {
    //     this.checkArr = [];
    //   }
    // },
    checkArr(newval, oldval) {
      //当被选中的数据的长度和商品的长度不同的时候，代表全选没被选中，v-model动态绑定的checkAll要变为false
      // console.log(oldval);
      if (newval.length !== this.goods.length) {
        // this.checkArr = [...oldval];
        this.checkAll = false;
        // this.checkArr = oldval;
      } else {
        //如果长度相同，v-model动态绑定的checkAll要变为true
        this.checkAll = true;
      }
    },
  },

  //使用computed计算总价
  computed: {
    total() {
      return (
        //如果数组长度为0即是false直接返回，如果有长度就代表&&左边的是true，右边无论TRUE还是FALSE都会直接返回
        this.checkArr.length &&
        this.checkArr.reduce((total, item) => {
          return (total += item.price * item.count);
        }, 0)
      );
    },
  },
  //保留两位小数点
  filters: {
    tofix(input) {
      return input.toFixed(2);
    },
  },

  //删除功能
  methods: {
    change(e) {
      console.log(e);
      //绑定change事件监听全选事件
      if (this.checkAll) {
        this.checkArr = [...this.goods];
      } else {
        this.checkArr = [];
      }
    },

    del(index) {
      //删除对应index的数据
      let rt = this.goods.splice(index, 1);
      //rt[0]是被删掉返回来的数据

      //删除时候要删掉checkArr中的数据让价格清零
      //-------------------方法①遍历法
      // this.checkArr.forEach((item, i) => {
      //   if (item.id === rt[0].id) {
      //     this.checkArr.splice(i, 1);
      //   }
      // });

      //-------------------方法②过滤法
      //过滤掉checkArr中，id和rt[0](被删掉的数据)的id相同的那一项

      this.checkArr = this.checkArr.filter((item) => {
        //返回的就是cheeckArr中被删掉后的剩下数据(我们需要保留的数据)，重新赋值给checkArr
        return item.id !== rt[0].id;
      });
    },

    //点击-事件
    decrement(item) {
      // if (item.count) {
      //   item.count--;
      // }
      item.count--;
    },

    //点击+事件
    increment(item) {
      item.count++;
    },
  },

  //传添加的数据参数
  mounted() {
    this.$bus.$on("add", (input) => {
      this.goods.push(input);
    });
  },
};
</script>
