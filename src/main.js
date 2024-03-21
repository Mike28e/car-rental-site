import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueGtag from "vue-gtag";
import ScrollAnimation from './directives/scrollanimation'
import { Crisp } from "crisp-sdk-web";

Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "G-Y1WEC995D7" }
});

Crisp.configure("659c5cc9-c68c-4ce8-820f-0e225274771e")

Vue.use(Crisp)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
