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
 
   mounted: function () {
    //  console.log(this.)
    //  console.log( $('.encyclopedia-item'));
    //    $('.encyclopedia-item')
    //   .dimmer('toggle')
    // ;

   },
   beforeMount(){
      // someFunction()


   },
   computed: {
       encyclopedia: function (){
             return this.$parent.items;
       }

   },
   created(){


   }
}
</script>
