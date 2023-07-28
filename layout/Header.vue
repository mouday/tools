<template>
  <div class="layout__header-wrap">
    <div class="layout__header">
      <a
        class="layout__header__title"
        href="#"
        >More Tools</a
      >
    </div>
  </div>
</template>

<script>
// created at 2023-07-28
export default {
  name: 'Header',

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
.layout__header-wrap {
  background: #2b303b;
  margin-bottom: 20px;
}

.layout__header {
  margin: 0 auto;
  height: 54px;
  width: 1000px;
  display: flex;
  align-items: center;
}

.layout__header__title {
  color: #f4f4f4;
  cursor: pointer;
  font-size: 24px;
  font-family: Source Sans Pro, sans-serif;
  font-weight: 600;
}
</style>

<style lang="less" scoped></style>
