

<template>
  <div class="main">
    <div class="image">
    <img src="../assets/group pc.jpg" alt="">

    <h3>
      Meet Group 3!
    </h3>
    
    
    </div>  

    
    <div class="routerimage">
      <router-link to="/laluyan"  >
        <img src="../assets/laluyan.jpg" alt="">
      </router-link>
      
    </div>
    <div class="routerimage">
      <router-link to="/liwanag"  >
        <img src="../assets/liwanag.jpg" alt="">
      </router-link>
      
    </div>
    <div class="routerimage">
      <router-link to="/maaba"  >
        <img src="../assets/maaba.png" alt="">
      </router-link>
      
    </div>
    <div class="routerimage">
      <router-link to="/orcega"  >
        <img src="../assets/orcega.jpg" alt="">
      </router-link>
      
    </div>
    <div class="routerimage">
      <router-link to="/rayos">
        <img src="../assets/rayos.jpg" alt="">
      </router-link>
      
    </div>
    
    

  </div>
  
    
    
  
</template>

<style>
/* image */

.main {
  position: relative;
}

.image {
  margin-top: 2rem;
  position: relative;
  border: 10px solid   hsla(160, 100%, 37%, 1);
  border-radius: 20px;
}

.image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}


.routerimage {
  margin-top: 2rem;
  margin-left: 1rem;
  position: relative;
  display: inline-block;
  
  
}

.routerimage :hover img {
  opacity: 0.5;
  border: 3px solid hsla(160, 100%, 37%, 1);
  text-decoration: none;
}

.routerimage :hover:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}



.routerimage img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid hsla(160, 100%, 37%, 1);
}

/* text */
h3 {
  font-family: 'Comic Sans MS', cursive;
  font-size: 50px;
  color: hsla(160, 100%, 37%, 1);
  text-align: center;
  line-height: 1.5;
  font-weight: bold; 
  
}
</style>
