// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";
  Vue.config.productionTip = false;
  Vue.use(BootstrapVue);
  new Vue({
    render: (h) => h(App),
  }).$mount("#app");
