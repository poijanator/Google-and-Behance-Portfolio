<template>
  <!-- <div class="home" v-scroll="scrollHigh"> -->
  <div class="home">
    <div v-bind:class='{Ccover: time}' class='welcome-page'>
      <div class='welcome-page-details'>
        <h1>Showcasing our designer's work</h1>
        <button>View our designers</button>
      </div>
      <div class='welcome-img'>
        <div class='img-0'>
          <img class='cover-img' style='margin:0 auto;margin-bottom:2em;' v-bind:src='coverImages[0]'>
        </div>
        <div v-bind:class='{Ccoverimg: timeimg}' class='img-1'>
          <img class='cover-img' style='margin:0 auto;margin-bottom:2em;' v-bind:src='coverImages[1]'>
        </div>
      </div>
    </div>
    <div class='designers-section'>
      <h1>Our designers</h1>
      <div class='designers' v-for="designer in designers" v-bind:class="{selected: designer.clicked}" v-on:click="toggle(designer.clicked)">
        <img v-bind:src='designer'>
      </div>
      <div class='designers-name' v-for='name in names'>
        <h1>{{name}}</h1>
      </div>
      <div class='designers' v-for='field in fields'>
        <p>{{field}}</p>
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
      time: true,
      selected: undefined,
      timeimg: true,
      timeMimg: true
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
    var self = this;
    setInterval(function() {
      self.time = !self.time
    }, 5000)
    setInterval(function() {
      self.timeimg = !self.timeimg
    }, 5000)

    this.$http.jsonp('https://api.behance.net/v2/users?q=Sarel van Staden&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      .then(response => {
        this.designers.push(response.body.users[0].images[276])
        this.fields.push(response.body.users[0].fields[0])
        this.names.push(response.body.users[0].first_name + response.body.users[0].last_name)
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
          this.fields.push(response.body.users[0].fields[0])
          this.designers.push(response.body.users[0].images[276])
          this.names.push(response.body.users[0].first_name + response.body.users[0].last_name)
        }).catch(e => {
          console.log(e);
        }
        ),
      this.$http.jsonp('https://api.behance.net/v2/users?q=Elena Galitsky&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
        .then(response => {
          // this.designers = response
          // console.log(response.body.users[0].images[276])
          console.log(response)
          this.fields.push(response.body.users[0].fields[0])
          this.designers.push(response.body.users[0].images[276])
          this.names.push(response.body.users[0].first_name + response.body.users[0].last_name)
        }).catch(e => {
          console.log(e);
        }
        ),
      this.$http.jsonp('https://api.behance.net/v2/users?q=Danny Carlsen&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
        .then(response => {
          // this.designers = response
          // console.log(response.body.users[0].images[276])
          console.log(response)
          this.fields.push(response.body.users[0].fields[0])
          this.designers.push(response.body.users[0].images[276])
          this.names.push(response.body.users[0].first_name + response.body.users[0].last_name)
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
}

.Ccover {
  background-color: rgba(70, 139, 201, 1);
  transition: background-color 0.4s ease-in;
}

.Ccoverimg {
  visibility: hidden;
  transition: visibility 0.4s ease-in;
  transition-delay: 13s;
}

.CCcoverimg {
  visibility: hidden;
  transition: visibility 0.4s ease-in;
  transition-delay: 13s;
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
  width: 64%;
  height: 310px;
  overflow: hidden;
  position: absolute;
  right: 10vw;
  top: 30vh;
}

.welcome-img img {
  width: 40%;
  height: 310px;
}

.cover-img {}

.img-0 {
  animation: bounce 3s ease-in 1s, change 9s ease-in 4s infinite;
  margin-bottom:10em;
}

.img-1 {
  animation: bounce 3s ease-in 1s , change 9s ease-in 4s infinite;
}

.designers-section {
  width: 80%;
  margin: 3em auto 3em auto;
}

.designers {
  width: 25%;
  height: auto;
  float: left;
  margin: 1em auto;
}


.designers img {
  width: 75%;
  height: auto;
}

.selected {
  border: 18px solid maroon;
}

.designers p {
  width: 35%;
  height: auto;
  margin: 0 auto;
}

.designers-name {
  width: 25%;
  height: auto;
  margin: 0 auto;
  float: left;
}

.designers-name {
  font-size: 0.7em;
}


@keyframes bounce {
  0% {
    transform: scale(0.99);
  }
  50% {
    transform: scale(1.01);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes change {
  0% {
    transform: translateY(0);
  }
  25%{
    transition: opacity 0 ease-out;
  }
  50% {
    transform: translateY(-550px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
