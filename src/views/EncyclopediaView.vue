<template>
  <div class="container" >
     

<!--
    instead of doing the following block using the vue item component,
    will use d3
    
 -->
  <div id="main-items" >
            <encyclopedia-item
            v-on:updatemstyle="metstyle()"
        v-for="item in encyclopedia"
        v-bind:encyclopedia="item"
        :key="item.id"
        
        > </encyclopedia-item>
  </div>

<full-page ref="fullpage" :options="options" id="fullpage">
  <div class="section" id="phantom-list">
  </div>
      <!-- <section v-for="item in encyclopedia" v-bind:id="item.spot_id" :style="phSectionStyles"></section> -->
      <link-element v-for="item in encyclopedia" :key="item.id" v-bind:id="item.spot_id" :style="phSectionStyles"></link-element>

<!-- </div> -->
<!-- <div class="section" id="phantom-list"></div> -->
<!-- <div class="section" id="phantom-list"></div> -->
</full-page>




  </div>
</template>

<script>

import EncyclopediaItem from '@/components/EncyclopediaItem.vue'
import LinkElement from '@/components/LinkElement.vue'

import * as $ from 'jquery'
import * as d3 from 'd3v4/build/d3.js'
import ScrollSnap from 'scroll-snap'

window['jQuery'] = window['$'] = $;

export default {
  name: 'encyclopedia',
  props:["timeline"],
  data(){
    // const self = this;
    
    return {
      mstyle: null,
      sectionheight: 3000,
      fullpaged: null
      
      
    }
  },
 
    
    
  methods: {
    afterLoad() {
          // console.log("Emitted 'after load' event.");
          let self = this;
    
    this.encyclopedia.forEach(function(d)
    {
      // console.log("yyhyihoiry")
      
      let section = document.createElement('div');
    section.className = 'section';
    section.id = d.spot_id;
    // section.innerHTML = '<h3></h3>';
  // console.log($(self.$el).children()[1])
    //adding section
    let elm = document.getElementById("phantom-list")
    // console.log("elm",elm)
    elm.appendChild(section);
      // self.options.anchors.push(d.spot_id)
      console.log(self.$refs.fullpage)
    // self.$refs.fullpage.build();
      })
    //  console.log(self.$refs.fullpage)
    // self.$refs.fullpage.build();
    

    //where --> var vm = new Vue({...}) if calling it from outside.
    // vm.$refs.fullpage.build();

    //or, when calling it from inside the Vue component methods:
    
    // console.log("home",self.encyclopedia)
    // let element = self.$el
    // console.log("elemnts", element);
    // let d3all = d3.select(element);
     
    
    
    
    // console.log(d3all)
    // d3all.style("opacity",.4)
    // let cancelScroll = this.$scrollTo(element, 4, options)
    // let d3el = d3.select("#"+self.slug_event)
    // console.log(d3el)
    // let formatedDate = self.formatDater(self.$props.encyclopedia.date)
    // console.log(formatedDate)
    // d3el.remove("text")
    // d3el.append("text").text("")
    // d3el.text(function(){
    //   return formatedDate;
    // })

    // let t = d3.transition()
    // .duration(1750)
    // .ease(d3.easeLinear);


    // let d3spotel = d3.select("#fix"+self.encyclopedia.id)
    // console.log(d3spotel)
    // d3spotel.style("opacity",.4)
    // d3spotel.transition(t);
    // t.select("#fix"+self.encyclopedia.id).style("opacity",1)

// to cancel scrolling you can call the returned function
    // cancelScroll()
    
        },
    metstyle: function(){
      //  console.log("mstyle in encyclo view but currently is just a place holder to see how this get s called becuase the child emits an event")
       
       
     }
   
  },
  components: {
    EncyclopediaItem,
    LinkElement
  },
  updated: function(){
    if (this.fullpaged === null){
      this.$refs.fullpage.build()
      this.fullpaged = 'set'
    }
    
  },
   mounted: function(){
     let self = this;
    //  let fullsection = document.createElement('div')
    //   fullsection.innerHTML = ''
    //   self.$el.appendChild(fullsection)
    // self.$refs.fullpage.build()
     this.$nextTick(function () {
      //  self.afterLoad()
      // self.$refs.fullpage.build()
       
       
      
     
})
    
  },
   
   computed: {
     options:  function(){
       let self = this;
       return {
        // menu: '.section',
        lazyLoading: false,
        lockAnchors: true,
        controlArrows: false,
          scrollBar: true,
          autoScrolling:true,
        anchors: self.anchors,
        onLeave: function(origin, destination, direction){
          // console.log(direction)
          if (direction == "up"){
            self.scrollDir = 1;
          } else {
            self.scrollDir = -1;
          }
          self.$router.push(destination.anchor);
          self.$parent.rotateTimeline(self.$route.params.id);
        },
	afterAnchor: function(origin, destination, direction){},
      }},
      anchors: function(){
        let self = this;
        let anchor = []
    self.$parent.items.forEach(function(d){
      anchor.push(d.spot_id)
    })
    return anchor
      },
      phSectionStyles: function(){
        // console.log("is phStyle",this.$parent)
        return {
        height: `${this.sectionheight}px`,
        // position: 'relative'  
      }
        
      },
      phStyles: function(){
        // console.log("is phStyle",this.$parent)
        return {
        height: `${this.$parent.items.length * this.sectionheight}px`,
        // position: 'relative'  
      }
        
      },
      mainItemsStyles: function(){
         //
        return {
          top: `${this.$parent.$parent.r_img}px`
        }

      },
       encyclopedia: function (){
            // console.log("this.$parent.items ",this.$parent.items, this.$parent)
            const this_item = this.$parent.items.filter((value, index, array) => {
              // console.log("this.$route.params.id; ",this.$route.params.id, value)
              return value.spot_id == this.$route.params.id;
            })
            this.$parent.items.forEach(function(each){
              each["style_param"] = this_item[0]["id"];
            })
            
            // let three_items= [];
             return this.$parent.items;
            
              
            // return three_items;
       },
        encyclopediaph: function (){
            
     return this.$parent.items;
     }




   },
  //  created(){
  //  }
}
</script>
