<template>
  <LayoutMain>
    <div class="app-container">
      <div class="items">
        <template v-for="item in pages">
          <a
            class="item"
            v-if="!item.hidden"
            :href="item.url"
            target="_blank"
            >{{ item.title }}</a
          >
        </template>
      </div>
    </div>
  </LayoutMain>
</template>

<script>
import LayoutMain from '../../layout/Main.vue'
import {PAGES} from './config.js'

export default {
  name: 'index',

  props: {},

  components: {
    LayoutMain,
  },

  data() {
    return {
      pages: PAGES,
      value: '',
    }
  },

  methods: {
    async getData() {},
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="less">
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.item {
  display: flex;
  align-items: center;
  width: 250px;
  margin-bottom: 12px;
  background: #fcfcfc;
  padding: 10px;
  height: 72px;
  border-radius: 3px;
  border: 1px solid #efefef;
  cursor: pointer;
  transition: opacity 0.3s, border-color 0.3s;

  &:hover {
    opacity: 0.75;
  }
}
</style>

<style lang="less" scoped></style>
