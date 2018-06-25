<template>
  <div class="ui vertical segment snap-item">
    <div class="encyclopedia-item">
      <h3 class="text-date">{{ encyclopedia.date }}</h3>
      <p class="text-desc">{{ encyclopedia.location }}. {{ encyclopedia.description }}</p>
    </div>

  </div>

</template>

<script>

export default {
  name: 'EncyclopediaItem',
  props: ["encyclopedia","id"]
}

// insert hyperlinks in description
// function addLinks(){
//   if(encyclopedia.linkText !== null){
//     const index = encyclopedia.description.indexOf(encyclopedia.linkText);
//     const spanStart = '<a href='+encyclopedia.link+'>';
//     const spanEnd = '</a>';
//     const newDesc = [encyclopedia.description.slice(0, index), spanStart, encyclopedia.description.slice(index, index+encyclopedia.linkText.length), spanEnd, encyclopedia.description.slice(index+encyclopedia.linkText.length)].join('');
//     return newDesc;
//   }
// }



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
  padding: 40px 20px 40px 20px;
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
