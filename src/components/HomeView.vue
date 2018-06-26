<template>
  <div id="home-view">
    <div class="splash-img">
      <div class="splash-txt">
        <h3>cambridge<br>acclimation<br>society</h3>
      </div>
    </div>  
    <div class="intro">
      <p>
 
      </p>
      <p>
        Established in 2120, the society serves to document, and keep in memory, significant climate events of our local past, that we may not repeat our mistakes and act more mindfully of our climatic impact.
      </p>
    </div>
      <encyclopedia-view></encyclopedia-view>
  </div>
  
</template>
<script>

import EncyclopediaView from '@/views/EncyclopediaView.vue'
import * as d3 from 'd3v4/build/d3.js'

export default {
  name: 'HomeView',
  props: ["encyclopedia"],
  components: {
    EncyclopediaView
  },
  data: function(){
    return {items:[]}
  },
   mounted: function () {
     
        var self = this;
        d3.queue().defer(d3.csv,"data.csv").await(function(err,d){
          self.items = d

        })
        
    }
}
</script>
