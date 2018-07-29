<template>
  <div class="home" id='home-d'>
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
    HomeView
  },
  methods:{
   
  },
  mounted(){



  //  let self = this;
  //  console.log("fff",self,document)
  //  document.addEventListener('scroll', self.handleScroll);
   }
  
}
</script>
