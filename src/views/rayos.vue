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
  name="Clark James Rayos" 
  imagesrc="src/assets/rayos.jpg" 
  interest="Life" 
  favcolor="Black/Maroon" 
  favfood="Chicken Curry" 
  religion="Roman Catholic" 
  pasttime="Chess/socmed" 
  favsport="Basketball" 
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
