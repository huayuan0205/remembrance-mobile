import Vue from 'vue'
import SuiVue from 'semantic-ui-vue'
import App from './App.vue'
<<<<<<< HEAD
import SuiVue from 'semantic-ui-vue'

Vue.use(SuiVue)

=======
import 'semantic-ui-css/semantic.min.css'
>>>>>>> faef9a306c7314ac50174eb23c2a67dba5226a7c
Vue.config.productionTip = false
Vue.use(SuiVue);

new Vue({
  render: h => h(App)
}).$mount('#app')
