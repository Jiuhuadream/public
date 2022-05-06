<template>
  <fieldset>
    <legend>Users蔬菜详情页</legend>
    <img :src="select.img" style="width: 250px; height: 250px" alt="" />
    <h3>{{ select.content }}</h3>
  </fieldset>
</template>
<script>
export default {
  data() {
    return {
      select: {},
      vegetable: [
        {
          id: 2,
          img: "https://th.bing.com/th/id/OIP.IuzvCBVehcTA57y74bLjtAHaGz?pid=ImgDet&rs=1",
          content:
            "黄瓜（学名：Cucumis sativus L.）葫芦科一年生蔓生或攀援草本植物。茎、枝伸长，有棱沟，被白色的糙硬毛。卷须细。叶柄稍粗糙，有糙硬毛；叶片宽卵状心形，膜质，裂片三角形，有齿。雌雄同株。雄花：常数朵在叶腋簇生；花梗纤细，被微柔毛；花冠黄白色，花冠裂片长圆状披针形。雌花：单生或稀簇生；花梗粗壮，被柔毛；子房粗糙。果实长圆形或圆柱形，熟时黄绿色，表面粗糙。种子小，狭卵形，白色，无边缘，两端近急尖。花果期夏季。",
        },
        {
          id: 1,
          img: "https://bkimg.cdn.bcebos.com/pic/2934349b033b5bb594bee4e23ed3d539b600bc45?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto",
          content:
            "胡萝卜（学名：Daucus carota var. sativa Hoffm.）是伞形科、胡萝卜属野胡萝卜的变种，一年生或二年生草本植物。根粗壮，长圆锥形，呈橙红色或黄色。茎直立，高可达90厘米，多分枝。叶片具长柄，羽状复叶，裂片线形或披针形，先端尖锐；叶柄基部扩大，形成叶鞘。复伞形花序；花序梗有糙硬毛；总苞片多数，呈叶状、结果期外缘的伞辐向内弯曲；花通常白色，有时带淡红色；花柄不等长。果实圆锥形，棱上有白色刺手。期4月开花。",
        },
        {
          id: 3,
          img: "https://bkimg.cdn.bcebos.com/pic/2fdda3cc7cd98d108463d431293fb80e7bec907f?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5/format,f_auto",
          content:
            "茄（学名：Solanum melongena L.）茄科，茄属植物。茄直立分枝草本至亚灌木，高可达1米，小枝，叶柄及花梗均被6-8-（10）分枝，平贴或具短柄的星状绒毛，小枝多为紫色（野生的往往有皮刺），渐老则毛被逐渐脱落。叶大，卵形至长圆状卵形，叶柄长约2-4.5厘米（野生的具皮刺）。能孕花单生，花柄长约1-1.8厘米，毛被较密。果的形状大小变异极大。果的形状有长或圆，颜色有白、红、紫等。",
        },
      ],
    };
  },
  mounted() {
    console.log(this.$route); //获取路由传参信息
    // 获取id
    let id = this.$route.params.id;

    // 用传进来的id去和vegetable的id匹配，筛选出相同的数据添加给semect
    this.select = this.vegetable.find((item) => {
      return item.id == id; //要加return
    });
    console.log(this.select);
  },
};
</script>
