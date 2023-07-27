<template>
  <div class="app-container">
    <h2 class="text-center">命名风格转换</h2>

    <div style="width: 500px; margin: 0 auto">
      <div class="flex items-center mt-md">
        <span class="">原始字符串：</span>
        <el-input
          style="width: 300px"
          v-model="value"
        ></el-input>
      </div>

      <div class="mo-form-detail mt-md">
        <el-form label-width="200px">
          <template v-for="item in list">
            <el-form-item :label="`${item.title} (${item.label})`">
              <div class="flex items-center justify-between flex-1">
                <span>{{ item.value || '-' }}</span>

                <el-link
                  v-if="item.value"
                  :underline="false"
                  @click="handleCopy(item.value)"
                  ><el-icon class="cursor-pointer"><DocumentCopy /></el-icon
                ></el-link>
              </div>
            </el-form-item>
          </template>
        </el-form>
      </div>
    </div>
  </div>
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

export default {
  name: 'index',

  props: {},

  components: {},

  data() {
    return {
      value: '',
    }
  },

  computed: {
    list() {
      return [
        {
          title: '命名风格',
          label: 'style',
          value: this.styleNaming,
        },
        {
          title: '小驼峰式命名',
          label: 'camel',
          value: this.camelNaming,
        },
        {
          title: '大驼峰式命名',
          label: 'pascal',
          value: this.pascalNaming,
        },
        {
          title: '连字符式命名',
          label: 'hyphen',
          value: this.hyphenNaming,
        },
        {
          title: '常量式命名',
          label: 'constant',
          value: this.constantNaming,
        },
        {
          title: '蛇形命名',
          label: 'snake',
          value: this.snakeNaming,
        },
        {
          title: '下划线形式',
          label: 'underscore',
          value: this.underscoreNaming,
        },
        {
          title: '单个句子',
          label: 'sentence',
          value: this.sentenceNaming,
        },
      ]
    },

    styleNaming() {
      if (this.value) {
        return style(this.value)
      }
    },

    camelNaming() {
      if (this.value) {
        return camel(this.value)
      }
    },

    pascalNaming() {
      if (this.value) {
        return pascal(this.value)
      }
    },

    hyphenNaming() {
      if (this.value) {
        return hyphen(this.value)
      }
    },

    constantNaming() {
      if (this.value) {
        return constant(this.value)
      }
    },

    snakeNaming() {
      if (this.value) {
        return snake(this.value)
      }
    },
    underscoreNaming() {
      if (this.value) {
        return underscore(this.value)
      }
    },
    sentenceNaming() {
      if (this.value) {
        return sentence(this.value)
      }
    },
  },

  methods: {
    async getData() {},

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

<style lang="less"></style>

<style lang="less" scoped></style>
