import "font-awesome/css/font-awesome.css";
import Vue from "vue";

import App from "./App";

import "./config/bootstrap";
import "./config/msgs";
import store from "./config/store";
import router from "./config/router";

Vue.config.productionTip = false;

// TEMPORARIO!
require("axios").defaults.headers.common["Authorization"] =
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6Ik1hcmlhIFNpbHZhIiwiZW1haWwiOiJtYXJpYS5zaWx2YUBob3RtYWlsLmNvbSIsImFkbWluIjoiZmFsc2UiLCJpYXQiOjE2NDQ2MTU5NDQsImV4cCI6MTY0NDg3NTE0NH0.4y-Bt18EFbUKG9MgvFWIE1I82Lw9Wxs_I7DkEgn_X1o";
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
