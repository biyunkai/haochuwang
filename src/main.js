import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "./common/css/reset.css"
import "./common/css/font.css"
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'



Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/error.jfif',
  loading: './assets/loading.gif',
  attempt: 1
})
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

