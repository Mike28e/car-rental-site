import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueGtag from "vue-gtag";
import VueMeta from 'vue-meta';
import router from "./router";
import ScrollAnimation from './directives/scrollanimation';
import { Crisp } from "crisp-sdk-web";

import "@/styles/media.css";
import "@/styles/transitions.css";
import "@/styles/cursors.css";



Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "G-Y1WEC995D7" }
});

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

Crisp.configure("659c5cc9-c68c-4ce8-820f-0e225274771e")

Vue.use(Crisp)

var app = new Vue({
  router,
  vuetify,
  render: h => h(App)
});

router.onReady(() => {
  app.$mount('#app');
})

