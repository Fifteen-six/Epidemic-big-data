<template>
  <div>
    <div id="CityMap"></div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  props: {
    City: {
      type: String,
      default: "",
    },
  },
  mounted() {
    var citys = [];
    api.getNocvCity().then((res) => {
      console.log(res);
      if (res.status === 200) {
        for (
          var i = 0;
          i < res.data.showapi_res_body.todayDetailList.length;
          i++
        ) {
          if (
            res.data.showapi_res_body.todayDetailList[i].provinceName ==
            this.City + "省"
          ) {
            for (
              var j = 0;
              j < res.data.showapi_res_body.todayDetailList[i].cityList.length;
              j++
            ) {
              var temp = {
                name: res.data.showapi_res_body.todayDetailList[i].cityList[j]
                  .cityName+'市',
              

                value:
                  res.data.showapi_res_body.todayDetailList[i].cityList[j]
                    .curedNum,
              };
              citys.push(temp);
            }
          }
        }
      }
      console.log(citys);
      this.$charts.CityMap("CityMap", this.City, citys);
    });
  },
};
</script>

<style scoped>
#CityMap {
  width: 375px;
  height: 400px;
}
</style>