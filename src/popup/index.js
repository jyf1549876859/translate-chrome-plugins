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
  Select,
  Option
} from 'element-ui'

Vue.use(Button)
Vue.use(TimePicker)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)


Vue.prototype.$notify = Notification;

new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});
