<template>
  <div class="ui vertical segment snap-item">
    <div v-on:click="onClick" class="encyclopedia-item" >
      <h3 class="text-date" v-bind:id="slug_event"></h3>
      <p class="text-desc" v-bind:id="fixid">{{ encyclopedia.spot }}. <span v-html="descWithLink"></span></p>
      <sui-dimmer v-if="encyclopedia.event==this.$route.params.id" :active="false" :inverted="true"/>
      <sui-dimmer v-else active :inverted="true"/>

    </div>

  </div>

</template>

<script>
import LinkElement from '@/components/LinkElement.vue'
import moment from 'moment'
import * as $ from 'jquery'
import * as d3 from 'd3v4/build/d3.js'
window['jQuery'] = window['$'] = $;
let options = {
    container: '#app',
    easing: 'ease',
    offset: 0,
    cancelable: true,
    onStart: function(element) {
      // scrolling started
    },
    onDone: function(element) {
      // scrolling is done
    },
    onCancel: function() {
      // scrolling has been interrupted
    },
    x: false,
    y: true
}

export default {
  name: 'EncyclopediaItem',
  props: ["encyclopedia"],
  // components: {
  //   LinkElement
  // },
   methods: {
     sanitizeTitle: function(title) {
      var slug = "";
      // Change to lower case
      var titleLower = title.toLowerCase();
      // Letter "e"
      slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
      // Letter "a"
      slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
      // Letter "o"
      slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
      // Letter "u"
      slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
      // Letter "d"
      slug = slug.replace(/đ/gi, 'd');
      // Trim the last whitespace
      slug = slug.replace(/\s*$/g, '');
      // Change whitespace to "-"
      slug = slug.replace(/\s+/g, '-');
      
      return slug;
    },
    onClick: function(event){
      // console.log(this.encyclopedia.title)
      this.$router.push(this.encyclopedia.event)
    },
    formatDater: function(date){
      if(date.length == 4){
        return moment(date, 'YYYY').format('YYYY');
      } else {
        return moment(date, 'MM/DD/YYYY').format('YYYY MMM DD');
      }
    }
  },
  computed: {
    slug_event: function() {
      var slug = this.sanitizeTitle(this.$props.encyclopedia.event);
      return slug;
    },
    slug_spot: function() {
      var slug = this.sanitizeTitle(this.$props.encyclopedia.spot);
      return slug;
    },
    id: function (){
      return this.encyclopedia.id
    },

    fixid: function (){
      return "fix"+this.encyclopedia.id
    },
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
  },
  mounted: function(){
    const self = this;
    console.log(self)
    let element = self.$el
    let cancelScroll = this.$scrollTo(element, 4, options)
    let d3el = d3.select("#"+self.slug_event)
    console.log(d3el)
    let formatedDate = self.formatDater(self.$props.encyclopedia.date)
    console.log(formatedDate)
    // d3el.remove("text")
    d3el.append("text").text("")
    d3el.text(function(){
      return formatedDate;
    })


    let t = d3.transition()
    .duration(1750)
    .ease(d3.easeLinear);


    let d3spotel = d3.select("#fix"+self.encyclopedia.id)
    console.log(d3spotel)
    d3spotel.style("opacity",.4)
    // d3spotel.transition(t);
    t.select("#fix"+self.encyclopedia.id).style("opacity",1)
// to cancel scrolling you can call the returned function
    // cancelScroll()
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
