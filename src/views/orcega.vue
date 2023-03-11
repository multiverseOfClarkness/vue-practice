<script>
  import count from './AboutView.vue'

  export default {
    components: {
      count
    }
  }
</script>

<template>
  
  <count 
  name="Jhyzel Orcega" 
  imagesrc="src/assets/orcega.jpg" 
  interest="Travel" 
  favcolor="Black" 
  favfood="Adobo" 
  religion="Roman Catholic" 
  pasttime="Rest" 
  favsport="Badminton" 
  fear="Claustrophobia" 
  typeofjob="Clerical" 
  talent="Academic talent" 
  bibleverse='"And let us not grow weary of doing good, for in due season we will reap, if we do not give up" - Galatians 6:9'  
  />

</template> 

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
