<script>
  export default {
    data() {
      return {
        count: 0
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
    },
    methods: {
      like() {
        this.count++
      },

      dislike() {
        this.count--
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

      <div >
        <button @click="like" class="my-button">
          <img src="../assets/like.png" alt="">
        </button>
        <button @click="dislike" class="my-button">
          <img src="../assets/dislike.png" alt="">
        </button>
      </div>
      
      
      <h1>{{ name }}</h1>
      
      <p>
        <span class="label">Likes: </span>  
        <span class="content">
          {{ count }}
        </span>
      </p>
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

.my-button {
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  position: relative;
  top: 0;
  left: 42%;
  width: 50px;
  height: 50px;
}



.my-button img {
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 5px;
}

.my-button:hover img {
  filter: brightness(80%);
}

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
  border: 5px solid   hsla(160, 100%, 37%, 1);
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
  color: hsla(160, 100%, 37%, 1);
}

.label {
  font-weight: bolder;
}

.content {
  font-style: italic;
}


.buttons img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  top: 0;
  left: 43%;
  
}
.buttons button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 43%;
  
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
