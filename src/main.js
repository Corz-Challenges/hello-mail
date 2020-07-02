import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

const host = "https://jsonplaceholder.typicode.com/";
var base = axios.create({
  baseURL: host
});

base.interceptors.request.use(config => {
  config.headers = {
    
  };
  return config;
});

Vue.prototype.$http = base;


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
