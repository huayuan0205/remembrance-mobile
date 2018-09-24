<template>
  <div id="home-view">
    <div>
      <img src="../assets/alluminium_halfres.png" class="backgear-img" alt id="backgear"  :style="fixStyleBack">
      <img src="../assets/alluminium_blurred_10_halfres.png" class="splash-img" alt id="leftgear" :style="fixStyle">
      <svg id="svg">
        <!-- <circle class="backgear-cr" alt id="leftgear" cx="0" cy="50vh" r="50vh" /> -->
      </svg>
      <encyclopedia-view v-on:updatescrolls="afterLoad()"></encyclopedia-view>
      <div id="icon-div">
        <sui-icon class="info circle icon" size="large" name="info" @click.native="toggleOpen" />
      </div>
    </div>
    
    <sui-modal size='fullscreen' animation="fade"  v-model="open" v-on:clickAwayModal="toggleClose">
      <!-- <sui-modal-header>Select a Photo -->
      <sui-modal-header>
      <sui-modal-actions>
        <div id="close-div">
        <sui-icon class="window close icon" size="small" name="close" @click.native="toggleClose" />
        </div>
        <!-- <sui-button floated="right" negative @click.native="toggle">
          X
        </sui-button>  -->
        
      </sui-modal-actions>
      </sui-modal-header>
      <sui-modal-content scrolling>

        <sui-modal-description>
        <about-modal>
          
        </about-modal>
        </sui-modal-description>
        </sui-modal-content>
    </sui-modal>
    
  </div>

</template>
<script>

import EncyclopediaView from '@/views/EncyclopediaView.vue'
import AboutModal from '@/components/AboutModal.vue'

import * as d3 from 'd3v4/build/d3.js'
import * as $ from 'jquery'


