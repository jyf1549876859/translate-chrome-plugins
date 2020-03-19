import $ from 'jquery'

window.langType = 'AUTO'

window.changeLangType = (type) => {
  window.langType = type
  return type
}

$(document).ready(function(){
  chrome.extension.onConnect.addListener(function(cab) {//监听是否连接，cab为Port对象
    cab.onMessage.addListener(function(res) {
      if(res.msg) {
        $.ajax({
          url: 'http://fanyi.youdao.com/translate',
          type: 'GET',
          data: {
            doctype: 'json',
            type: window.langType,
            i: res.msg
          },
        }).then(function(res){
          console.log(res.translateResult[0][0].tgt)
          cab.postMessage({ msg: res.translateResult[0][0].tgt});//利用通道发送一条消息。
        }, function(err){
          console.log(err)
        });
      }
    })
  })
})

