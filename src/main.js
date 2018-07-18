import Vue from 'vue'
import SuiVue from 'semantic-ui-vue'
import App from './App.vue'
import 'semantic-ui-css/semantic.min.css'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import VueSlugify from 'vue-slugify'
Vue.config.productionTip = false
Vue.use(SuiVue);
Vue.use(VueScrollTo)
Vue.use(VueSlugify)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
