<template>
  <!-- <div id="link-element"></div> -->
  <div class="container" >

    
    <div id="main-items" >
          <encyclopedia-item
          v-on:showextra="showExtra()"
          v-on:updatemstyle="metstyle()"
          v-for="item in encyclopedia"
          v-bind:encyclopedia="item"
          :key="item.id"
          
          > </encyclopedia-item>
    </div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" id="phantom-list">
      </div>
          <link-element v-for="item in encyclopedia" :key="item.id" v-bind:id="item.id" :style="phSectionStyles"></link-element>
    </full-page>

  </div>
</template>

<script>

import EncyclopediaItem from '@/components/EncyclopediaItem.vue'
import LinkElement from '@/components/LinkElement.vue'

import * as $ from 'jquery'
import * as d3 from 'd3v4/build/d3.js'

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
    showExtra(event) {
      this.$emit('showextra', event)    
    },
    afterLoad() {
          let self = this;

    
    this.encyclopedia.forEach(function(d)
    {
      
      let section = document.createElement('div');
    section.className = 'section';
    section.id = d.spot_id;
    let elm = document.getElementById("phantom-list")
    elm.appendChild(section);
      // console.log(self.$refs.fullpage)
      })
   
    
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
   

    
  },
   
   computed: {
     options:  function(){
       let self = this;
       let scrollOptions = {click: false,  wheelStep: 20};
       return {
         licenseKey:'BE832C25-5A2F42F4-BB9260BD-0B59B2E9',
        lazyLoading: true,
        lockAnchors: true,
        controlArrows: false,
          scrollBar: false,
          autoScrolling:true,
          // touchSensitivity:1,
          scrollOverflow: true,
          scrollOverflowOptions: scrollOptions,
        anchors: self.anchors,
        onLeave: function(origin, destination, direction){
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
            const this_item = this.$parent.items.filter((value, index, array) => {
              return value.spot_id == this.$route.params.id;
            })
            this.$parent.items.forEach(function(each){
              each["style_param"] = this_item[0]["id"];
            })
            
             return this.$parent.items;
            
              
       },
       thisEncyclopedia: function (){
            const this_item = this.$parent.items.filter((value, index, array) => {
              return value.spot_id == this.$route.params.id;
            })
           return this_item;
            
              
       },
        encyclopediaph: function (){
            
     return this.$parent.items;
     }




   },
  
}
</script>
