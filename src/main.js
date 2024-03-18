import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueGtag from "vue-gtag";
import ScrollAnimation from './directives/scrollanimation'

Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "G-Y1WEC995D7" }
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
