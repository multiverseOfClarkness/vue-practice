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
  name="Aliyah Mae Laluyan" 
  imagesrc="src/assets/laluyan.jpg" 
  interest="Coffee" 
  favcolor="Purple" 
  favfood="Kare-Kare" 
  religion="Roman Catholic" 
  pasttime="Watching tiktok contents" 
  favsport="Badminton" 
  fear="Claustrophobia" 
  typeofjob="Business/ financial jobs" 
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
