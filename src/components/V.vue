<template>
    <div class='vignesh'>
      <div class="v">
        <div class='name'>
          <h1>Vignesh Murugan</h1>
        </div>
        <div class='project-title'>
          <h1>Google maps Finding events & location details</h1>
          <img src="https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2F6c08b3_e8b0ab79984a4bb1bd4228b21d982790_mv2_d_2072_2072_s_2.png?1520144682471">
        </div>
      </div>
      <div class='project-details'>
        <div>
          <img src="https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2Fdavid-poole1.jpg?1520147399044">
        </div>
        <div>
          <h1>Project detail</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
       <button   class='vigneshHome'>
      <router-link v-bind:to="'/vigneshHome'">vigneshHome</router-link>
    </button>
    </div>
   
</template>

<script>
export default {
  name: 'v',
  components: {
  },
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: bold;
  line-height: 1.6;
}

.vigneshHome {
  height: 5%;
  width: auto;
background-color: black; /* Green */
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

* {
  color: white;
}

.vignesh {
  height: 100vh;
  width: 100%;
  background-color: rgba(213, 166, 217, 0.5);
  margin-top: 10vh;
}

.v {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin-top: 4vh;
}

.project-details {
  width: 80vw;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 3vh;
}

.project-details p {
  width: 50vw;
  font-family: georgia;
  text-align: left;
  font-size: 1.75em;
  line-height: 1.4;
}

.project-details h1 {
  width: 50vw;
  height: 1em;
  font-family: 'Bree Serif', serif;
  text-align: left;
  font-size: 2.25em;
}

.project-details img {
  width: 30vw;
  height: 50vh;
  margin-top: 4vh;
  padding-right: 4vw;
}

.project-title img {
  width: 10vw;
  height: 10vh;
  margin-top: -2vh;
}

.name h1 {
  height: auto;
  margin-top: 1.75vh;
  text-align: center;
}

.name h1::first-letter {
  font-size: 200%;
  color: white;
}




.project-title h1 {
  margin-top: -2vh;
  font-size: 1.5em;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
