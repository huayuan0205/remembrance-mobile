import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EncyclopediaItem from './components/EncyclopediaItem.vue'

Vue.use(Router)

const route =  new Router({
  routes: [
    { path: '/', 
      // redirect: '/VAS-1',
      // beforeEnter: (to, from, next) => {
 
      //   console.log("to", to)
      //   console.log("from", from)
      //   // let match = false
      //   let host_url = window.location.host;
      //   // let re16 = /(\w+)\.(climatefutures\.us)\/(#)\/([\d\w]+)/g;
      //   // let re16 = /(\w*)(\.\w+\.*)+(climatefutures\.us)/g;
      //   let host_params = host_url.replace("climatefutures.us","").replace("www.","").replace("staging.","").replace(".","");
      //   console.log("toname", host_url,host_params)
      //   host_params = "cambridge"
      //   if (host_params == "essex"){
      //     next({name:"encyclopedia-item",params:{"subdomain":host_params,id:"1"}})
      //   } else if (host_params == "cambridge"){
      //     next({name:"encyclopedia-item",params:{"subdomain":host_params,id:"VAS-1"}})
      //   }
        
      //   // if (to.name === 'general.notfound') {
      //   //   next()
      //   // }
        
      //   // //Sub-domain routing
      //   // let host = window.location.host.toUpperCase()
      
      //   // //Routing for root domain
      //   // if (host.toUpperCase() === 'localhost'){
      //   //   next({name: 'landing.welcome'})
      //   // }
      
      //   // console.log("host",host)
      
      //   // for (let i = 0; i < to.matched.length; i++){
      
      //   //   console.log("to.matched",to.matched[i])
      
      //   //   if (to.matched[i].meta.domains){
      
      //   //     if (host.includes(to.matched[i].meta.domains.toUpperCase())){
      
      //   //       console.log("Im Here!")
      
      //   //       match = true
      
      //   //       next()
      //   //     }
      
      //   //   }
      
      //   // }
      
      //   // if (!match){
      //   //   next({name: 'general.notfound', params: { '0': to.path } })
      
      //   // }
      
      // },

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
