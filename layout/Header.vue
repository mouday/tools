<template>
  <div class="layout__header-wrap">
    <div class="layout__header">
      <a
        class="layout__header__title"
        :href="BASE_URL"
        ><img
          class="layout__header__logo"
          :src="LOGO_URL"
          alt=""
      /></a>

      <el-dropdown trigger="hover">
        <div class="header-tool-btn">
          <el-icon><Suitcase /></el-icon>
          <span class="header-tool-btn__text">工具箱</span>
          <el-icon><arrow-down /></el-icon>
        </div>

        <template #dropdown>
          <el-dropdown-menu>
            <template v-for="item in toolList">
              <!-- 外链 -->
              <el-dropdown-item
                v-if="item.type == 'url'"
                @click="handleToolItemClick(item)"
                class="justify-center"
                >{{ item.label }}<el-icon><Link /></el-icon
              ></el-dropdown-item>

              <!-- 路由 -->
              <el-dropdown-item
                v-else
                @click="handleToolItemClick(item)"
                class="justify-center"
                >{{ item.label }}</el-dropdown-item
              >
            </template>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
// created at 2023-07-28
const BASE_URL = import.meta.env.BASE_URL
const LOGO_URL = `${BASE_URL}logo.png`

export default {
  name: 'Header',

  props: {},

  components: {},

  data() {
    return {
      BASE_URL,
      LOGO_URL,
      toolList: [
        {
          label: 'SSL配置生成',
          value: 'https://ssl-config.mozilla.org/',
        },
        {
          label: 'curl Convert',
          value: 'https://curlconverter.com/',
        },
        {
          label: 'JSON Web Token',
          value: 'https://jwt.io/',
        },
      ],
    }
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
.layout__header-wrap {
  background: #2b303b;
  margin-bottom: 20px;
}

.layout__header {
  margin: 0 auto;
  height: 54px;
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.layout__header__title {
  color: #f4f4f4;
  cursor: pointer;
  font-size: 24px;
  font-family: Source Sans Pro, sans-serif;
  font-weight: 600;
}

.header-tool-btn {
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #f4f4f4;
}

.header-tool-btn__text {
  padding: 0 4px;
}

.layout__header__logo {
  height: 40px;
}
</style>

<style lang="less" scoped></style>
