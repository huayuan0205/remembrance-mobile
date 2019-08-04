<template>
    <div id="about-modal">
      <img src="../assets/alluminium_halfres.png" class="modal-img" alt id="backgear" >
        <div class="ui very padded compact section grid">
            <div class="row">
                <div class="two wide column">
        
                </div>
                <div class="twelve wide column">
                  <h2 v-if="sd ==='cambridge'" class="text-head">{{aboutTitle}}</h2>
                  <h2 v-else-if="sd ==='seacoast'" class="text-head">{{aboutTitleSeacoast}}</h2>
                  <h2 v-else-if="sd ==='essex'" class="text-head">{{aboutTitleEssex}}</h2>
                    <p v-if="sd === 'cambridge'">{{aboutP1}}
                    <router-link tag="a" :to="{ name: 'climatechangecambridge'}">
                      <a>plans to mitigate and adapt to the effects of climate change.</a>
                    </router-link>
                    </p>
                    <p v-else-if="sd === 'seacoast'">{{aboutP1Seacoast}}
                    <router-link tag="a" :to="{ name: 'durhamma'}">
                      <a>plans to mitigate and adapt to the effects of climate change.</a>
                    </router-link>
                    </p>
                    <p v-else-if="sd === 'essex'">{{aboutP1Essex}}
                    <router-link tag="a" :to="{ name: 'essexma'}">
                      <a>plans to mitigate and adapt to the effects of climate change.</a>
                    </router-link>
                    </p>
                    <p v-if="sd === 'cambridge'">{{aboutP2}}</p>
                    <p v-else-if="sd === 'seacoast'">{{aboutP2Seacoast}}</p>
                    <p v-else-if="sd === 'essex'">{{aboutP2Essex}}</p>
                <br>
                <br>
                <br>
                <hr>
                <p v-if="sd === 'cambridge'">{{creds}}</p>
                    <p v-else-if="sd === 'essex'">{{credsEssex}}</p>
                    <p v-else-if="sd === 'seacoast'">{{credsSeacoast}}</p>
                </div>
                 <div class="two wide column">
        
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AboutModal",
    data(){
        return {
          aboutP1Seacoast:"The Paris Climate Accord of 2015 was a remarkable achievement but it made clear the limit of greenhouse gas reduction to which nations were committed. The withdrawal of the United States further indicated that there would be limits to commitment itself. In contrast, however, there was from the beginning, robust attention to climate change at the local level. Even before Paris, the Town of Durham had begun developing plans to mitigate and adapt to the effects of climate change.",
          aboutP2Seacoast:"It had become clear that if nations simply achieved the Paris goals this risked being too little too late. With no expectation of further national intervention, and understanding that all climate change effects would be local, the town projected the effects into the future and planned projects to deal with them. Because public demand for energy and other carbon-producing processes ultimately drove GHG emissions, the town hoped to engage the public in a bottom-up action to reduce demand more quickly. Significantly reducing emissions and the effects of climate change would depend on the participation of all residents. The Seacoast Remembrance Project traces significant milestones in climate change and the fight against its effects on the town.",
          credsSeacoast:"The Seacoast Remembrance Project is a public art installation that connects viewers to the challenges communities face from climate change and the ongoing local efforts to address them. Drawing from climate science projections, the project employs the concept of time travel to bring the enormous scale of climate change down to the intimate scale of our lives.",

          // sd: "cambridge",
          aboutP1Essex:"The Paris Climate Accord of 2015 was a remarkable achievement \
          but it made clear the limit of greenhouse gas reduction to which nations were committed. \
          The withdrawal of the United States further indicated that there would be limits to commitment itself. \
          In contrast, however, there was from the beginning, robust attention to climate change at the local level. \
          Even before Paris, the Town of Essex had begun developing",
          aboutP2Essex:"It had become clear that if nations simply achieved the Paris goals this risked being too little too late. \
          With no expectation of further national intervention, and understanding that all climate change effects would be local, \
          the town projected the effects into the future and planned projects to deal with them. \
          Because public demand for energy and other carbon-producing processes ultimately drove GHG emissions, \
          the town hoped to engage the public in a bottom-up action to reduce demand more quickly. \
          Significantly reducing emissions and the effects of climate change would depend on the participation of all residents. \
          The Essex Remembrance Trail traces significant milestones in climate change and the fight against its effects on the town.",
          aboutP1: "The Paris Climate Accord of 2015 was a remarkable achievement \
          but it made clear the limit of greenhouse gas reduction to which nations were committed. \
          The withdrawal of the United States further indicated that there would be limits to commitment itself. \
          In contrast, however, there was from the beginning, robust attention to climate change at the local level. \
          Even before Paris, at the dawn of the 21st century, the City of Cambridge had begun developing ",
          aboutP2: "It had become clear that if nations simply achieved the Paris goals this risked being too little too late. \
          With no expectation of further national intervention, and understanding that all climate change effects would be local, \
          the city projected the effects into the future and planned projects to deal with them. Because public demand for energy \
          and other carbon-producing processes ultimately drove GHG emissions, the city hoped to engage the public in a bottom-up \
          action to reduce demand more quickly. Significantly reducing emissions and the effects of climate change would depend on \
          the participation of all residents. The Cambridge Climate Trail traces significant milestones in climate change and the \
          fight against its effects on the city.",
          aboutTitle: "cambridge climate trail",
          aboutTitleEssex: "essex remembrance trail",
          credsEssex: "The Essex Remembrance Trail is a public art installation that connects viewers to the challenges communities face from climate change and the ongoing local efforts to address them.",
          creds: "The Cambridge Climate Trail is a public art installation that connects viewers to the challenges communities face from climate change and the ongoing local efforts to address them.",
          
          linkAbout: "http://www.cambridgema.gov/CDD/climateandenergy/climatechangeplanning"
        }
    },
    computed: {
      sd: function(){
      return window.location.host.replace("climatefutures.us","").replace("www.","").replace("staging.","").replace(".","");
    },
    }
}
</script>
<style scoped>
#about-modal {
    padding-bottom: 14px; /* to account for no default padding at bottom in #actions */
}

p {
    text-align: left;
    color: black !important;
    font-size: 16px;
    line-height: 1.6em
}
.modal-img { 
  position: fixed; 
  /* width: 15%; */
  /* height: auto;  */
  width: auto;
  height: 260vh;
  opacity: .85;
  top: .18vh;
  left: -50vw;
  z-index: -5999;
  -webkit-filter: blur(4px) brightness(60%); /* Safari 6.0 - 9.0 */
    filter: blur(4px) brightness(60%);
}
p>a {
  color: #fff;
  text-decoration: underline;
  font-family: 'Trade';
}
</style>
