<template>
  <div id="home-view">
    <div class="splash-img">
      <div class="splash-txt">
        <h3>cambridge<br>memory<br>spot</h3>
      </div>
    </div>
    <div class="intro">
      <p>

      </p>
      <p>
        Installed in 2120, these spots serve to keep in memory significant climate events of the city's past.
      </p>
    </div>
      <encyclopedia-view ></encyclopedia-view>
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
