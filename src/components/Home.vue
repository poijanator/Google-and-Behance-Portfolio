<template>
  <div class="home">
     <div class="wrap-banner">
      <vue-particles color="#000000" :particleOpacity="0.7" linesColor="#ffffff" :particlesNumber="80" shapeType="circle" :particleSize="5" :linesWidth="2" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push">
      </vue-particles>
    </div>
    <div class='welcome-msg'>
      <p>Welcome to portfolio portal</p>
      <h1>Designers created these projects using their skillset of API & DataViz</h1>
    </div>
    <img class='logo-landingpage' src="https://cdn.glitch.com/6030f993-85bf-48c3-ba08-201d282bac21%2FW%20JOV%20logo.png?1520054601329"></img>
    <nav>
      <ul>
        <li class='j' v-scroll-to="'.j'">Jesse</li>
        <li class='o'>Oliver</li>
        <li class='v'>Vignesh</li>
      </ul>
    </nav>
    <J></J>
  </div>
</template>

<script>
import J from './J'
export default {
  name: 'home',
  components: {
    J
  },
  methods: {
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.home{
  width:100%;
}
.j{
  /*color: #00D9FF;*/
}
.o{
  /*color: #000000;*/
}
.v{
  /*color: #4D0454;*/
}
nav ul li {
  display: flex;
  height: auto;
  flex-direction: row;
  justify-content: center;
  padding-top: 0.8vh;
  margin-bottom: 2vh;
  font-size: 2em;
  color: white;
  display: inline;
}

nav {
  position: fixed;
  width:20vw;
  text-align:right;
  top: 3.5vh;
  margin-right: 4vw;
  right: -1vw;
}
.welcome-msg {
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: center;
  width:60vw;
  height: auto;
  position: absolute;
  top: 32vh;
  right:20vw;
  color:#D6932E;
}
.welcome-msg p{
  font-family:georgia;
  font-size:1.5em;
}
.welcome-msg h1{
  font-family: 'Bree Serif', serif;
  font-size:2.5em;
  line-height: 1.6;
  }
.wrap-banner {
  height: 98.5vh;
  width:100%;
}

.particles-js {
  background-color: rgba(52,57,63,0.8);
  background-size: "300px 100px";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#toolbar {
  position: sticky;
  top: 10px;
}

.logo-landingpage {
  width: 8vw;
  height: 10vh;
  position: absolute;
  top: 2em;
  left: 2em;
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
