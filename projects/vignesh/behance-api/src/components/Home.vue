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
          <img  class='cover-img' style='margin:0 auto;margin-bottom:2em;' v-bind:src='coverImages[0]'>
        </div>
          <div  v-bind:class='{Ccoverimg: timeimg}' class='img-1'>
          <img class='cover-img' style='margin:0 auto;margin-bottom:2em;' v-bind:src='coverImages[1]'>
        </div>
      </div>
    </div>
    <h1>Our designers</h1>
    <div v-for="designer in designers">
      <img class='media-object' style='margin:0 auto;margin-bottom:2em;' v-bind:src='designer'>
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
      time: true,
      timeimg: true,
      timeMimg:true
    }
  },
  components: {
    Projects
  },
  methods: {
    addCoverimage: function(data) {
      this.coverImages = data

      // console.log(this.image)
    }
  },
  created() {
    this.$http.jsonp('https://api.behance.net/v2/users?q=Sarel van Staden&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      .then(response => {
        this.designers.push(response.body.users[0].images[276])
        // console.log(this.designers)
      }).catch(e => {
        console.log(e);
      }
      ),

      // this.$http.jsonp('https://api.behance.net/v2/users?q=Nathan Chambers&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      //   .then(response => {
      //     // this.designers = response
      //     // console.log(response.body.users[0].images[276])
      //     console.log(response)
      //     this.designers.push(response.body.users[0].images[276])
      //   }).catch(e => {
      //     console.log(e);
      //   }
      //   )
      this.$http.jsonp('https://api.behance.net/v2/users?q=Elena Galitsky&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
        .then(response => {
          // this.designers = response
          // console.log(response.body.users[0].images[276])
          console.log(response)
          this.designers.push(response.body.users[0].images[276])
        }).catch(e => {
          console.log(e);
        }
        )
    // this.$http.jsonp('https://api.behance.net/v2/users?q=Roman Yarmishko&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
    //   .then(response => {
    //     // this.designers = response
    //     // console.log(response.body.users[0].images[276])
    //     console.log(response)
    //     // this.designers.push(response.body.users[0].images[276])
    //   }).catch(e => {
    //     console.log(e);
    //   }
    //   )
  },
  created () {
      var self = this;
      setInterval(function () {
         self.time = !self.time
      }, 5000)
       setInterval(function () {
         self.timeimg = !self.timeimg
      }, 5000)
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
  transition: background-color 0.6s ease-in;
  align-items: left;
}

.welcome-page-details {
  width: 60%;
  height: 30%;
}

.Ccover {
  background-color: rgba(213, 166, 217, 0.5);
  transition: background-color 0.4s ease-in;
}
.Ccoverimg{
  visibility: hidden;
  transition: visibility 0.5s ease-in;
}
.CCcoverimg{
  visibility: hidden;
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
  top: 35vh;
}

.welcome-img img {
  width: 40%;
}

.cover-img {
  position: absolute;
  top: 0;
  right: 0;
}

.img-0 {
  animation-name: animate;
  animation-duration: 3s;
  animation-iteration-count: 4;
  animation-delay: 1s;
  transform-origin: right center;
  animation-direction: alternate;
  animation-timing-function: ease-in;
}

.img-1 {
  animation-name: animate;
  animation-duration: 3s;
  animation-iteration-count: 4;
  animation-delay: 1s;
  transform-origin: right center;
  animation-direction: alternate;
  animation-timing-function: ease-in;
}





</style>
