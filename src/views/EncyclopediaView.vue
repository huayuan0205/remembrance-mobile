<template>
  <div class="ui vertical segment snap-item">
        <div class="encyclopedia-item">
            <encyclopedia-item 
        v-for="item in encyclopedia" 
        v-bind:encyclopedia="item"
        :key="item.id"
        > </encyclopedia-item>
        </div>
    </div>
</template>

<script>

// @ is an alias to /src
import EncyclopediaItem from '@/components/EncyclopediaItem.vue'

export default {
  name: 'encyclopedia',
  props:["timeline"],
  components: {
    EncyclopediaItem
  },
  data: function(){
      console.log(this.$parent.timeline)
      return {encyclopedia: this.$parent.timeline}
  },
  methods:{
     getRouteParam: function() {
         console.log("called a function ");
         console.log(this.$route.params);
         }
     },
     beforeMount(){
        this.getRouteParam();
     },
     mounted(){

         console.log("aftermount");
     },
     created(){

         console.log("created");
     }
}
</script>
