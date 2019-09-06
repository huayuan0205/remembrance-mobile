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
            meta: {
              showModal: false
            },
            
            children:[
              {
                path:'/:id/:linktexts',
                name: 'linkstexts',
                beforeEnter(to, from, next){
              console.log(to, from, next);
            // if ( from.name == null && to.name == "productModal" ) { 
            //     router.push({ name: 'productPage', params: { id: to.params.id, slug: to.params.slug }})
            // } else {
            //     next();
            // }

            route.push({ name: 'encyclopedia-item', params: { id: from.params.id}})
              // next();
              // location.href = 'https://www.essexma.org/board-selectmen/pages/coastal-resilience-resources'
            },
              }
            ]
            
            
          }
      ]
    },
    {
      name: 'durham-11',
      path: 'www.ucsusa.org/global-warming/global-warming-impacts/killer-heat-in-united-states',
      beforeEnter(){
        location.href = 'https://www.ucsusa.org/global-warming/global-warming-impacts/killer-heat-in-united-states'
      }

    },
    {
      name: 'durham-5',
      path: 'science2017.globalchange.gov/chapter/13/',
      beforeEnter(){
        location.href = 'https://science2017.globalchange.gov/chapter/13/'
      }

    },
    {
      name: 'durham-3',
      path: 'http://strafford.org/cmsAdmin/uploads/CRiseMaps/Durham/Map_2_Extent_Flooding_SS_Reduced.pdf',
      beforeEnter(){
        location.href = 'http://strafford.org/cmsAdmin/uploads/CRiseMaps/Durham/Map_2_Extent_Flooding_SS_Reduced.pdf'
      }

    },
    {
      name: 'durham-8',
      path: 'nca2018.globalchange.gov/chapter/18/',
      beforeEnter(){
        location.href = 'https://nca2018.globalchange.gov/chapter/18/'
      }

    },
    {
      name: 'durham-4',
      path: 'strafford.org/cmsAdmin/uploads/CRiseMaps/Durham/Map_1_Extent_Flooding_Reduced.pdf',
      beforeEnter(){
        location.href = 'http://strafford.org/cmsAdmin/uploads/CRiseMaps/Durham/Map_1_Extent_Flooding_Reduced.pdf'
      }

    },
    {
      name: 'durham-9',
      path: 'www.ucsusa.org/global-warming/global-warming-impacts/killer-heat-in-united-states',
      beforeEnter(){
        location.href = 'https://www.ucsusa.org/global-warming/global-warming-impacts/killer-heat-in-united-states'
      }

    },
    {
      name: 'climatechangecambridge',
      path: 'www.cambridgema.gov/CDD/climateandenergy/climatechangeplanning',
      beforeEnter(){
        location.href = 'http://www.cambridgema.gov/CDD/climateandenergy/climatechangeplanning'
      }

    },
    {
      name: 'essexma',
      path: 'www.essexma.org/board-selectmen/pages/coastal-resilience-resources',
      beforeEnter(){
        location.href = 'https://www.essexma.org/board-selectmen/pages/coastal-resilience-resources'
      }

    },
    {
      name: 'durhamma',
      path: 'www.ci.durham.nh.us/administration/responding-climate-change',
      beforeEnter(){
        location.href = 'https://www.ci.durham.nh.us/administration/responding-climate-change'
      }

    }

  ]
})

export default route;
