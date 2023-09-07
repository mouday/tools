<template>
  <LayoutMain>
    <div class="app-container">
      <h2 class="text-center">生成随机UUID</h2>

      <el-form
        :model="form"
        class="mt-md"
        label-width="120px"
      >
        <el-form-item label="UUIDv4：">
          <div>{{ form.uuidv4 }}</div>

          <el-button
            text
            :icon="DocumentCopy"
            @click="handleCopy(form.uuidv4)"
          />
        </el-form-item>

        <el-form-item label="NanoId：">
          <div>{{ form.nanoId }}</div>
          <el-button
            text
            :icon="DocumentCopy"
            @click="handleCopy(form.nanoId)"
          />
        </el-form-item>

        <el-form-item label="随机字符：">
          <div>{{ form.randomString }}</div>
          <el-button
            text
            :icon="DocumentCopy"
            @click="handleCopy(form.randomString)"
          />
        </el-form-item>

        <el-form-item label="">
          <el-button
            type="primary"
            @click="getData"
            >重新生成</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </LayoutMain>
</template>

<script>
// created at 2023-07-27
import copy from 'copy-to-clipboard'
import LayoutMain from '../../layout/Main.vue'

import { getUUID, getNanoId, getRandomString } from './utils.js'
import { DocumentCopy } from '@element-plus/icons-vue'

export default {
  name: 'index',

  props: {},

  components: {
    LayoutMain,
  },

  data() {
    return {
      DocumentCopy,
      form: {
        uuidv4: '',
        nanoId: '',
        randomString: '',
      },
    }
  },

  computed: {
    resultRows() {
      return Math.max(this.form.count, 5)
    },
  },

  methods: {
    async getData() {
      this.form.uuidv4 = getUUID()
      this.form.nanoId = getNanoId()
      this.form.randomString = getRandomString()
    },

    handleCopy(data) {
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
.app-container {
  width: 500px;
  margin: 0 auto;
}
</style>
