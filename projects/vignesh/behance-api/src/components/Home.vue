<template>
  <!-- <div class="home" v-scroll="scrollHigh"> -->
  <div class="home">
    <h1>Our designers</h1>
       <div v-for="designer in designers">
            <img class='media-object' style='margin:0 auto;margin-bottom:2em;'  v-bind:src='designer'>
        </div>
  </div>
  <!--API=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c-->
</template>

<script>
export default {
  name: 'vigneshhome',
  data() {
    return {
      designers: []
    }
  },
  methods: {

  },
  created() {
    this.$http.jsonp('https://api.behance.net/v2/users?q=Sarel van Staden&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      .then(response => {
        this.designers.push(response.body.users[0].images[276])
        // console.log(this.designers)
      }),
    this.$http.jsonp('https://api.behance.net/v2/users?q=Nathan Chambers&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      .then(response => {
        // this.designers = response
        // console.log(response.body.users[0].images[276])
        // console.log(response)
        this.designers.push(response.body.users[0].images[276])
      }),
       this.$http.jsonp('https://api.behance.net/v2/users?q=Elena Galitsky&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      .then(response => {
        // this.designers = response
        // console.log(response.body.users[0].images[276])
        // console.log(response)
        this.designers.push(response.body.users[0].images[276])
      }),
        this.$http.jsonp('https://api.behance.net/v2/users?q=Danny Carlsen&api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      .then(response => {
        // this.designers = response
        // console.log(response.body.users[0].images[276])
        // console.log(response)
        this.designers.push(response.body.users[0].images[276])
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
