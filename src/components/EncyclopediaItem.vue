<template>
  <div class="ui vertical segment snap-item">
    <div class="encyclopedia-item">
      <h3 class="text-date">{{ formatDate }}</h3>
      <p class="text-desc">{{ encyclopedia.location }}. <span v-html="descWithLink"></span></p>

    </div>

  </div>

</template>

<script>
import LinkElement from '@/components/LinkElement.vue'
import moment from 'moment'

export default {
  name: 'EncyclopediaItem',
  props: ["encyclopedia","id"],
  // components: {
  //   LinkElement
  // },
  computed: {
    descWithLink: function() {
      if (this.$props.encyclopedia.description.indexOf(this.$props.encyclopedia.link) > 0){
        let  index = this.$props.encyclopedia.description.indexOf(this.$props.encyclopedia.link);
        const spanStart = '<a href="'+this.$props.encyclopedia.linkText+'"> ';
        const spanEnd = '</a>';
        let newDesc = [this.$props.encyclopedia.description.slice(0, index), spanStart, this.$props.encyclopedia.description.slice(index, index+this.$props.encyclopedia.link.length), spanEnd, this.$props.encyclopedia.description.slice(index+this.$props.encyclopedia.link.length)].join('');
        return newDesc
      } else {
        return this.$props.encyclopedia.description
      }
    },
    formatDate: function(){
      if(this.$props.encyclopedia.date.length == 4){
        return moment(this.$props.encyclopedia.date, 'YYYY').format('YYYY');
      } else {
        return moment(this.$props.encyclopedia.date, 'MM/DD/YYYY').format('YYYY MMM DD');
      }
    }
  }

}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
} */
/* ul {
  list-style-type: none;
  padding: 0;
} */
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}

.snap-item{
  -webkit-scroll-snap-coordinate: 0vw -10vh;
  -ms-scroll-snap-coordinate: 0vw -10vh;
  scroll-snap-coordinate: 0vw -10vh;
}

.encyclopedia-item{
  padding: 20px 20px 20px 60px;
}

.text-date{
  font-size: 24px;
}

.text-desc{

}

/* .text-date{
  font-family: 'Adobe Caslon Pro', serif;
  font-size: 18px;
  margin-top: 0px;
  margin-bottom: 2px;
}

p{
  font-family: sans-serif;
  font-size: 18px;
  line-height: 1.2;
  margin-top: 2px;
  margin-bottom: 0px;
} */

/* .text-loc{
  font-weight: bolder;
} */
</style>
