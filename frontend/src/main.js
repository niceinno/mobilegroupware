import Vue from 'vue'
import App from './App.vue'
import router from './router';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './resources/css/common.css';

Vue.prototype.$http = axios;
Vue.config.devtools = true;
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

Vue.prototype.$imageUrl = "http://localhost:10080";

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
