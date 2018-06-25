<template>
  <div id="app">

    <!-- <router-view></router-view> -->


    
    <!-- <div class="splash-img">
      <div class="splash-txt">
        <h3>cambridge<br>acclimation<br>society</h3>
      </div>
    </div>

      
    <div class="intro">
      <p>
 
      </p>
      <p>
        Established in 2120, the society serves to document, and keep in memory, significant climate events of our local past, that we may not repeat our mistakes and act more mindfully of our climatic impact.
      </p>
    </div>
      <encyclopedia-item 
        v-for="item in timeline" 
        v-bind:encyclopedia="item"
        v-bind:key="item.date"
        > </encyclopedia-item> -->
        
        <router-view/>
  </div>
  
</template>

<script>

// import HomeView from '@/components/HomeView.vue'




export default {
  name: 'app',
  // components: {
  //   HomeView
  // },
  // // data: function(){return data},
  //  computed: {
  //   itemname () {
  //     // We will see what `params` is shortly
  //     // console.log(this)
  //     return this.$route.params.name
  //   }
  // }
  

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
