<template>
  <div id="vignesh-app">
 </div>
</template>

<script>
import Home from './components/Home'
export default {
  name: 'vignesh app',
  components: {
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
*,
 :after,
 :before {
  box-sizing: border-box;
}

html,
body {
  height: 100vh;
}

body {
  margin: 0;
  min-height: 100%;
  background: #FFFFFF;
}

#vignesh-app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}




h1,
h2 {
  font-weight: normal;
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

h3 {
  font-weight: 100;
  font-size: 2rem;
}
</style>