export default {
  name: 'HomeView',
  components: {
    EncyclopediaView,
    AboutModal
  },
   data () {
    return {
      // we have a local value that represents the user's selected region
      currentSpot: null,
      open: false
    }},
  methods: {
    toggleOpen() {
      console.log(this.$children[0].$refs.fullpage)
      // console.log(this,$('.ui.fullscreen.modal'))
      this.$children[0].$refs.fullpage.api.setAllowScrolling(false);
      // this.$children[0].$refs.fullpage.api.setKeyboardScrolling(false);
      this.open = !this.open;
      // $('.ui.fullscreen.modal').modal('refresh');
    },
     toggleClose() {
      console.log(this.$children[0].$refs.fullpage)
      this.$children[0].$refs.fullpage.api.setAllowScrolling(true);
      this.$children[0].$refs.fullpage.api.setKeyboardScrolling(true);
      this.open = !this.open;
    },
    afterLoad: function(){
      // console.log("this.$children",this.$children)
      // this.appendTimeline()
      this.$children[0].afterLoad()
    },
    sortA: function(a,b){
        return a.date - b.date; // doesn't work
    },
    getLinearScale: function(){
      const scaleLinear = d3.scaleLinear();
      const rangeExtent = [Math.PI/2,-Math.PI/2]; // semi-circle in radians, top to bottom
      const dateArr = this.items;
      const domainExtent = [dateArr[0].id ,dateArr[dateArr.length-1].id];
      scaleLinear
        .domain(domainExtent)
        .range(rangeExtent);
      return scaleLinear;
    },
    getScale: function () {
      const scaleYear = d3.scaleTime();
      const rangeExtent = [3*Math.PI/2, 5*Math.PI/2]; // semi-circle in radians, top to bottom
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
   createUniqueYearArray: function(array) {
     let dates = [];
     array.forEach(function(event){
       const year = event.date.getFullYear();
       const index = dates.indexOf(year);
       if(index == -1){
         dates.push(year);
       }
     })
     return dates;
   },
   appendTimeline: function () {
      const self = this;
      const rImg = self.$parent.r_img;
      const style = self.fixStyle;

      // offset text by background circle offset
      d3.selectAll('.item-head')
        .style('margin-top',((parseInt(style.top, 10)-13)+'px'));

      // append timeline once
      const selection = d3.select('#svg').select('#timeline');
      if(selection.empty() == true){
        d3.select('#svg')
          .append('g')
          .attr('id','timeline')
          .attr('transform',function(){
            const yShift = rImg + parseInt(style.top, 10);
            return `translate(0,${yShift})`;
          });

        // append reference elements for alignment
        // d3.select('#timeline')
        //   .append('circle')
        //   .attr('id','position-reference')
        //   .attr('cx',0)
        //   .attr('cy',0)
        //   .attr('r',rImg)
        //   .style('fill','none')
        //   .style('stroke-width','1px')
        //   .style('stroke','white');

        // d3.select('#timeline')
        //   .append('line')
        //   .attr('y1',0)
        //   .attr('y2',0)
        //   .attr('x1',-rImg)
        //   .attr('x2',rImg)
        //   .style('stroke-width','1px')
        //   .style('stroke','white');

        // append timeline dots
        d3.select('#timeline')
          .selectAll('.dots')
          .data(self.items)
          .enter()
          .append('circle')
          .attr('class','dots')
          .attr('id',function(d){
            const id = 'd' + d.date.getFullYear() + '-' + d.date.getMonth() + '-' + d.date.getDate();
            return id;
          })
          .attr('cx',function(d){
            const position = self.convertAngleToPosition(d,'x');
            return position;
          })
          .attr('cy',function(d){
            const position = self.convertAngleToPosition(d,'y');
            return position;
          })
          .attr('r',2) // will change for active item
          .style('fill','white'); // will change for active items
        }

        // append year labels
        d3.select('#timeline')
          .selectAll('.label')
          .data(self.createUniqueYearArray(self.items))
          .enter()
          .append('g')
          .attr('class','label')
          .attr('id',d => 'label-'+d)
          .style('opacity',0.5)
          .append('text')
          .attr('class','label-text')
          .attr('transform',function(d){
            const scale = self.getScale();
            const radian = scale(d);
            const degree = radian * 180 / Math.PI;
            const x = rImg * Math.cos(radian);
            const y = rImg * Math.sin(radian);
            // if(d.angle > Math.PI/2 && d.angle < (3*Math.PI)/2){
            //   return `translate(${x},${y}) rotate(180) rotate(${degree})`;
            // }else{
              return `translate(${x},${y}) rotate(${degree})`;
            // }
          })
          .attr('dy', '.35em')
          .attr('dx','-5px')
          .style('text-anchor','end')
          .text(d => d);
   },
   rotateTimeline: function(id){
    let index, event;
    if(id !== null){
      // find event in array that matches id
      const dateArr = this.items;
      index = dateArr.map(function(d) { return d.spot_id; }).indexOf(id);
      event = dateArr[index];
    }
    // const date = 'd' + event.date.getFullYear() + '-' + event.date.getMonth() + '-' + event.date.getDate();
    const year = event.date.getFullYear();
    const linearid = event.id;
    // const cx = d3.select(`#${date}`).attr('cx');
    // const cy = d3.select(`#${date}`).attr('cy');
    
    const scale = this.getScale();
    const theta = scale(year);
    const degree = theta * 180 / Math.PI;

    const linscale = this.getLinearScale();
    const thetaLinear = linscale(linearid);
    const degreeLinear = thetaLinear * 180 / Math.PI;
    // console.log(`year: 2045, radian: ${scale(2045)}`);
    // console.log(`year: ${year}, radian: ${theta}, degree: ${degree}, degreeLinear: ${degreeLinear}`);
    const rImg = this.$parent.r_img;
    const style = this.fixStyle;
    d3.select('#timeline')
      .transition()
      .duration(1000)
      .attr('transform',function(){
        const yShift = rImg + parseInt(style.top, 10);
        return `translate(0,${yShift}) rotate(${-degree})`;
        });

    $('#leftgear').css({
      transition: 'all 1s',
    '-moz-transform': 'rotate(' + degreeLinear + 'deg)',
    '-webkit-transform': 'rotate(' + degreeLinear + 'deg)',
    '-o-transform': 'rotate(' + degreeLinear + 'deg)',
    '-ms-transform': 'rotate(' + degreeLinear + 'deg)',
    'transform': 'rotate(' + degreeLinear + 'deg)',
    });

    d3.selectAll('.dots')
      .transition()
      .attr('r',2)
      .style('fill','white')
      .transition()
      .delay(1000)
      .attr('r',function(d){
        if(d.date.getTime() == event.date.getTime()){
          return 4;
        }else{ return 2; }
      })
      .style('fill',function(d){
        if(d.date.getTime() == event.date.getTime()){
          return 'black';
        }else{ return 'white'; }
      });
    
    d3.selectAll('.label')
      .transition()
      .style('opacity',0.5)
      .transition()
      .delay(1000)
      .style('opacity',function(d){
        if(d == event.date.getFullYear()){
          return 1;
        }else{
          return 0.5;
        }
      });

    d3.selectAll('.label-text')
      .transition()
      .style('font-size','20px')
      .style('opacity',0.5)
      .style('font-weight','normal')
      .transition()
      .delay(1000)
      .style('font-weight',function(d){
        if(d == event.date.getFullYear()){
          return 'bold';
        }else{
          return 'normal';
        }
      })
      .style('opacity','0.5',function(d){
        if(d == event.date.getFullYear()){
          return 1;
        }else{
          return 0.5;
        }
      })
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
                spot: event.spot,
                spot_id: event.spot_id
              
              });
        })
      dateArr = dateArr.sort(self.sortA);
      for (var j=0;j < dateArr.length; j=j+1){
        dateArr[j].id = j;
      }
      console.log("soer?", dateArr)
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
     let self = this;

     this.$nextTick(function () {
   
  })


      
  }

}

</script>
<style>
.ui.modal {
    
    position: absolute;
    display: block;
    overflow: auto;
    top: 1em;
    bottom: 1em;
    right: 1em;
    left: 1em;
    width: 100%;
    background: black;

  }

  

.ui.modal>.content {
    display: block;
    padding: 1rem!important;
    background: transparent;
}
.ui.modal>.header:not(.ui) {
    background: transparent;
}
#app p {
  color: white !important;
  -webkit-filter: blur(0px); /* Safari 6.0 - 9.0 */
    filter: blur(0px) !important;
}
</style>

