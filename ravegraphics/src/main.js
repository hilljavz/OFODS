import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/style.css'
import './assets/fonts.css'
import './assets/themify-icons/themify-icons.css'
Vue.config.productionTip = false


import AOS from 'aos'
import 'aos/dist/aos.css'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'v-toaster/dist/v-toaster.css'
import 'vue-loading-overlay/dist/vue-loading.css';
import HTTP from './http'

import Toaster from 'v-toaster'
// optional set default imeout, the default is 10000 (10 seconds).
Vue.use(Toaster, {timeout: 5000})

import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.use(CoolLightBox)

new Vue({
  created(){
    AOS.init({
    })
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
