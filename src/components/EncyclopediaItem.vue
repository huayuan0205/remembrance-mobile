<template>


        <div class="encyclopedia-item">
            <h3 class="text-date">{{ encyclopedia.date }}</h3>
              <p class="text-desc">{{ encyclopedia.location }}. {{ encyclopedia.description }}</p>
          </div>

</template>

<script>
export default {
  name: 'EncyclopediaItem',
  props: ["encyclopedia"]
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
/* .encyclopedia-item{
  padding: 20px 10px;
} */

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
