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

            props: true,
            
          }
      ]
    },
    {
      name: 'climatechangecambridge',
      path: 'www.cambridgema.gov/CDD/climateandenergy/climatechangeplanning',
      beforeEnter(){
        location.href = 'http://www.cambridgema.gov/CDD/climateandenergy/climatechangeplanning'
      }

    }

  ]
})
