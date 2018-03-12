<template>
  <div class='projects'>
    <!--<h1>projects</h1>
  <h2 v-for="project in projectsAuthor1">{{project[8].name}}</h2>-->
  </div>
</template>

<script>
export default {
  name: 'projects',
  data() {
    return {
      coverImage: [],
      projectsAuthor1:[]
    }
  },

  created() {
    //  this.$http.jsonp('https://api.behance.net/v2/users/126487/projects?api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
    //   .then(response => {
    //     // this.coverImage.push(response.body.projects[4].covers[404])
    //     console.log(response)
    //     // console.log( this.coverImage)
    //   }).catch(e => {
    //     console.log(e);
    //   }),
    this.$http.jsonp('https://api.behance.net/v2/users/5501311/projects?api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      .then(response => {
        // this.coverImage.push(response.body.projects[1].covers[404])
        this.coverImage.push(response.body.projects[5].covers[404])
        this.coverImage.push(response.body.projects[1].covers[404])
        this.projectsAuthor1.push(response.body.projects)
        console.log(response)
        // console.log( this.coverImage)
      }).catch(e => {
        console.log(e);
      }
      )
      //  this.$http.jsonp('https://api.behance.net/v2/users/13491869/projects?api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      // .then(response => {
      //   this.coverImage.push(response.body.projects[0].covers[404])
      //   // console.log(response)
      //   // console.log( this.coverImage)
      // }).catch(e => {
      //   console.log(e);
      // }
      // ),
      
      //   this.$http.jsonp('https://api.behance.net/v2/users/16238999/projects?api_key=IryTnzmJFPkXW4oKRd2kQSaYTanjKD7c')
      // .then(response => {
      //   this.coverImage.push(response.body.projects[17].covers[404])
      //   console.log(response)
      //   // console.log( this.coverImage)
      // }).catch(e => {
      //   console.log(e);
      // }
      // )
    this.$emit('sendCoverimage', this.coverImage)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects {
  width: 10%;
  height: 100vh;
}
</style>
