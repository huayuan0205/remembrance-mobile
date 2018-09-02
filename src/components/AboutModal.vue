<template>
    <div id="about-modal">
        <p>{{aboutP1}}</p>
        <p>{{aboutP2}}</p>
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
          Even before Paris, at the dawn of the 21st century, the City of Cambridge had begun developing plans to \
          mitigate and adapt to the effects of climate change.",
          aboutP2: "It had become clear that if nations simply achieved the Paris goals this risked being too little too late. \
          With no expectation of further national intervention, and understanding that all climate change effects would be local, \
          the city projected the effects into the future and planned projects to deal with them. Because public demand for energy \
          and other carbon-producing processes ultimately drove GHG emissions, the city hoped to engage the public in a bottom-up \
          action to reduce demand more quickly. Significantly reducing emissions and the effects of climate change would depend on \
          the participation of all residents. The Cambridge Climate Trail traces significant milestones in climate change the \
          fight against its effects on the city."
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
}
</style>
