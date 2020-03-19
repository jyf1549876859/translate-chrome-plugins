<template>
  <div class="AAA">
    
  </div>
</template>

<script>
export default {
  name: 'app666',
  data() {
    return {
      bac: '',
    }
  },
  mounted() {
    this.loadElementCss()
    this.bac = chrome.extension.connect({name: "ConToBg"});//建立通道，并给通道命名
    this.bindEv()
    document.querySelector('body').oncontextmenu = e => {
      e.preventDefault()
      var txt = window.getSelection?window.getSelection().toString():document.selection.createRange().text;
      this.trans(txt)
    };
  },
  methods: {
    trans(txt) {
      this.bac.postMessage({msg: txt});//利用通道发送一条消息。
    },
    bindEv() {
      this.bac.onMessage.addListener(res => {
        console.log(res)
        const h = this.$createElement;
        this.$notify({
          title: '翻译结果',
          message: h('i', { style: 'color: #409eff'}, res.msg)
        });
      })
    },
    loadElementCss() {
      let element_css = document.createElement('link');
      element_css.href = 'https://unpkg.com/element-ui@2.8.2/lib/theme-chalk/index.css'
      element_css.rel = "stylesheet"
      document.head.append(element_css)
    }
  }
}
</script>

<style>

</style>
