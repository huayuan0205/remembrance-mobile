// kept file here for vue structure reference

<template>
  <a>{{linktext}}</a>

</template>


<script>

export default {
  name: "LinkElement",
  props: ["linkText","link"],
  computed: {
      link: function(){

          return this.$parent.encyclopedia.link;
      },
      linkText: function (){
            return this.$parent.encyclopedia.linkText;
      }
  }}
</script>
