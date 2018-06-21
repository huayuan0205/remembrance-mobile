<template>
  <div id="app">

<div class="splash-img">
  <div class="splash-txt">
    <h3>cambridge<br>acclimation<br>society</h3>
  </div>
</div>
  <sui-grid :columns="3">
    <sui-grid-row stretched>
       <sui-grid-column>
       </sui-grid-column>
      <sui-grid-column>
        <sui-segment>
          <encyclopedia-item v-for="item in timeline" v-bind:encyclopedia="item"> </encyclopedia-item>
          </sui-segment>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>

  </div>
</template>

<script>

import EncyclopediaItem from './components/EncyclopediaItem.vue'

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

body, html{
  height: 100%;
}

/* @font-face{
  font-family: 'Adobe Caslon SC';
  src: url('./assets/fonts/Adobe_Caslon_Regular_Small_Caps__Oldstyle_Figures.ttf') format('truetype');
}

@font-face{
  font-family: 'Trade Gothic Condensed';
  src: url('./assets/fonts/Trade Gothic LT Condensed No. 18.ttf') format('truetype');
} */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%;
}

.splash-img{
  background-image: url("./assets/copper2.jpeg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin: -8px -8px;
}

.splash-txt{
  position: absolute;
  top: 50%;
  left: 20px;
  font-size: 34px;
  line-height: 1.2;
  letter-spacing: 1px;
  color: white;
}

.encyclopedia{
  margin-top: 40px;
}

.text-date{

}

.text-desc{

}
</style>
