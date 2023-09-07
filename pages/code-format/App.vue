<template>
  <LayoutMain style="height: 100%">
    <div class="app-container">
      <h2 class="text-center">代码格式化</h2>

      <div>
        <el-select v-model="currentLanguage">
          <el-option
            v-for="item in options"
            :key="item.language"
            :label="item.language"
            :value="item.language"
          />
        </el-select>

        <el-button
          class="ml-sm"
          @click="handleFormat"
          >格式化</el-button
        >
        <el-button @click="handleCopy">复制</el-button>
      </div>

      <div class="mt-md editor">
        <codemirror
          v-model="value"
          placeholder="输入代码"
          :autofocus="true"
          :style="{
            height: '100%',
            'min-height': '500px',
            'font-size': '16px',
          }"
          :indent-with-tab="true"
          :tab-size="2"
          :extensions="extensions"
        />
      </div>
    </div>
  </LayoutMain>
</template>

<script>
// created at 2023-07-27
import {
  style,
  camel,
  pascal,
  hyphen,
  constant,
  snake,
  underscore,
  sentence,
} from 'naming-style'
import copy from 'copy-to-clipboard'
import LayoutMain from '../../layout/Main.vue'
import * as prettier from 'prettier/standalone'
import htmlPlugin from 'prettier/plugins/html'
import babelPlugin from 'prettier/plugins/babel'
import estreePlugin from 'prettier/plugins/estree'

// codemirror
import { Codemirror } from 'vue-codemirror'
import { html } from '@codemirror/lang-html'
import { json } from '@codemirror/lang-json'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

export default {
  name: 'index',

  props: {},

  components: {
    LayoutMain,
    Codemirror,
  },

  data() {
    return {
      value: '',

      currentLanguage: 'html',

      options: [
        {
          language: 'html',
          extension: html(),
          parser: 'html',
          plugins: [htmlPlugin],
        },
        {
          language: 'Javascript',
          extension: javascript(),
          parser: 'babel',
          plugins: [babelPlugin, estreePlugin],
        },
        {
          language: 'Json',
          extension: json(),
          parser: 'babel',
          plugins: [babelPlugin, estreePlugin],
        },
      ],
    }
  },

  computed: {
    currentConfig() {
      return this.options.find((item) => item.language === this.currentLanguage)
    },

    extensions() {
      return [this.currentConfig.extension, oneDark]
    },
  },

  methods: {
    async getData() {},

    handleCopy() {
      if (!this.value) {
        return
      }

      copy(this.value)

      this.$msg.success('已复制到剪切板')
    },

    async handleFormat() {
      const res = await prettier.format(this.value, {
        // semi: false,
        parser: this.currentConfig.parser,
        plugins: this.currentConfig.plugins,
      })
      this.value = res
    },
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="less">
.app-container {
  height: calc(100% - 74px);
  display: flex;
  flex-direction: column;
}

.editor {
  flex: 1;
}
</style>

<style lang="less" scoped></style>
