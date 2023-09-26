import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import ScrollAnimation from './directives/scrollanimation'

Vue.directive('scrollanimation', ScrollAnimation);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
