<template>
  <LayoutMain>
    <div class="app-container">
      <h2 class="text-center">CMYK到RGB的转换</h2>

      <h3>色彩预览：</h3>
      <div
        class="color-box"
        :style="{ 'background-color': hex_form.HEX }"
      ></div>

      <h3>CMYK</h3>
      <el-form
        :model="cmyk_form"
        class="mt-md"
        label-width="120px"
      >
        <el-form-item label="青色（C）">
          <el-input
            style="width: 300px"
            v-model="cmyk_form.CMYK_C"
          ></el-input>
        </el-form-item>

        <el-form-item label="洋红色（M）">
          <el-input
            style="width: 300px"
            v-model="cmyk_form.CMYK_M"
          ></el-input>
        </el-form-item>
        <el-form-item label="黄色（Y）">
          <el-input
            style="width: 300px"
            v-model="cmyk_form.CMYK_Y"
          ></el-input>
        </el-form-item>

        <el-form-item label="黑键颜色（K）">
          <el-input
            style="width: 300px"
            v-model="cmyk_form.CMYK_K"
          ></el-input>
        </el-form-item>

        <el-form-item label="">
          <el-button
            type="primary"
            @click="handleConvert('cmyk')"
            >颜色转换</el-button
          >
        </el-form-item>
      </el-form>

      <h3>RGB</h3>

      <el-form
        :model="rgb_form"
        class="mt-md"
        label-width="120px"
      >
        <el-form-item label="红色（R）">
          <el-input
            style="width: 300px"
            v-model="rgb_form.RGB_R"
          ></el-input>
        </el-form-item>

        <el-form-item label="绿（G）">
          <el-input
            style="width: 300px"
            v-model="rgb_form.RGB_G"
          ></el-input>
        </el-form-item>

        <el-form-item label="蓝色（B）">
          <el-input
            style="width: 300px"
            v-model="rgb_form.RGB_B"
          ></el-input>
        </el-form-item>

        <el-form-item label="">
          <el-button
            type="primary"
            @click="handleConvert('rgb')"
            >颜色转换</el-button
          >
          <el-button
            @click="
              () => {
                let color = `rgb(${rgb_form.RGB_R}, ${rgb_form.RGB_G}, ${rgb_form.RGB_B})`
                handleCopy(color)
              }
            "
            ><el-icon><DocumentCopy /></el-icon
          ></el-button>
        </el-form-item>
      </el-form>

      <h3>十六进制</h3>

      <el-form
        :model="hex_form"
        class="mt-md"
        label-width="120px"
      >
        <el-form-item label="HEX">
          <el-input
            style="width: 300px"
            v-model="hex_form.HEX"
          ></el-input>
        </el-form-item>

        <el-form-item label="">
          <el-button
            type="primary"
            @click="handleConvert('hex')"
            >颜色转换</el-button
          >

          <el-button
            @click="
              () => {
                handleCopy(hex_form.HEX)
              }
            "
            ><el-icon><DocumentCopy /></el-icon
          ></el-button>
        </el-form-item>
      </el-form>
    </div>
  </LayoutMain>
</template>

<script>
// created at 2023-07-27
import copy from 'copy-to-clipboard'
import LayoutMain from '../../layout/Main.vue'

// import { getUUID, getNanoId, getRandomString } from './utils.js'
import { DocumentCopy } from '@element-plus/icons-vue'
// import colorconverter from 'colorconverterjs'
import convert from 'color-convert'

export default {
  name: 'index',

  props: {},

  components: {
    LayoutMain,
  },

  data() {
    return {
      DocumentCopy,
      cmyk_form: {
        CMYK_C: '',
        CMYK_M: '',
        CMYK_Y: '',
        CMYK_K: '',
      },

      rgb_form: {
        RGB_R: '',
        RGB_G: '',
        RGB_B: '',
      },

      hex_form: {
        HEX: '',
      },
    }
  },

  computed: {
    resultRows() {
      return Math.max(this.form.count, 5)
    },
  },

  methods: {
    // async getData() {
    //   this.form.uuidv4 = getUUID()
    //   this.form.nanoId = getNanoId()
    //   this.form.randomString = getRandomString()
    // },

    handleCopy(data) {
      copy(data)

      this.$msg.success('已复制到剪切板')
    },

    handleConvert(type) {
      // https://github.com/Qix-/color-convert
      if (type === 'cmyk') {
        const [rgb_r, rgb_g, rgb_b] = convert.cmyk.rgb(
          this.cmyk_form.CMYK_C,
          this.cmyk_form.CMYK_M,
          this.cmyk_form.CMYK_Y,
          this.cmyk_form.CMYK_K
        )

        this.rgb_form.RGB_R = rgb_r
        this.rgb_form.RGB_G = rgb_g
        this.rgb_form.RGB_B = rgb_b

        this.hex_form.HEX =
          '#' +
          convert.cmyk.hex(
            this.cmyk_form.CMYK_C,
            this.cmyk_form.CMYK_M,
            this.cmyk_form.CMYK_Y,
            this.cmyk_form.CMYK_K
          )
      } else if (type === 'rgb') {
        const [cmyk_c, cmyk_m, cmyk_y, cmyk_k] = convert.rgb.cmyk(
          this.rgb_form.RGB_R,
          this.rgb_form.RGB_G,
          this.rgb_form.RGB_B
        )

        this.cmyk_form.CMYK_C = cmyk_c
        this.cmyk_form.CMYK_M = cmyk_m
        this.cmyk_form.CMYK_Y = cmyk_y
        this.cmyk_form.CMYK_K = cmyk_k

        this.hex_form.HEX =
          '#' +
          convert.rgb.hex(
            this.rgb_form.RGB_R,
            this.rgb_form.RGB_G,
            this.rgb_form.RGB_B
          )
      } else if (type === 'hex') {
        const [rgb_r, rgb_g, rgb_b] = convert.hex.rgb(this.hex_form.HEX)
        this.rgb_form.RGB_R = rgb_r
        this.rgb_form.RGB_G = rgb_g
        this.rgb_form.RGB_B = rgb_b

        const [cmyk_c, cmyk_m, cmyk_y, cmyk_k] = convert.hex.cmyk(
          this.hex_form.HEX
        )

        this.cmyk_form.CMYK_C = cmyk_c
        this.cmyk_form.CMYK_M = cmyk_m
        this.cmyk_form.CMYK_Y = cmyk_y
        this.cmyk_form.CMYK_K = cmyk_k
      }
    },
  },

  created() {
    // this.getData()
  },
}
</script>

<style lang="less">
.app-container {
  width: 500px;
  margin: 0 auto;
}

.color-box {
  width: 390px;
  height: 60px;
  background-image: none;
  border: 1px solid #ccc;
}
</style>
