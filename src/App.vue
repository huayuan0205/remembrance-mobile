<template>
  <div id="app">
    <div class="splash-img">
      <div class="splash-txt">
        <h3>cambridge<br>acclimation<br>society</h3>
      </div>
    </div>
    <div class="intro">
      <p>
        Established in 2120, the society serves to document, and keep in memory, significant climate events of our local past, that we may not repeat our mistakes and act more mindfully of our climatic impact.
      </p>
    </div>
    <!-- <div class="encyclopedia"> -->
      <encyclopedia-item v-for="item in timeline" v-bind:encyclopedia="item"> </encyclopedia-item>
    <!-- </div> -->
  </div>
</template>

<script>

import EncyclopediaItem from './components/EncyclopediaItem.vue'

let data =  {
    timeline: [
      { date: '10 mar 2040', location: 'New Tobin School', description: 'Floodwater cistern built beneath the New Tobin School to keep neighborhood dry during high precipitation storms. Date of first use.'},
      { date: '22 apr 2036', location: 'Rogers Street Park', description: 'Trees planted 20 years earlier have now matured to provide cooling canopy of shade on this hot spring day.'},
      { date: '1 jul 2035', location: '119 Windsor Street', description: 'Site of The Port Resilience Hub, which first started to train neighborhood residents to prepare their homes for the coming hurricane season.'},
      { date: '1 dec 2025', location: '60 Broadway', description: 'Cambridge Research Center (first to develop a solar energy system that is 50% efficient) established at 60 Broadway to develop solutions to climate change effects.'},
      { date: '12 apr 2020', location: 'North Point', description: 'Cambridge Crossing Park built to provide neighborhood cooling and flood water storage.'},
      { date: '2018', location: 'Ground Round Rotary', description: 'Construction completed of berm at Fresh Pond built to prevent flood waters from entering adjacent neighborhood.'}
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
  font-family: 'Caslon';
  src: url('assets/fonts/caslon.ttf') format('truetype');
  font-style: normal;
  font-weight: 700;
} */

@font-face{
  font-family: 'PlayfairSC';
  src: url('assets/fonts/PlayfairDisplaySC-Regular.ttf') format('truetype');
}

@font-face{
  font-family: 'Trade';
  src: url('assets/fonts/trade.ttf') format('truetype');
  font-style: normal;
  font-weight: 700;
}

#app {
  font-family: 'PlayfairSC', 'Trade', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height: 100%;
  width: 100vw;

  scroll-snap-destination: 0vw 0vh;
  -webkit-scroll-snap-type: proximity;
  -ms-scroll-snap-type: proximity;
  scroll-snap-type: proximity;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: auto;

}

#app h3{
  font-family: 'PlayfairSC';
}

#app p{
  font-family: 'Trade';
  font-size: 20px;
}

.splash-img{
  background-image: url("./assets/copper2.jpeg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.splash-txt{
  position: absolute;
  top: 50%;
  left: 20px;
  line-height: 1.2;
  letter-spacing: 1px;
  color: white;
}

.splash-txt h3{
  font-size: 34px;
}

.intro{
  padding: 40px 20px 80px 20px;
}

.encyclopedia{
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-snap-destination: 0vw 0vh;
  -webkit-scroll-snap-type: mandatory;
  -ms-scroll-snap-type: mandatory;
  scroll-snap-type: mandatory;
	scroll-behavior: smooth;
}

</style>
