<template>
    <div id="about-modal">
      <img src="../assets/alluminium_halfres.png" class="modal-img" alt id="backgear" >
        <div class="ui very padded compact section grid">
            <div class="row">
                <div class="two wide column">
        
                </div>
                <div class="twelve wide column">
                  <h2 class="text-head">{{aboutTitle}}</h2>
                    <p>{{aboutP1}}
                    <router-link tag="a" :to="{ name: 'climatechangecambridge'}" :target="_blank">
                      <a>plans to mitigate and adapt to the effects of climate change.</a>
                    </router-link>
                    </p>
                    <p>{{aboutP2}}</p>
        
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
          linkAbout: "http://www.cambridgema.gov/CDD/climateandenergy/climatechangeplanning"
        }
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
