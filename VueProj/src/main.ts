import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import VueAxios from 'vue-axios';
//import VueAuthenticate from 'vue-authenticate';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

axios.interceptors.request.use((config: any) => {

  const authToken = store.getters['auth/authToken'];
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
}, (err: any) => {
  return Promise.reject(err);
});