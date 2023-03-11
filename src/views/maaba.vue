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
  name="Franz Mandric Maaba" 
  imagesrc="src/assets/maaba.png" 
  interest="Valorant" 
  favcolor="Black" 
  favfood="Fresh Lemon-Dill with white truffle and beluga sturgeon caviar." 
  religion="Roman Catholic" 
  pasttime="Valorant" 
  favsport="Basketball" 
  fear="Claustrophobia" 
  typeofjob="Multimedia" 
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
