<template>
  <div id="app">
      <encyclopedia-item v-for="item in timeline" v-bind:encyclopedia="item"> </encyclopedia-item>
  </div>
</template>

<script>

import EncyclopediaItem from './components/EncyclopediaItem.vue'



print("test dev branch")



let data =  {
    timeline: [
      { date: 'April 22, 2036', location: 'Rogers Street Park', description: 'Trees planted 20 years earlier have now matured to provide cooling canopy of shade on this hot spring day.'},
      { date: 'July 1, 2035', location: '119 Windsor Street', description: 'Site of The Port Resilience Hub, which first started to train neighborhood residents to prepare their homes for the coming hurricane season.'},
      { date: 'April 12, 2020', location: 'North Point', description: 'Cambridge Crossing Park built to provide neighborhood cooling and flood water storage.'}
    ]
  };



export default {
  name: 'app',
  components: {
    EncyclopediaItem
  },
  data: function(){return data}

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
.splash{
  padding: 20px 10px;
}

.splash h3{
  font-size: 34px;
  line-height: 1.2;
  letter-spacing: 1px;
  font-family: 'Adobe Caslon Pro', serif;
  margin-top: 100%;
  margin-bottom: 50%;
}
</style>
