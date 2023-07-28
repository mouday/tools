<template>
  <div class="layout__footer-wrap">
    <div class="layout__footer"></div>
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
  margin-top: 20px;
  padding: 20px 0;
  background: #2b303b;
  color: #909090;
}

.layout__footer {
}
</style>

<style lang="less" scoped></style>
