<template>
 <section class="section" id="link-element"></section>
</template>


<script>
import ScrollSnap from 'scroll-snap'

export default {
  name: "LinkElement",
  // props: ["linkText","link"],
  data(){
    return {
      
    }
  },
  methods: {
    // scrollCallback: function(){
    //   console.log('called when snap animation ends')
    // },
  },
  computed: {
      // snapObject: function(){

        
      // }
  },
  
  mounted: function(){
    // console.log(this.$el, this.snapConfig)
        // const snapObject = new ScrollSnap(this.$el, this.snapConfig);
        // snapObject.bind(this.scrollCallback);
    // const self = this;
    // this.$parent.encyclopedia.forEach(function(d){
    //   const element = document.getElementById(d.spot_id)
    //   console.log("set up here", d,element, self.$el)
    //   const snapObject = new ScrollSnap(element, self.$parent.snapConfig)
       
    //   snapObject.bind(self.$parent.scrollCallback)
    //   console.log(snapObject)

    // })
  }}
</script>
<style scoped>
.section{
    position: relative;
    text-align: center;
}
</style>
