<template>
  <div id="home-view">
    <div class="splash-img">
      <div class="splash-txt">
        <h3>cambridge<br>acclimation<br>society</h3>
      </div>
    </div>
    <!-- <h1>Scroll Behavior</h1>
      <ul>
        <li><router-link to="/home">/</router-link></li>
      </ul> -->
      
    <div class="intro">
      <p>
 
      </p>
      <p>
        Established in 2120, the society serves to document, and keep in memory, significant climate events of our local past, that we may not repeat our mistakes and act more mindfully of our climatic impact.
      </p>
    </div>
    <!-- <div class="encyclopedia"> -->
      <encyclopedia-view></encyclopedia-view>
    <!-- </div> -->
    <!-- <router-view></router-view> -->
  </div>
  
</template>
<script>


let data =  {
    timeline: [
      {id:1, date: '10 mar 2040', location: 'New Tobin School', description: 'ZFloodwater cistern built beneath the New Tobin School to keep neighborhood dry during high precipitation storms. Date of first use. ZFloodwater cistern built beneath the New Tobin School to keep neighborhood dry during high precipitation storms. Date of first useZFloodwater cistern built beneath the New Tobin School to keep neighborhood dry during high precipitation storms. Date of first use. Floodwater cistern built beneath the New Tobin School to keep neighborhood dry during high precipitation storms. Date of first use/ Floodwater cistern built beneath the New Tobin School to keep neighborhood dry during high precipitation storms. Date of first use'},
      {id: 2, date: '14 mar 2040', location: 'New Tobin School', description: 'ZFloodwater cistern built beneath the New Tobin School to keep neighborhood dry during high precipitation storms. Date of first use. Floodwater cistern built beneath the New Tobin School to keep neighborhood dry during high precipitation storms. Date of first use/ Floodwater cistern built beneath the New Tobin School to keep neighborhood dry during high precipitation storms. Date of first use/. '},
      { id: 3, date: '22 apr 2036', location: 'Rogers Street Park', description: 'Trees planted 20 years earlier have now matured to provide cooling canopy of shade on this hot spring day.'},
      { id: 4, date: '1 jul 2035', location: '119 Windsor Street', description: 'Site of The Port Resilience Hub, which first started to train neighborhood residents to prepare their homes for the coming hurricane season.'},
      { id:5, date: '1 dec 2025', location: '60 Broadway', description: 'Cambridge Research Center (first to develop a solar energy system that is 50% efficient) established at 60 Broadway to develop solutions to climate change effects.'},
      { id:6, date: '12 apr 2020', location: 'North Point', description: 'Cambridge Crossing Park built to provide neighborhood cooling and flood water storage.'},
      {id:7, date: '2018', location: 'Ground Round Rotary', description: 'Construction completed of berm at Fresh Pond built to prevent flood waters from entering adjacent neighborhood.'}
    ]
  };
import EncyclopediaView from '@/views/EncyclopediaView.vue'

export default {
  name: 'HomeView',
  props: ["encyclopedia"],
  components: {
    EncyclopediaView
  },
  data: function(){
    return data}
}
</script>
