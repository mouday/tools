<template>
  <div class="layout__footer-wrap">
    <div class="layout__footer">
      <span>友情链接：</span>
      <a
        href="https://qushuiyin.guijianpan.com"
        target="_blank"
        >小熊猫去水印</a
      >
    </div>
  </div>
</template>

<script>
// created at 2023-07-28
export default {
  name: 'Footer',

  props: {},

  components: {},

  data() {
    return {}
  },

  computed: {},

  methods: {
    async getData() {},
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="less">
.layout__footer-wrap {
  // margin-top: 20px;
  padding: 20px 0;
  background: #2b303b;
  color: #909090;
  font-size: 12px;
}

.layout__footer {
  width: 1000px;
  margin: 0 auto;
}
</style>

<style lang="less" scoped></style>
