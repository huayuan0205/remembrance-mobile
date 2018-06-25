import Vue from 'vue'
// import VueRouter from 'vue-router'
import SuiVue from 'semantic-ui-vue'
import App from './App.vue'
import HomeView from './components/HomeView.vue'
import 'semantic-ui-css/semantic.min.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(SuiVue);
// Vue.use(VueRouter);

// const scrollBehavior = (to, from, savedPosition) => {
//   if (savedPosition) {
//     // savedPosition is only available for popstate navigations.
//     return savedPosition
//   } else {
//     const position = {}
//     // new navigation.
//     // scroll to anchor by returning the selector
//     if (to.hash) {
//       position.selector = to.hash
//       console.log(to)

//       // specify offset of the element
//       if (to.hash === '#anchor2') {
//         position.offset = { y: 100 }
//       }
//     }
//     // check if any matched route config has meta that requires scrolling to top
//     if (to.matched.some(m => m.meta.scrollToTop)) {
//       // cords will be used if no selector is provided,
//       // or if the selector didn't match any element.
//       position.x = 0
//       position.y = 0
//     }
//     // if the returned position is falsy or an empty object,
//     // will retain current scroll position.
//     return position
//   }
// }

// const routes = [
//   { path: '/', 
//   redirect: {
//     name: '/item/1'
//   }},
//   // component: App, meta: { scrollToTop: true },
//   // children: [
//     { path: '/item/:id', component: HomeView, meta: { scrollToTop: true }}

//   // ]

// ]
// const router = new VueRouter({
//   mode: 'hash', 
//   // scrollBehavior,
//   routes
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
