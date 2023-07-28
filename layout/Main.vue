<template>
  <div class="">
    <Header></Header>
    <slot></slot>
    <!-- <Footer></Footer> -->
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

<style lang="less"></style>

<style lang="less" scoped></style>
