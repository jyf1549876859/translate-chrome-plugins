import Vue from "vue";
/* import 'element-ui/lib/theme-chalk/index.css'; */
import AppComponent from "./App/App.vue";

Vue.component("app-component", AppComponent);

import {
  Button,
  TimePicker,
  Form,
  FormItem,
  Notification,
} from 'element-ui'

Vue.use(Button)
Vue.use(TimePicker)
Vue.use(Form)
Vue.use(FormItem)

Vue.prototype.$notify = Notification;

new Vue({
  el: "#app666",
  render: createElement => {
    return createElement(AppComponent);
  }
});
