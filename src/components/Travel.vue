<template>
  <div class="spring">
    <h3 class="title">疫情各地出行政策</h3>
    <Cascader :options="options" aria-label="出发城市" @onValue="getgoCity" />
    <Cascader :options="options" aria-label="到达城市" @onValue="getonCity" />
    <van-button type="info" block @click="gotoView_display"
      >查看政策</van-button
    >
  </div>
</template>

<script>
import Cascader from "./Cascader.vue";
import api from "../api";

export default {
  data() {
    return {
      options: [],
      citys: [],
    };
  },
  components: {
    Cascader,
  },
  mounted() {
    api
      .getTravel({
        key: "476c16b06c5327a5cd089ee03b9af97f",
      })
      .then((res) => {
        console.log(res);
        var currentAll = [];
        // console.log(res.data);
        if (res.status === 200) {
          for (var i = 0; i < res.data.result.length; i++) {
            var arr = [];
            for (var j = 0; j < res.data.result[i].citys.length; j++) {
              var temp2 = {
                text: res.data.result[i].citys[j].city,
                value: res.data.result[i].citys[j].city_id,
              };
              arr.push(temp2);
            }
            var temp1 = {
              text: res.data.result[i].province,
              value: res.data.result[i].province_id,
              children: arr,
            };
            currentAll.push(temp1);
          }
          this.options = currentAll;
        }
      });
  },
  // mounted() {
  //   api.getTravel({
  //    key:" 171e165a7d991c5f6ecd5194c54778ef",
  //   }).then((res) => {
  //     var currentAll = [];
  //     if (res.status === 200) {
  //       for (var i = 0; i < res.data.result.length; i++) {
  //         var arr = [];
  //         for (var j = 0; j < res.data.result[i].citys.length; j++) {
  //           var temp2 = {
  //             text: res.data.result[i].citys[j].city,
  //             value: res.data.result[i].citys[j].city_id,
  //           };
  //           arr.push(temp2);
  //         }
  //         var temp1 = {
  //           text: res.data.result[i].province,
  //           value: res.data.result[i].province_id,
  //           children: arr,
  //         };
  //         currentAll.push(temp1);
  //       }
  //       this.options = currentAll;
  //     }
  //   });
  // },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    getgoCity(data) {
      console.log(data);
      this.citys.push(data);
    },
    getonCity(data) {
      this.citys.push(data);
    },
    gotoView_display() {
      if (this.citys.length === 2) {
        this.$router.push({
          name: "View_display",
          params: { citys: this.citys },
        });
      } else {
        //提示文案
        this.$notify({ message: "请选择城市" });
      }
    },
  },
};
</script>

<style scoped>
.spring {
  width: 100%;
  padding: 10px;
  background: #fff;
  box-sizing: border-box;
}
.spring.title {
  font-size: 0.16rem;
  margin: 0 0 0.08rem 0.16rem;
}
</style>>

</style>