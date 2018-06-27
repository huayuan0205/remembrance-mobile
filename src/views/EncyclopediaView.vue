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
  methods:{
     someFunction: function() {
         }
     },
     beforeMount(){
        // someFunction()


     },
     computed: {
         encyclopedia: function (){
               return this.$parent.items;
         },
         descWithLink: function() {
           let newDesc;
           // if(this.linkText !== null){
           //   const index = this.description.indexOf(this.linkText);
           //   const spanStart = '<a href='+this.link+'>';
           //   const spanEnd = '</a>';
           //   newDesc = [this.description.slice(0, index), spanStart, this.description.slice(index, index+this.linkText.length), spanEnd, this.description.slice(index+this.linkText.length)].join('');
           // }else{
           //   newDesc = this.description;
           // }
           newDesc = this.description;
           // console.log(newDesc);
           return newDesc;
         },
         formatDate: function(){
           // take date from data and set a format
           // const date = new Date(this.date)
           // date.getFullYear(), date.getMonth(), date.getDate()
         }


     },
     created(){


     }
}
</script>
