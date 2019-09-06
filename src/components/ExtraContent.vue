<template>
	<div id="extra-content"> <!-- v-on:click="clickOut"  -->

      <img src="../assets/alluminium_halfres.png" class="extra-img" alt id="backgear" >
      <div class="ui very padded compact section grid">
            <div class="row">
                <div class="two wide column">
                	
        
                </div>
                <div class="twelve wide column">
                  <p v-html="extraText"></p>

                  <p>
                  	<router-link tag="a" :to="{ name: 'durhamma'}">
                      <a>Learn more about how Durham is addressing climate change here.</a>
                    </router-link>
                  	 
                  </p>
                  <p>#seacoastremembranceproject</p>
                  <br>
                  <hr v-if="extraFoot1">
                  <p class="footnote1">
                  	<span v-if="extraFoot1">(1)</span> {{extraFoot1}} 
                  	<span v-if="extraFootlink1">
                  		<router-link tag="a" :to="{ name: item_e_id}" >
                  			<a>{{extraFootlink1}}</a>
                  		</router-link>
                  	</span>
                  </p>
                  <p class="footnote2">
                  	<span v-if="extraFoot2">(2)</span> {{extraFoot2}}
                  </p>
                  <p class="footnote3">
                  	<span v-if="extraFoot3">(3)</span> {{extraFoot3}}
                  </p>
                </div>
                 <div class="two wide column">
        
                </div>
            </div>
        </div>


	</div>

</template>

<script>
	export default {
		name: "ExtraContent",
	computed: {
		extraText: function(){
			let t = this.getExtraItem();
			return t.extra_text;
		},
		extraFoot1: function(){
			let t = this.getExtraItem();
			return t.footnote1;
		},
		extraFoot2: function(){
			let t = this.getExtraItem();
			return t.footnote2;
		},
		extraFoot3: function(){
			let t = this.getExtraItem();
			return t.footnote3;
		},
		extraFootlink1: function(){
			let t = this.getExtraItem();
			return t.footnotelink1;
		},
		exteraItems: function(){
			return this.$parent.items;
		},
		abstyle: function(){
        console.log("about this",$(window)[0].screen.availHeight)
        let hr = $(window)[0].screen.availHeight/1.2;
        return {
          height: `${hr}px`
        }
      },
      item_e_id: function(){
      	return this.$route.params.id;
      },
      sd: function(){
if (window.location.host.replace("climatefutures.us","").replace("www.","").replace("staging.","").replace(".","") === "localhost:8080"){
          return "seacoast"

      }
      else  { return window.location.host.replace("climatefutures.us","").replace("www.","").replace("staging.","").replace(".","");}
        }
	},
	methods:{
		getExtraItem: function(){
			console.log("func is getExtra")
			const this_item = this.$parent.items.filter((value, index, array) => {
              return value.spot_id == this.$route.params.id;
            })
            console.log(this_item);
            return this_item[0];
		},
		clickOut: function(){
			console.log("click in extra", this)
			// this.$router.go(-1)
			 this.$emit('removeextra', event)    

		}
	}
	}

</script>


<style scoped>
.extra-img { 
  
  position: fixed; 
  /* width: 15%; */
  /* height: auto;  */
  height: 220vh;
  /* width: 100vw; */
  color: rgb(0, 0, 0); 
  background-attachment: fixed;
  /* background-size:50%; */
  background-repeat: no-repeat;
  opacity: .7;
  top: .40vh;
  left: -160vw;
  z-index: -229;
  -webkit-filter: blur(4px) brightness(1%); /* Safari 6.0 - 9.0 */
    filter: blur(4px) brightness(1%);
}
#extra-content {
	padding-top: 10vh;
    padding-bottom: 14px; /* to account for no default padding at bottom in #actions */
    box-shadow: 0 0 0 1000px rgba(0,0,0,.3);
  /* for real browsers */
  box-shadow: 0 0 0 100vmax rgba(0,0,0,.3);
  
}


p {
    text-align: left;
    color: black !important;
    font-size: 16px;
    line-height: 1.6em;
    overflow-wrap: break-word;
}

.footnote1,.footnote2,.footnote3{
	font-size:12px;
}
</style>