<script>
export default {
    data() {
        return {
            name: '',
            interest: '',
            color: '',
            food: '',
            religion: '',
            pasttime: '',
            sport: '',
            fear: '',
            job: '',
            talent: '',
            bibleverse: '',
        }
    },
    methods: {
        nameInput (e) {
            this.name = e.target.value
        },
        interestInput (e) {
            this.interest = e.target.value
        },
        colorInput (e) {
            this.color = e.target.value
        },
        foodInput (e) {
            this.food = e.target.value
        },
        religionInput (e) {
            this.religion = e.target.value
        },
        pasttimeInput (e) {
            this.pasttime = e.target.value
        },
        sportInput (e) {
            this.sport = e.target.value
        },
        fearInput (e) {
            this.fear = e.target.value
        },
        jobInput (e) {
            this.job = e.target.value
        },
        talentInput (e) {
            this.talent = e.target.value
        },
        bibleverseInput (e) {
            this.bibleverse = e.target.value
        },
    }
}

</script>

<template>
    <div class="add">
        <div class="form-field">
        <h1>ADD NEW MEMBER</h1>

        <form method="get" action="">
            <div class="input-wrapper">
                <input v-model="name" @input="nameInput" placeholder="Member name">
                <p>{{ name }}</p>
            </div>
            <div class="input-wrapper">
                <input v-model="interest" @input="interestInput" placeholder="Interest">
                <p>{{ interest }}</p>
            </div>
            <div class="input-wrapper">
                <input v-model="color" @input="colorInput" placeholder="Color">
                <p>{{ color }}</p>
            </div>
            <div class="input-wrapper">
                <input v-model="food" @input="foodInput" placeholder="Favorite food">
                <p>{{ food }}</p>
            </div>
            <div class="input-wrapper">
                <input v-model="religion" @input="religionInput" placeholder="Religion">
                <p>{{ religion }}</p>
            </div>
            <div class="input-wrapper">
                <input v-model="pasttime" @input="pasttimeInput" placeholder="Past time">
                <p>{{ pasttime }}</p>
            </div>
            <div class="input-wrapper">
                <input v-model="sport" @input="sportInput" placeholder="Sport">
                <p>{{ sport }}</p>
            </div>
            <div class="input-wrapper">
                <input v-model="fear" @input="fearInput" placeholder="Fear">
                <p>{{ fear }}</p>
            </div>
            <div class="input-wrapper">
                <input v-model="job" @input="jobInput" placeholder="Job">
                <p>{{ job }}</p>
            </div>
            <div class="input-wrapper">
                <input v-model="talent" @input="talentInput" placeholder="Talent">
                <p>{{ talent }}</p>
            </div>
            <div class="input-wrapper">
                <input v-model="bibleverse" @input="bibleverseInput" placeholder="Bible verse">
                <p>{{ bibleverse }}</p>
            </div>
            

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
    left: 23%;
}

button:hover {
  background-color: #126A3F;
  
}

button:active {
  background-color: #126A3F;
}

.input-wrapper {
    display: flex;
    align-items: center;
    margin: 0;
}

.input-wrapper p {
    margin-left: 10px;
    font-size: 18px;
    color: hsla(160, 100%, 37%, 1);
}


</style>