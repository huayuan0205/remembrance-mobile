<template>
  <div id="home-view">
    
    <div>
      <img src="../assets/alluminium.png" class="backgear-img" alt id="backgear"  :style="fixStyleBack">
        <img src="../assets/alluminium.png" class="splash-img" alt id="leftgear" :style="fixStyle">
      <svg id="svg">
        <!-- <circle class="backgear-cr" alt id="leftgear" cx="0" cy="50vh" r="50vh" /> -->
      </svg>
      
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
  // data: function(){
  //   return {items:[]}
  // },
  methods: {
    sortA: function(a,b){
        return a.date - b.date; // doesn't work
    },
    getScale: function () {
      const scaleYear = d3.scaleTime();
      const rangeExtent = [-Math.PI/2,Math.PI/2]; // semi-circle in radians, top to bottom
      const dateArr = this.items;
      const domainExtent = [dateArr[0].date.getFullYear(),dateArr[dateArr.length-1].date.getFullYear()];
      scaleYear
        .domain(domainExtent)
        .range(rangeExtent);
      return scaleYear;
    },
    convertAngleToPosition: function (d, axis) {
      const year = d.date.getFullYear();
      const rImg = this.$parent.r_img;
      const rAdd = 12;

     	// find angle
      const scale = this.getScale();
      const theta = scale(year);

      // stacks dots of events with same year
      let count = 1;
      let i = this.items.map(function(e) { return e.date; }).indexOf(d.date);
      let iYear;
      do{
        i--;
        if(i >= 0){
          iYear = this.items[i].date.getFullYear();
        }else{
          iYear = null;
        }
        if(iYear == year){ count++; }
      }
      while(iYear == year);

      // calculate r
      const r = rImg + (count * rAdd);
      
      // convert to position using theta and r
      let position;
      if(axis == 'x'){ position = r * Math.cos(theta); }
      else if(axis == 'y'){ position = r * Math.sin(theta); }

      return position;
   },
   appendTimeline: function () {
      const self = this;
      const rImg = self.$parent.r_img;
      const style = self.fixStyle;

      d3.select('#svg')
        .append('g')
        .attr('id','timeline')
        .attr('transform',function(){
          const yShift = rImg + parseInt(style.top, 10);
          return `translate(0,${yShift})`;
        });

      d3.select('#timeline')
        .append('circle')
        .attr('id','position-reference')
        .attr('cx',0)
        .attr('cy',0)
        .attr('r',rImg)
        .style('fill','none');
        // .style('stroke-width','1px')
        // .style('stroke','white');

      d3.select('#timeline')
        .selectAll('.dots')
        .data(this.items) // does this work?
        .enter()
        .append('circle')
        .attr('class','dots')
        .attr('id',function(d){
          const id = d.date.getFullYear() + '-' + d.date.getMonth() + '-' + d.date.getDate();
          return id;
        })
        .attr('cx',function(d){
          const position = self.convertAngleToPosition(d,'x'); // does this work?
          return position;
        })
        .attr('cy',function(d){
          const position = self.convertAngleToPosition(d,'y'); // does this work?
          return position;
        })
        .attr('r',2) // will change for active item
        .style('fill','white'); // will change for active items
   },
   test: function(){

   }
  },
  computed:{
    items: function(){
      var self = this;
      let dateArr = [];
      self.$parent.items.forEach(function(event){
          const value = new Date(event.date);
          dateArr.push({
                date: value,
                coord_lat: event.coord_lat,
                coord_lon: event.coord_lon,
                event: event.event,
                description: event.description,
                id: event.id,
                link: event.link,
                linkText: event.linkText,
                spot: event.spot
              
              });
        })
      dateArr = dateArr.sort(self.sortA);
      // console.log("soer?", dateArr)
      return dateArr
    },
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
      
    }},

  },
   mounted: function () {
      const self = this;
      
      self.appendTimeline();

      whenScroll('every 400px', function () {

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
	offset = offset * .1;
  // add css transform with the offset variable
  $('#leftgear').css({
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
