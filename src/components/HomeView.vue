<template>
  <div id="home-view">
    
    <div >
      <img src="../assets/alluminium.png" class="backgrear-img" alt id="backgear"  :style="fixStyleBack">
      <img src="../assets/alluminium.png" class="splash-img" alt id="leftgear" :style="fixStyle">
      
      <!-- <div class="splash-txt"> -->
        <!-- <h3>cambridge<br>memory<br>spot</h3> -->
      <!-- </div> -->
    <!-- </div> -->
    
    <!-- <div class="intro">
      <p>

      </p>
      <p>
        Installed in 2120, these spots serve to keep in memory significant climate events of the city's past.
      </p>
    </div> -->
      <encyclopedia-view ></encyclopedia-view>
    </div>
  </div>

</template>
<script>

import EncyclopediaView from '@/views/EncyclopediaView.vue'
import * as d3 from 'd3v4/build/d3.js'
import * as whenScroll from 'when-scroll'

export default {
  name: 'HomeView',
  props: ["encyclopedia"],
  components: {
    EncyclopediaView
  },
  data: function(){
    return {items:[]}
  },
  computed:{
    fixStyleBack: function(){
      let r_img_bk = this.$parent.r_img_bk;
      let height_img_bk = r_img_bk * 2
      let width_img_bk = r_img_bk * 2 
      return {
      height: `${ height_img_bk }px`,
      width: `${ width_img_bk}px`,
      left: `${- width_img_bk/2 }px`,
      top:`${-r_img_bk + ($(window)[0].screen.availHeight/2) }px`
      
    }},
    fixStyle: function(){
      let r_img = this.$parent.r_img
      return {
      height: `${r_img * 2  }px`,
      width: `${r_img * 2  }px`,
      top: `${$(window)[0].screen.availHeight / 18  }px`,
      left: `-${r_img }px`,
      
    }}
  },
   mounted: function () {
        var self = this;
        d3.queue().defer(d3.csv,"data.csv").await(function(err,d){
          self.items = d

        })
      whenScroll('every 100px', function () {

      // this.$router.push(this.encyclopedia.event)
      // console.log(self.$route.params.id)
      // console.log(self)
      const this_item = self.items.filter((value, index, array) => {
              return value.event == self.$route.params.id;
            })
        let dir_decision;
         switch (self.scrollDir) { // Set animFrom value, depending on the index i of the item
          case 0:
            dir_decision = (+this_item[0].id - 1);
            break; // 
          case 1:
            dir_decision = (+this_item[0].id + 1);
            break;
        }



      const to_item = self.items.filter((value, index, array) => {
              return value.id == dir_decision;
            })

      // console.log("this_item",this_item)
      // console.log("to_item", to_item)
      self.$router.push(to_item[0].event)
});


       $(window).scroll(function() {

var offset = $(window).scrollTop();
let availOffset = $('#home-view').innerHeight() - $(window)[0].screen.availHeight
let scrollDirection = offset - self.offset
if (scrollDirection > 0){
  // console.log("positive scroll direction")
  self.scrollDir = 1;

} else {
  // console.log("negative scroll direction")
  self.scrollDir = 0;
}
self.offset = offset;
	offset     = offset * .1;
  // add css transform with the offset variable
  $('#backgear').css({
    '-moz-transform': 'rotate(' + offset + 'deg)',
    '-webkit-transform': 'rotate(' + offset + 'deg)',
    '-o-transform': 'rotate(' + offset + 'deg)',
    '-ms-transform': 'rotate(' + offset + 'deg)',
    'transform': 'rotate(' + offset + 'deg)',
  });
});
  }

}

</script>
