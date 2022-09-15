<template>
  <div>
    <div class="from">
      <h2>{{ fromInfo.city_name }}</h2>
      <p>{{ fromInfo.high_in_desc }}</p>
      <p>{{ fromInfo.low_in_desc }}</p>
      <p>{{ fromInfo.out_desc }}</p>
    </div>
    <div class="to">
      <h2>{{ toInfo.city_name }}</h2>
      <p>{{ toInfo.high_in_desc }}</p>
      <p>{{ toInfo.low_in_desc }}</p>
      <p>{{ toInfo.out_desc }}</p>
    </div>
  </div>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      fromInfo: {},
      toInfo: {},
    };
  },
  props: {
    citys: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  mounted() {
    api
      .getTravel00({
        key: "476c16b06c5327a5cd089ee03b9af97f",
        from: this.citys[0].value,
        to: this.citys[1].value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          this.fromInfo = res.data.result.from_info;
          this.toInfo = res.data.result.to_info;
        }
      });
  },
};
</script>

<style>
</style>