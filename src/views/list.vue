<script>
// give each todo a unique id
let id = 0

export default {
  data() {
    return {
      
      movies: [
        { id: id++, title: '300' },
        { id: id++, title: 'Harry Potter Series' },
        { id: id++, title: 'FPJ: Anak ng Teteng' }
      ]
    }
  },
  methods: {
    addMovie() {
        this.movies.push({ id: id++, title: this.newMovie })
        this.newMovie = ''
        
    },
    removeMovie(movie) {
        this.movies = this.movies.filter((t) => t !== movie)
    }
  }
}
</script>



<template>
    <div class="form-field">
        <div class="form">
            <h1>Add favorite movies</h1>

            <form @submit.prevent="addMovie">
                <input v-model="newMovie">
                <button>Add Movie</button>    
            </form>
        </div>
        

        

        <div class="table">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Movie Title</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(movie, index) in movies" :key="movie.id">
                        <td>{{ movie.id }}</td>
                        <td>{{ movie.title }}</td>
                        <td><button class="action-button" @click="removeMovie(movie)">X</button></td>
                    </tr>
                </tbody>
            </table>
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


.form button {
    border-radius: 5px;
    font-size: 18px;
    padding: 10px;
    background-color: hsla(160, 100%, 37%, 1);
    position: relative;
    
}

button:hover {
  background-color: #126A3F;
  
}

button:active {
  background-color: #126A3F;
}

.list {
    display: flex;
    align-items: center;
}
.list ul{
    font-size: 18px;
    padding: 10px;
    margin: 10px;
    color: hsla(160, 100%, 37%, 1);
}
.list button{
    border-radius: 5px;
    font-size: 10px;
    padding: 10px;
    background-color: hsla(160, 100%, 37%, 1);
    position: relative;
    top: 100%;
    left: 23%;
}

.table{
    position: relative;
}
.table table {
    border: solid 3px hsla(160, 100%, 37%, 1);
    border-style: dotted;
    margin-top: 2rem;
    border-collapse: collapse;
    font-family: 'Comic Sans MS', cursive;
}

.table  th, td {
    text-align: left;
    padding: 15px;
    border: 3px solid hsla(160, 100%, 37%, 1);
    border-style: dotted;
}
  
.table  th {
    color: hsla(160, 100%, 37%, 1);
    font-size: 30px;
}

.table td {
    color: hsla(160, 100%, 37%, 1);
    font-size: 20px;
}

.table button {
    border-radius: 5px;
    font-size: 10px;
    padding: 10px;
    background-color: hsla(160, 100%, 37%, 1);
    position: relative;
    width: 100px;
}

.action-button:hover {
    background-color: crimson;
    border: 2px solid crimson;
}


</style>