import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import 'vuetify/src/stylus/app.styl'
import { VCard, VCardText, VCardMedia } from 'vuetify/lib'

export default {
  components: {
    VCard,
    VCardText,
    VCardMedia
  }
}

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  render: h => h(App),
}).$mount('#app')
