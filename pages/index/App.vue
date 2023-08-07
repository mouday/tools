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

export default {
  name: 'index',

  props: {},

  components: {
    LayoutMain,
  },

  data() {
    return {
      pages: [
        {
          title: '命名风格转换',
          url: 'pages/naming-style/index.html',
        },
        {
          title: '生成文字头像',
          url: 'pages/letter-avatar/index.html',
        },
        {
          title: '代码格式化',
          url: 'pages/code-format/index.html',
        },
      ],
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
