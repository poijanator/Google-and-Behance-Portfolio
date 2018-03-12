<template>
  <!-- <div class="home" v-scroll="scrollHigh"> -->
  <div class="home">
    <div class='welcome-page'>
      <div class='welcome-page-details'>
        <h1>Showcasing our designer's work</h1>
        <button v-scroll-to="'.designers-section'">View our designers</button>
      </div>
      <div v-if='image1' class='welcome-img'>
        <img style='margin:0 auto;margin-bottom:2em;' v-bind:src='coverImages[0]'>
      </div>
      <div v-if='image2' class='welcome-img'>
        <img style='margin:0 auto;margin-bottom:2em;' v-bind:src='coverImages[1]'>
      </div>
    </div>

    <div class='designers-section'>
      <h1>Our designers</h1>
      <div class='designers'>
        <div v-for="(designer,index) in designers"  :class="{highlight:designer.field == selected}" @click="selected = designer.field">
          <img v-bind:src='designer.profile'>
          <h2>{{designer.name}}</h2>
          <p>{{designer.field}}</p>
          <div :class="{arrowdown:designer.field == selected}"></div>
        </div>

      </div>
    </div>
    <Projects @sendCoverimage='addCoverimage'></Projects>
  </div>
  <!--API=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c-->
</template>

<script>
import Projects from './Projects'
export default {
  name: 'vigneshhome',
  data() {
    return {
      designers: [],
      coverImages: [],
      fields: [],
      clicked: false,
      names: [],
      selected: '',
      image1: true,
      image2: false
    }
  },
  components: {
    Projects
  },
  methods: {
    addCoverimage: function(data) {
      this.coverImages = data

      // console.log(this.image)
    },
    toggle: function(clicked) {
      clicked = !clicked
    }
  },

  created() {
    var self = this
    setInterval(function() {
      self.image1 = !self.image1
    }, 4000)
    setInterval(function() {
      self.image2 = !self.image2
    }, 4000)

    this.$http.jsonp('https://api.behance.net/v2/users?q=Sarel van Staden&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      .then(response => {
        this.designers.push({ profile: response.body.users[0].images[276], field: response.body.users[0].fields[0], name: (response.body.users[0].first_name + response.body.users[0].last_name) })
        // console.log(this.designers)
      }).catch(e => {
        console.log(e);
      }
      ),

      this.$http.jsonp('https://api.behance.net/v2/users?q=Nathan Chambers&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
        .then(response => {
          // this.designers = response
          // console.log(response.body.users[0].images[276])
          console.log(response)
          this.designers.push({ profile: response.body.users[0].images[276], field: response.body.users[0].fields[0], name: (response.body.users[0].first_name + response.body.users[0].last_name) })
        }).catch(e => {
          console.log(e);
        }
        )
    this.$http.jsonp('https://api.behance.net/v2/users?q=Elena Galitsky&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      .then(response => {
        // this.designers = response
        // console.log(response.body.users[0].images[276])
        console.log(response)
        this.designers.push({ profile: response.body.users[0].images[276], field: response.body.users[0].fields[0], name: (response.body.users[0].first_name + response.body.users[0].last_name) })
      }).catch(e => {
        console.log(e);
      }
      ),
      this.$http.jsonp('https://api.behance.net/v2/users?q=Danny Carlsen&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
        .then(response => {
          // this.designers = response
          // console.log(response.body.users[0].images[276])
          console.log(response)
          this.designers.push({ profile: response.body.users[0].images[276], field: response.body.users[0].fields[1], name: (response.body.users[0].first_name + response.body.users[0].last_name) })
        }).catch(e => {
          console.log(e);
        }
        )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  transition: background-color 0.4s ease-in;
  align-items: left;
}

.welcome-page-details {
  width: 60%;
  height: 30%;
  text-align: center;
  margin: 3em;
}

.highlight {
  border: 18px solid maroon;
  position: relative;
}

.arrowdown {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid maroon;
  position: absolute;
  bottom: -2em;
  right: 7.5em;
}

.welcome-page-details h1 {
  font-size: 3em;
  color: white;
  font-family: 'Bree Serif', serif;
}

.welcome-page-details button {
  font-size: 2em;
  height: 25%;
  color: black;
  background-color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.welcome-img {
  width: 40%;
  height: 310px;
  overflow: hidden;
  position: absolute;
  right: 1vw;
  top: 30vh;
  animation: bounce 3s;
}

.welcome-img img {
  width: 40%;
  height: 310px;
}

.designers-section{
width:100%;
}
.designers {
width:100%;
display: flex;
justify-content: space-around;

}

#designer-0 {
  
}

#designer-0 img {

}


@keyframes bounce {
  0% {
    transform: scale(0.96);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
}
</style>
