<template>
 <section class="section" id="link-element">

        <p class="text-desc">
    <span v-html="extra_text">

   
   </span>
   </p>
        
   
 </section>
</template>


<script>
import ScrollSnap from 'scroll-snap'

export default {
  name: "LinkElement",
props: ["extra_text","showModal"],
  data(){
    return {
      
    }
  },
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
  },
  computed: {

        
  },
  
  mounted: function(){
   
  }}
</script>
<style scoped>
.section{
    position: relative;
    text-align: left;
}
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

#main-items {
  z-index: 44444;
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
