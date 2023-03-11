<script>
  export default {
    data() {
      return {
        count: 'This is about'
      }
    },
    props: {
      name: {
        type: String,
        required: true
      },
      imagesrc: {
        type: String,
        required: true
      },
      interest: {
        type: String,
        required: true
      },
      favcolor: {
        type: String,
        required: true
      },
      favfood: {
        type: String,
        required: true
      },
      religion: {
        type: String,
        required: true
      },
      pasttime: {
        type: String,
        required: true
      },
      favsport: {
        type: String,
        required: true
      },
      fear: {
        type: String,
        required: true
      },
      typeofjob: {
        type: String,
        required: true
      },
      talent: {
        type: String,
        required: true
      },
      bibleverse: {
        type: String,
        required: true
      }
    }
  }
</script>

<template>
  <div class="about">
    <div class="deets">

      <div class="icon-logo">
        <img :src="imagesrc" alt="" >
      </div>
      
      
      <h1>{{ name }}</h1>

      <p>
        <span class="label">Interest: </span>  
        <span class="content">
          {{ interest }}
        </span>
      </p>
      <p>
        <span class="label">Favorite Color: </span>  
        <span class="content">
          {{ favcolor }}
        </span>
      </p>
      <p>
        <span class="label">Favorite food: </span>  
        <span class="content">
          {{ favfood }}
        </span>
      </p>
      <p>
        <span class="label">Religion: </span>  
        <span class="content">
          {{ religion }}
        </span>
      </p>
      <p>
        <span class="label">Past-time: </span>  
        <span class="content">
          {{ pasttime }}
        </span>
      </p>
      <p>
        <span class="label">Favorite sport: </span>  
        <span class="content">
          {{ favsport }}
        </span>
      </p>
      <p>
        <span class="label">Fear: </span>  
        <span class="content">
          {{ fear }}
        </span>
      </p>
      <p>
        <span class="label">Preferred type of job: </span>  
        <span class="content">
          {{ typeofjob }}
        </span>
      </p>
      <p>
        <span class="label">Talent: </span>  
        <span class="content">
          {{ talent }}
        </span>
      </p>
      <p>
        <span class="label">Bible verse: </span>  
        <span class="content">
          {{ bibleverse }}
        </span>
      </p>

    </div>
    
    
  </div>
  

  
  
  
</template>

<style >
.about{
  margin-top: 2rem;
  display: flex;
  justify-content: center; /* horizontally center */
  align-items: center; /* vertically center */
  position: relative;
  
}

.deets h1 {
  color: hsla(160, 100%, 37%, 1);
  position: relative;
  font-family: 'Comic Sans MS', cursive;
  font-size: 30px;
  text-align: center;
  line-height: 1.5;
  font-weight: bold; 
}


.icon-logo img{
  position: relative;
  object-fit: cover;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 2px solid   hsla(160, 100%, 37%, 1);
  top: 0;
  left: 40%;
  
}

.deets {
  position: relative;
}

.deets p {
  font-family: 'Comic Sans MS', cursive;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  text-align: justify;
  margin: 20px 0;
  color: hsla(160, 100%, 37%, 1);;
}

.label {
  font-weight: bolder;
}

.content {
  font-style: italic;
}


@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
