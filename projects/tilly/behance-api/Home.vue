<template>
  <div class="home">
    <div class="designers-section">
      <div class="designers">
        <div v-for="(designer,index) in designers">
          <img v-bind:src='designer.profile' :class="{active: index === activeItem}" @click="assignuser(designer.username),clickHandler(designer,index)">
          <br>
          <hr class="thin-hr">
          <h2>{{designer.name}}</h2>
          <p>{{designer.country}}</p> 
          <p>{{designer.fields}}</p> 
          <p>views - {{designer.views}} | likes - {{designer.likes}}</p>
        </div>
      </div>
    </div>

    <hr>
    <div class="projects-section">
      <h1>{{ designerName.toUpperCase() }}S PROJECTS</h1>
      <div class="projects">
        <div v-for="(project,index) in projects">
          <img v-bind:src="project.profile.covers[404]" v-on:click="projectClicked(project.profile)">
        </div>
      </div>
    </div>

    <div v-if="modal" id="myModal" class="modal">
      <div class="modal-content" v-for="(full,index) in fullProject">
        <span class="close" @click="modalHide()">&times;</span>
        <h1>{{full.project.name}}</h1>
        <p class="desc">{{full.project.description}}</p>
        <br>
        <hr>
        <br>
        <div v-for="module in full.project.modules">
          <img v-bind:src='module.src'></img>
        </div>
        <br>
        <a v-bind:href='full.project.url' target="_blank">View on Behance</a>
        <h1 @click="modalHide()">&times;</h1>
      </div>
    </div>
    <div v-if="modal" class="overlay" @click="modalHide()"></div>
  </div>
</template>

<script>
export default {
  name: 'tillyhome',
  data() {
    return {
      designers: [],
      projects: [],
      chosenUser: 'ShukaevArt',
      projectId: '',
      fullProject: [],
      activeItem: 0,
      modal: false,
      designerName: 'Artem Shukaev'
    }
  },
  methods: {

    modalShow() {
      this.modal = true
    },


    modalHide() {
      this.modal = false
    },



    clickHandler(designer,index) {
      this.activeItem = index;
      this.designerName = designer.name
    },

    assignuser(username) {
      this.chosenUser = username
      console.log(username)
      this.getProjects(username)
    },

    getProjects(username) {
      console.log(username)
      this.$http.jsonp('https://www.behance.net/v2/users/' + username + '/projects?api_key=7kafri88mymXABf6JjPU3hJnZCVgaz9R')
        .then(response => {
          console.log("get Projects", response)
          this.projects = [];
          for (var i = 0; i < 8; i++) {
            this.projects.push({
              profile: response.body.projects[i],
            });
          }
        });
    },

    projectClicked(project) {
      this.projectId = project.id;
      console.log(project.id)
      this.getProjectId(project.id)
      this.modalShow()
    },

    getProjectId(projectId) {
      console.log(projectId)
      this.$http.jsonp('https://www.behance.net/v2/projects/' + projectId + '?api_key=7kafri88mymXABf6JjPU3hJnZCVgaz9R')
        .then(response => {
          console.log("get Project details", response)
          this.fullProject = [];
          this.fullProject.push({
            project: response.body.project
          });
        });
    }
  },

  mounted() {
    this.$http.jsonp('https://www.behance.net/v2/users/faatiliop1b86b/following?api_key=7kafri88mymXABf6JjPU3hJnZCVgaz9R')
      .then(response => {
        console.log("get Designers", response)
        for (var i = 0; i < 4; i++) {
          this.designers.push({
            profile: response.body.following[i].images[276],
            fields: response.body.following[i].fields[1],
            name: response.body.following[i].display_name,
            country: response.body.following[i].location,
            likes: response.body.following[i].stats.appreciations,
            views: response.body.following[i].stats.views,
            username: response.body.following[i].username
          });
        }
      });
    this.getProjects(this.chosenUser)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  postion: relative;
}

p{
  font-family: roboto,300;
  font-size: 16px;
}

a {
  text-decoration: underline;
  color: orange;
  display: inline-block;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 60%;
  height: 90%;
  max-width: 100%;
  max-height: 100%;
  overflow-y: scroll;
  text-align: center;
}

.overlay {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 100%;
}

.modal-content img {
  width: 60%;
  height: auto;
}

.close {
  font-size: 50px;
  float: right;
  cursor: pointer;
}

.desc {
  width: 70%;
  align: center;
  margin-left: auto;
  margin-right: auto;
  line-height: 120%;
}

.active {
  background-color: orange;
}

.designers-section {
  width: 100%;
  margin-top: 5%;
  margin-bottom: 2%;
}

.designers {
  width: 100%;
  display: flex;
  justify-content: center;
}

.designers img {
  border-radius: 210px;
  height: auto;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  padding: 10px;
  margin: auto;
}

.projects-section {
  width: 100%;
  margin-top: 60px;
  margin-bottom: 40px;
}

.projects {
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
}

.projects img {
  height: 250px;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
  padding: 12px;
}


hr {
  display: block;
  border-style: inset;
  border-width: 2px;
  border-color: purple;
}

.thin-hr {
  border-width: 1px;
}
</style>
