<template>
  <div id="app">
    <router-view/>
  </div>

</template>

<script>


export default {
  name: 'app'
}

</script>

<style>

body, html{
  height: 100%;
}

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
  background-image: url("./assets/alluminium.jpeg");
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
  color: white;
}

.splash-txt h3{
  font-size: 40px;
  line-height: 1;
  letter-spacing: 1.6px;
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
