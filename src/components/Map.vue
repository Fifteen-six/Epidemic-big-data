<template>
  <div>
    <p class="title">疫情地图</p>
    <div class="title0">
      <span
        class="title1"
        v-for="(item, index) in ['国内疫情', '国外疫情']"
        :key="index"
        @click="handleClick(index)"
        >{{ item }}</span
      >
    </div>
    <div id="ChinaMap" v-show="current === 0"></div>
    <div id="WorldMap" v-show="current === 1"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    function NocvChina() {
      return axios.get(
        "https://route.showapi.com/2217-2?showapi_appid=1102474&showapi_sign=1e4ed394efd547c5899ad15d6ac7fc9d"
      );
    }
    function NcovWorld() {
      return axios.get(
        "http://api.tianapi.com/ncovabroad/index?key=62e34ad34025d5d5127135efa58d4ca8"
      );
    }
    axios.all([NocvChina(), NcovWorld()]).then(
      //对返回数据进行处理
      axios.spread((NocvChina, NcovWorld) => {
        console.log(NocvChina.data)
        var china = [];
        for (
          var i = 0;
          i < NocvChina.data.showapi_res_body.todayDetailList.length;
          i++
        ) {
          var temp0 = {
            name: NocvChina.data.showapi_res_body.todayDetailList[i]
              .provinceName,
            value:
              NocvChina.data.showapi_res_body.todayDetailList[i].confirmedNum,
          };

          china.push(temp0);
        }
        console.log(china);
        var worlds = [];
        for (var i = 0; i < NcovWorld.data.newslist.length; i++) {
          var temp = {
            name: NcovWorld.data.newslist[i].provinceName,
            value: NcovWorld.data.newslist[i].currentConfirmedCount,
          };

          worlds.push(temp);
        }
        console.log(worlds);
        this.$charts.WorldMap("WorldMap", worlds);
        this.$charts.ChinaMap("ChinaMap", china);
        // this.$charts.CityMap("CityMap");
      }
      )
    );
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    handleClick(index) {
      this.current = index;
    },
  },
  // api
  //   .getNcovWorld({
  //     key: "4e630e7a542754165d7ced768b2d215b",
  //   })
  //   .then((res) => {
  //     console.log(res.data);

  // );

  // methods: {
  //   setColor(value) {
  //     let currentColor = "";
  //     switch (value) {
  //       case value == 0:
  //         currentColor = "#FFFFFF";
  //         break;
  //       case value > 0 && value < 10:
  //         currentColor = "#FDFDCF";
  //         break;
  //       case value >= 1000 && value < 2000:
  //         currentColor = "#FE9E83";
  //         break;
  //       case value >= 2000 && value < 5000:
  //         currentColor = "#FE9E83";
  //         break;
  //       case value >= 5000 && value < 100000000:
  //         currentColor = "#4F070D";
  //         break;
  //     }
  //     return currentColor;
  //   },
  // },
};
</script>

<style scoped>
.title {
  border-top: 0.005rem solid #ebebeb;
  border-bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 0.44rem;
  padding: 0 0.16rem;
  font-weight: 500;
  font-size: 0.17rem;
  line-height: 0.44rem;
  background: #fff;
}
.title0 {
  border-top: 0.005rem solid #ebebeb;
  border-bottom: 0;
  display: flex;
  background: #fff;
}
.title1 {
  border-top: 0.005rem solid #ebebeb;
  border-bottom: 0;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  height: 0.44rem;
  padding: 0 0.16rem;
  font-weight: 500;
  font-size: 0.17rem;
  line-height: 0.44rem;
  background: #fff;
  width: 50%;
  text-align: center;
}

.title::before {
  content: "";
  width: 5px;
  height: 20px;
  background: #4169e2;
  margin-right: 10px;
}

#ChinaMap {
  width: 375px;
  height: 400px;
}
#WorldMap {
  width: 375px;
  height: 400px;
}
/* canvas{
  width: 100%;
  height: 100%;
} */
</style>