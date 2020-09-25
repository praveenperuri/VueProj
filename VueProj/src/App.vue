<template>
  <div id="app" class="container-fluid ">
    <router-view></router-view>
    <div class="row-cols-sm-1 m-sm-1">
      <!-- back to top -->
      <a id="ScrollToTop" href="#" class="btn btn-accent" title="Scroll to Top">
        <span class="fa fa-arrow-up p-sm-1"></span>
      </a>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Footer
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px !important;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#edlink-logo {
  object-position: 50% 50%;
  /*width:336px;*/
  height: 147px;
  object-fit: cover;
  padding: 30px;
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  background: #3b5998;
  color: white;
}

.fa-twitter {
  background: #55acee;
  color: white;
}

.fa-youtube {
  background: #bb0000;
  color: white;
}

.img-official {
  width: 23px;
  height: 23px;
}

.announcementBanner {
  filter: contrast(110%) saturate(200%);background-color: #ff0000;
}

</style>
