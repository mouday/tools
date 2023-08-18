<template>
  <div class="layout">
    <Header></Header>
    <div class="layout__main">
      <slot></slot>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// created at 2023-07-28
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  name: 'Main',

  props: {},

  components: {
    Header,
    Footer,
  },

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
.layout__main {
  min-height: calc(100vh - 118px);
  padding: 20px 0;
}
</style>

<style lang="less" scoped></style>
