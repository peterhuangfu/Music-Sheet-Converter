import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import SheetIcon from "./components/SheetIcon.vue";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.component("sheet-icon", SheetIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
