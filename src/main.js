import Vue from 'vue'
import SuiVue from 'semantic-ui-vue'
import App from './App.vue'
import 'semantic-ui-css/semantic.min.css'
import router from './router'
import VueScrollTo from 'vue-scrollto'
import VueSlugify from 'vue-slugify'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'
import VueAnalytics from 'vue-analytics'


Vue.config.productionTip = false
const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
	id : 'UA-79653789-2',
	router,
	debug:{
		enabled: !isProd,
		sendHitTask: isProd
	}
})

Vue.use(SuiVue);
Vue.use(VueScrollTo)
Vue.use(VueSlugify)
Vue.use(VueFullPage);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


