<script>
  import count from './AboutView.vue'

  export default {
    components: {count}
  }
</script>

<template>
  
  <count 
  name="Hannah Arceli Liwanag" 
  imagesrc="src/assets/liwanag.jpg" 
  interest="Coffee" 
  favcolor="Purple" 
  favfood="Chicken nuggets" 
  religion="Roman Catholic" 
  pasttime="Twitter" 
  favsport="Badminton" 
  fear="Claustrophobia" 
  typeofjob="Administrative/ clerical" 
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
