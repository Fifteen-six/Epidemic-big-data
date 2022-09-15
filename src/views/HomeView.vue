<template>
  <div class="home">
    <Header />
    <!-- <Covid19 :Covid19="Covid19" /> -->
    <CaseNum :CaseNum="CaseNum" />
    <Map />
    <Travel />
  </div>
</template>

<script>
// import Covid19 from "../components/Covid19.vue";
import Map from "../components/Map.vue";
import api from "../api";
import Header from "../components/Header.vue";
import CaseNum from "../components/CaseNum.vue";
import Travel from "../components/Travel.vue";

export default {
  name: "HomeView",
  data() {
    return {
      // Covid19: {
      // note1: "",
      // note2: "",
      // note3: "",
      // remark1: "",
      // remark2: "",
      // remark3: "",
      // sourceUrl0:"",
      // sourceUrl1:"",
      // sourceUrl2:"",
      // sourceUrl3:"",
      // sourceUrl4:"",
      // sourceUrl5:"",
      //},
      CaseNum: {
        modifyTime: "",
        currentConfirmedCount: "", //现存确诊人数
        confirmedCount: "", //	累计确诊人数
        suspectedCount: "", //	累计境外输入人数
        curedCount: "", //		累计治愈人数
        deadCount: "", //	累计死亡人数
        seriousCount: "", //	现存无症状人数
        suspectedIncr: "", //		新增境外输入人数
        currentConfirmedIncr: "", //	相比昨天现存确诊人数
        confirmedIncr: "", //	相比昨天累计确诊人数
        curedIncr: "", //		相比昨天新增治愈人数
        deadIncr: "", //		相比昨天新增死亡人数
        seriousIncr: "", //	相比昨天现存无症状人数
      },
    };
  },
  components: {
    Header,
    CaseNum,
    Map,
    Travel,
    // Covid19,
  },
  mounted() {
    api
      .getNcov({
        key: "62e34ad34025d5d5127135efa58d4ca8",
      })
      .then((res) => {
        // console.log(res.data);
        console.log("@@", res.data);
        if (res.status === 200) {
          // 疫情信息数据
          // this.Covid19.note1 = res.data.newslist[0].desc.note1;
          // this.Covid19.note2 = res.data.newslist[0].desc.note2;
          // this.Covid19.note3 = res.data.newslist[0].desc.note3;
          // this.Covid19.remark1 = res.data.newslist[0].desc.remark1;
          // this.Covid19.remark2 = res.data.newslist[0].desc.remark2;
          // this.Covid19.remark3 = res.data.newslist[0].desc.remark3;
          //疫情病例

          (this.CaseNum.modifyTime = res.data.newslist[0].desc.modifyTime),
            (this.CaseNum.currentConfirmedCount =
              res.data.newslist[0].desc.currentConfirmedCount),
            (this.CaseNum.confirmedCount =
              res.data.newslist[0].desc.confirmedCount),
            (this.CaseNum.suspectedCount =
              res.data.newslist[0].desc.suspectedCount),
            (this.CaseNum.curedCount = res.data.newslist[0].desc.curedCount),
            (this.CaseNum.deadCount = res.data.newslist[0].desc.deadCount),
            (this.CaseNum.seriousCount =
              res.data.newslist[0].desc.seriousCount),
            (this.CaseNum.suspectedIncr =
              res.data.newslist[0].desc.suspectedIncr),
            (this.CaseNum.currentConfirmedIncr =
              res.data.newslist[0].desc.currentConfirmedIncr),
            (this.CaseNum.confirmedIncr =
              res.data.newslist[0].desc.confirmedIncr),
            (this.CaseNum.curedIncr = res.data.newslist[0].desc.curedIncr),
            (this.CaseNum.deadIncr = res.data.newslist[0].desc.deadIncr),
            (this.CaseNum.seriousIncr = res.data.newslist[0].desc.seriousIncr);
        }
      })
      .catch((error) => {});

    //api.getNews({}).then((res) => {
    // console.log(res.data);
    // this.Covid19.note1 = res.data.showapi_res_body.newsList[0].title;
    // this.Covid19.note2 = res.data.showapi_res_body.newsList[1].title;
    // this.Covid19.note3 = res.data.showapi_res_body.newsList[2].title;
    // this.Covid19.remark1 = res.data.showapi_res_body.newsList[3].title;
    // this.Covid19.remark2 = res.data.showapi_res_body.newsList[4].title;
    // this.Covid19.remark3 = res.data.showapi_res_body.newsList[5].title;

    // this.Covid19.sourceUrl0= res.data.showapi_res_body.newsList[0].sourceUrl
    // this.Covid19.sourceUrl1= res.data.showapi_res_body.newsList[0].sourceUrl
    // this.Covid19.sourceUrl2= res.data.showapi_res_body.newsList[0].sourceUrl
    // this.Covid19.sourceUrl3= res.data.showapi_res_body.newsList[0].sourceUrl
    // this.Covid19.sourceUrl4= res.data.showapi_res_body.newsList[0].sourceUrl
    // this.Covid19.sourceUrl5= res.data.showapi_res_body.newsList[0].sourceUrl
    //});
    // this.$charts.WorldMap("WorldMap");
  },
};
</script>
<style scoped>
</style>