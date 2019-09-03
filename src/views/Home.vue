<template>
  <div class="home" id='home-d'>
     
    <!-- <sui-button compacat size="mini" fixed icon="info" @click.native="toggle"></sui-button> -->
    <home-view/>
    
    
    
  </div>
</template>

<script>

// @ is an alias to /src
import HomeView from '@/components/HomeView.vue'

import * as $ from 'jquery'
import * as d3 from 'd3v4/build/d3.js'

window['jQuery'] = window['$'] = $;
export default {
  name: 'home',
  components: {
    HomeView,
    
  },
  data: function(){
    return {
      items:[]
    }
  },
  computed:{
    r_img_bk: function(){
      return Math.sqrt(Math.pow($(window)[0].screen.availHeight,2) + Math.pow($(window)[0].screen.availWidth, 2))
    },
    r_img: function(){
      // let availHeightorWidth = Math.max($(window)[0].screen.availHeight, $(window)[0].screen.availWidth)
      let r_img = $(window)[0].screen.availHeight / 2 //availHeightorWidth / 2
      return r_img
    }
  },
  methods:{
    toggle() {
      this.open = !this.open;
    }
   
  },
  mounted(){
    var self = this;
    // console.log(self.$router.history.current.params.subdomain)
      // const dateArr = [];
      // let host_url = window.location.host;
      //   // let re16 = /(\w+)\.(climatefutures\.us)\/(#)\/([\d\w]+)/g;
      //   // let re16 = /(\w*)(\.\w+\.*)+(climatefutures\.us)/g;
      //   let host_params = host_url.replace("climatefutures.us","").replace("www.","").replace("staging.","").replace(".","");
      //   console.log("toname", host_url,host_params)
      // let subdomain = self.$router.history.current.params.subdomain;
      // let datafile = subdomain + ".csv"
      d3.queue().defer(d3.csv,"data.csv").await(function(err,d){
        // console.log
        self.items = d
       
      })
      


  //  let self = this;
  //  console.log("fff",self,document)
  //  document.addEventListener('scroll', self.handleScroll);
   }
  
}
</script>
