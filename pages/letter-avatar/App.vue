<template>
  <LayoutMain>
    <div class="app-container">
      <h2 class="text-center">生成文字头像</h2>

      <div style="width: 500px; margin: 0 auto">
        <div class="flex items-center mt-md">
          <span class="">文字：</span>
          <el-input
            style="width: 300px"
            v-model="name"
          ></el-input>
        </div>

        <div class="flex items-center mt-md">
          <span class="">颜色：</span>
          <el-input
            style="width: 80px"
            type="color"
            v-model="color"
          ></el-input>
        </div>

        <div class="flex items-center mt-md">
          <span class="">大小：</span>
          <el-input
            style="width: 80px"
            v-model="size"
          ></el-input>
          <span class="ml-sm">xp</span>
        </div>
      </div>

      <div class="avatar-wrap text-center">
        <img
          class="avatar"
          :src="dataUrl"
          alt=""
        />

        <img
          class="avatar avatar--round ml-md"
          :src="dataUrl"
          alt=""
        />
      </div>
    </div>
  </LayoutMain>
</template>

<script>
// created at 2023-07-27
import copy from 'copy-to-clipboard'
import { LetterAvatar, COLOURS } from './LetterAvatar.js'
import LayoutMain from '../../layout/Main.vue'

export default {
  name: 'index',

  props: {},

  components: {
    LayoutMain,
  },

  data() {
    return {
      name: 'M',
      size: 200,
      color: COLOURS[Math.floor(Math.random() * COLOURS.length)],
    }
  },

  computed: {
    dataUrl() {
      return LetterAvatar(this.name, this.size / 2, this.color)
    },
  },

  methods: {
    async getData() {},

    handleCopy(data) {
      if (!data) {
        return
      }

      copy(data)
      this.$msg.success('已复制到剪切板')
    },
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="less">
.avatar-wrap {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.avatar {
  width: 100px;
  height: 100px;
}
.avatar--round {
  border-radius: 50%;
}
</style>
