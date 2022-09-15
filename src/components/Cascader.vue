<template>
  <div>
    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="地区"
      placeholder="请选择地区"
      @click="show = true"
    />
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择地区"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      fieldValue: "",
      cascaderValue: "",
      // 选项列表，children 代表子选项，支持多级嵌套
    };
  },
  props: {
    options: {
      type: Array,
      default: function () {
        return [];
      },
    },
    label: {
      type: String,
      default: "",
    },
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join("/");
      console.log(selectedOptions);
      this.$emit("onValue", selectedOptions[1]);
    },
  },
};
</script>

<style>
</style>