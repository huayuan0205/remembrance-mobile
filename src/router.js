import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EncyclopediaItem from './components/EncyclopediaItem.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/VAS-1' },
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {
            path: '/:id',
            name: 'encyclopedia-item',
            component: EncyclopediaItem,
            props: true 
          }
      ]
    },

  ]
})
