<template>
  <div class="main-container">
    <el-select v-model="translateLanguage" filterable placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      translateLanguage: 'AUTO',
   /* 语言枚举：
      ZH_CN2EN 中文　»　英语
      ZH_CN2JA 中文　»　日语
      ZH_CN2KR 中文　»　韩语
      ZH_CN2FR 中文　»　法语
      ZH_CN2RU 中文　»　俄语
      ZH_CN2SP 中文　»　西语
      EN2ZH_CN 英语　»　中文
      JA2ZH_CN 日语　»　中文
      KR2ZH_CN 韩语　»　中文
      FR2ZH_CN 法语　»　中文
      RU2ZH_CN 俄语　»　中文
      SP2ZH_CN 西语　»　中文 */
      options: [{
        value: 'AUTO',
        label: '智能自动翻译'
      }, {
        value: 'ZH_CN2EN',
        label: '中文　»　英语'
      }, {
        value: 'ZH_CN2JA',
        label: '中文　»　日语'
      }, {
        value: 'ZH_CN2KR',
        label: '中文　»　韩语'
      }, {
        value: 'ZH_CN2FR',
        label: '中文　»　法语'
      }, {
        value: 'ZH_CN2RU',
        label: '中文　»　俄语'
      }, {
        value: 'ZH_CN2SP',
        label: '中文　»　西语'
      }, {
        value: 'EN2ZH_CN',
        label: '英语　»　中文'
      }, {
        value: 'JA2ZH_CN',
        label: '日语　»　中文'
      }, {
        value: 'KR2ZH_CN',
        label: '韩语　»　中文'
      }, {
        value: 'FR2ZH_CN',
        label: '法语　»　中文'
      }, {
        value: 'RU2ZH_CN',
        label: '俄语　»　中文'
      }, {
        value: 'SP2ZH_CN',
        label: '西语　»　中文'
      }],
    }
  },
  mounted() {
    const { langType } = chrome.extension.getBackgroundPage()
    this.translateLanguage = langType
  },
  watch: {
    translateLanguage(newVal) {
      this.changeType(newVal)
    }
  },
  methods: {
    changeType(type) {
      const { changeLangType } = chrome.extension.getBackgroundPage()
      let res = changeLangType(type)
    }
  },
}
</script>

<style>
.main-container {
  height: 400px;
  width: 300px;
}
</style>
