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
     

   },
   beforeMount(){
      // someFunction()
     


   },
   computed: {
       encyclopedia: function (){
            
      const this_item = this.$parent.items.filter((value, index, array) => {
              return value.event == this.$route.params.id;
            })
            
            const three_items= this.$parent.items.filter((value, index, array) => {
              return (value.id == +this_item[0].id || value.id  == (+this_item[0].id - 1) || value.id == (+this_item[0].id + 1));
            })
            //  return this.$parent.items;
            return three_items;
       }

   },
   created(){


   }
}
</script>
