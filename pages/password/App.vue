<template>
  <LayoutMain>
    <div class="app-container">
      <h2 class="text-center">生成随机密码</h2>

      <el-form
        :model="form"
        label-width="120px"
      >
        <el-form-item label="数量">
          <el-input-number
            v-model="form.count"
            :min="1"
            style="width: 160px"
            @change="handleCreate"
          />
        </el-form-item>

        <el-form-item label="长度">
          <el-input-number
            v-model="form.length"
            :min="1"
            style="width: 160px"
            @change="handleCreate"
          />
        </el-form-item>

        <el-form-item label="字符集">
          <el-checkbox-group
            v-model="form.chars"
            @change="handleCreate"
          >
            <div
              v-for="item in CHARACTERS"
              :key="item.value"
            >
              <el-checkbox :label="item.value">{{ item.label }}</el-checkbox>
              <span style="font-size: 14px; margin-left: 10px">{{
                item.chars
              }}</span>
            </div>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="">
          <el-button
            type="primary"
            @click="handleCreate"
            >生成</el-button
          >
          <el-button @click="handleCopy">复制</el-button>
        </el-form-item>

        <el-form-item label="生成结果">
          <el-input
            v-model="form.result"
            :rows="resultRows"
            type="textarea"
            spellcheck="false"
          />
        </el-form-item>
      </el-form>
    </div>
  </LayoutMain>
</template>

<script>
// created at 2023-07-27
import copy from 'copy-to-clipboard'
import { CHARACTERS, randomString } from './utils.js'
import LayoutMain from '../../layout/Main.vue'

export default {
  name: 'index',

  props: {},

  components: {
    LayoutMain,
  },

  data() {
    return {
      CHARACTERS,

      form: {
        count: 5,
        length: 8,
        chars: CHARACTERS.map((item) => item.value),
        result: '',
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
      this.handleCreate()
    },

    handleCreate() {
      const chars = CHARACTERS.filter((item) =>
        this.form.chars.includes(item.value)
      )
        .map((item) => item.chars)
        .join('')

      if (!chars) {
        this.$msg.warning('请先设置生成字符集合')
        return
      }

      console.log(chars)

      let result = []

      for (let i = 0; i < this.form.count; i++) {
        result.push(randomString(chars, this.form.length))
      }

      this.form.result = result.join('\n')
    },

    handleCopy() {
      if (!this.form.result) {
        return
      }

      copy(this.form.result)

      this.$msg.success('已复制到剪切板')
    },
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="less"></style>
