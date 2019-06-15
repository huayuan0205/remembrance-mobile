import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EncyclopediaItem from './components/EncyclopediaItem.vue'

Vue.use(Router)

const route =  new Router({
  routes: [
    { path: '/', 
      // redirect: '/VAS-1',
      beforeEnter: (to, from, next) => {
 
  
        // let match = false
        let host = window.location.host.toUpperCase()
        let re16 = /(\w+)\.(climatefutures\.us)\/(\#)\/([\d\w]+)/g;
        let host_params = re16.exec(host);
        console.log("toname", host,host_params)
        next({name:"encyclopedia-item",params:{"subdomain":"essex",id:"1"}})
        // if (to.name === 'general.notfound') {
        //   next()
        // }
        
        // //Sub-domain routing
        // let host = window.location.host.toUpperCase()
      
        // //Routing for root domain
        // if (host.toUpperCase() === 'localhost'){
        //   next({name: 'landing.welcome'})
        // }
      
        // console.log("host",host)
      
        // for (let i = 0; i < to.matched.length; i++){
      
        //   console.log("to.matched",to.matched[i])
      
        //   if (to.matched[i].meta.domains){
      
        //     if (host.includes(to.matched[i].meta.domains.toUpperCase())){
      
        //       console.log("Im Here!")
      
        //       match = true
      
        //       next()
        //     }
      
        //   }
      
        // }
      
        // if (!match){
        //   next({name: 'general.notfound', params: { '0': to.path } })
      
        // }
      
      },

      },

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

export default route;
