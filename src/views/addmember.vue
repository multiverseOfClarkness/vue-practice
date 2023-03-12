<template>
    <div class="add">
        <div class="form-field">
        <h1>ADD NEW MEMBER</h1>

        <form action="">
            <input type="text" placeholder="Member name">
            <input type="text" placeholder="Interest">
            <input type="text" placeholder="Favorite color">
            <input type="text" placeholder="Favorite food">
            <input type="text" placeholder="Religion">
            <input type="text" placeholder="Past-time">
            <input type="text" placeholder="Sport">
            <input type="text" placeholder="Fear">
            <input type="text" placeholder="Preferred type of job">
            <input type="text" placeholder="Talent">
            <input type="text" placeholder="Bible verse">

            <button type="submit">Submit</button>
        </form>

            
        </div>
    </div>
    
        
</template>

<style scoped>



input {
    background: var(--color-background);
    border: 2px solid hsla(160, 100%, 37%, 1);
    border-radius: 5px;
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    color: hsla(160, 100%, 37%, 1);
    
}

input::placeholder {
  color: #999;
}

.form-field {
    position: relative;
}

.form-field h1 {
  color: hsla(160, 100%, 37%, 1);
  position: relative;
  left: 15%;
  margin-bottom: 30px;
  font-family: 'Comic Sans MS', cursive;
  font-size: 30px;
  text-align: left;
  line-height: 1.5;
  font-weight: bold; 
}

.add {
    position: relative;
}

.form-field button {
    border-radius: 5px;
    font-size: 18px;
    padding: 10px;
    background-color: hsla(160, 100%, 37%, 1);
    position: absolute;
    top: 100%;
    right: 25%;
}

button:hover {
  background-color: #126A3F;
  
}

button:active {
  background-color: #126A3F;
}



</style>