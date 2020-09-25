<template>
  <div class="hello container">
    <div class="row-cols-1 m-1 p-1">
      <div id="pageTitle">
        <!-- class="page-title" -->
        <div class="row">
          <div class="col-12 d-lg-flex justify-content-lg-center align-items-center">
            <div>
              <h1 class="h1 mt-3 mb-1 ml-3 font-weight-light text-dark">
                <!-- <span class="fa fa-home text-primary-10"></span> -->
                {{ msg }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row-cols-1">
      <div class="col-sm-12 m-1 mb-2">
        <img id="mainLogo" src="../assets/img/edlink-logo.png" alt="EdLink Home" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="entity-card">
          <!-- <div class="card-header bg-info text-light">Early Childhood</div> -->

          <a href="https://www.louisianabelieves.com/early-childhood" target="_blank" class="pl-5">
            <img class="card-img-top" src="../assets/img/Early childhood.png" alt="Early Childhood" />
          </a>
          <a
            href="https://www.louisianabelieves.com/early-childhood"
            target="_blank"
            class="card-link text-info"
          >
            <div class="card-body">
              <h5>Early Childhood</h5>
              <p class="card-text">
                <small>Includes all Early Childhood programs,child care provider information about Licensing, Registration, Quality, Training and Child Care Assistance.</small>
                <!-- NSECD, LA4, Preshcool Development Grant, -->
              </p>
            </div>
          </a>
          <!-- <div class="card-footer text-muted">
            <a
              href="https://www.louisianabelieves.com/early-childhood"
              target="_blank"
              class="card-link text-info"
            >Visit Resources</a>
          </div>-->
        </div>
      </div>
      <div class="col-md-3">
        <div class="entity-card">
          <!-- <div class="card-header bg-info text-light">Schools</div> -->
          <a href="https://louisianaschools.com/" target="_blank">
            <img class="card-img-top" src="../assets/img/Schools.png" alt="Schools" />
          </a>
          <a href="https://louisianaschools.com/" target="_blank" class="card-link text-info">
            <div class="card-body">
              <h5>Schools</h5>
              <p class="card-text">
                <small>Search for schools or centers based on what matters most to you.</small>
              </p>
            </div>
          </a>
          <!-- <div class="card-footer text-muted">
            <a
              href="https://louisianaschools.com/"
              target="_blank"
              class="card-link text-info"
            >Visit Page</a>
          </div>-->
        </div>
      </div>
      <div class="col-md-3">
        <div class="entity-card">
          <!-- <div class="card-header bg-info text-light">Educators</div> -->
          <a href="https://www.louisianabelieves.com/teaching" target="_blank">
            <img class="card-img-top" src="../assets/img/Educators.png" alt="Card image cap" />
          </a>
          <a
            href="https://www.louisianabelieves.com/teaching"
            target="_blank"
            class="card-link text-info"
          >
            <div class="card-body">
              <h5>Educators</h5>
              <p class="card-text">
                <small>Effective educators are at the heart of every school and classroom.</small>
              </p>
            </div>
          </a>
          <!-- <div class="card-footer text-muted">
            <a
              href="https://www.louisianabelieves.com/teaching"
              target="_blank"
              class="card-link text-info"
            >Learn More</a>
          </div>-->
        </div>
      </div>
      <div class="col-md-3">
        <div class="entity-card">
          <!-- <div class="card-header bg-info text-light">Families</div> -->
          <a
            href="https://www.louisianabelieves.com/resources/library/early-childhood-families"
            target="_blank"
          >
            <img class="card-img-top" src="../assets/img/Families.png" alt="Card image cap" />
          </a>
          <a
            href="https://www.louisianabelieves.com/resources/library/early-childhood-families"
            target="_blank"
            class="card-link text-info"
          >
            <div class="card-body">
              <h5>Families</h5>
              <p class="card-text">
                <small>Learn about all the early childhood resources for families.</small>
              </p>
            </div>
          </a>
          <!-- <div class="card-footer text-muted">
            <a
              href="https://www.louisianabelieves.com/resources/library/early-childhood-families"
              target="_blank"
              class="card-link text-info"
            >Visit Resources</a>
          </div>-->
        </div>
      </div>
    </div>

    <div class="row m-2 d-flex justify-content-center">
      <div class="col-lg-4">
        <div class="card text-center mb-3" id="signup">
          <div class="card-header bg-primary text-light h5">New User?</div>
          <div class="card-body">
            <!--<h5 class="card-title">Get Started</h5>-->
            <!-- <p class="card-text">Register to be a Provider/Entity</p> -->
            <a
              class="btn btn-primary action-button text-white"
              role="button"
              href="https://my.la.gov/en-us/"
            >Sign Up</a>
          </div>
          <div class="card-footer text-muted">Register to be a Provider/Entity</div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="card text-center mb-3" id="login">
          <div class="card-header bg-accent text-light h5">Existing User?</div>
          <div class="card-body">
            <!--<h5 class="card-title">Get Started</h5>-->
            <!-- <p class="card-text">Enter email address linked to EdLink Security.</p> -->
            <button
              class="btn btn-accent action-button text-white"
              role="button"
              v-on:click="login"
            >Login</button>
            <!-- <Spinner v-bind:show="isBusy" /> -->
            <!-- <form>
              href="https://extag.iam.ea.la.gov/affwebservices/public/IECP/login.jsp?TYPE=33554433&REALMOID=06-000576a7-f8ea-1da5-a83a-68600a180000&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-haH5U8HCzW6yYh%2bte2eCiIvCk1dOeHHE%2bRrBRw8VuCQ4%2fttBS%2bE1UWR0Atx82WfZ&TARGET=-SM-HTTPS%3a%2f%2fextag%2eiam%2eea%2ela%2egov%2faffwebservices%2fredirectjsp%2fOneCitizenRedirect%2ejsp%3fSAMLRequest%3dhJLdjpswEIVfBfkeYyB-%2FWElW6UZVI2VbtElXq945MBBLYFOPCdm3rwNLVr3o9nY8M-%2Becz7N8uNaVdwGDUqsVCSkjD-%2Bslirpq-%2BKa1Z-%2FUMv1tA67k2hfyKckXO1jY8CLquo11MtSmDiLEweH3aH7Iz1MKXCq1QGZD7VP7-%2FqbH5pr0irVFcC5TIlagBuc34YfO05xFlXCCCsc4v8XbbFZE5iPk8SthiOpnBZD6Zi2SRiHgWx-%2BEkSZJZRLyXMaCbd1OILex6k9aVWMR8lvhscWSMTyMez-%2BhiOk9mSfiLeFsXXipxkxsyoAsBVytKKkVNQdBK0FJfAlEUHZycs4vMAIOmPVUyC25pIkRNvK-%2FaZNAjXZFCVOjo7DB1WeQF7pXUaKszXX2RKpeq-%2FJzDaWhC-%2Fu14TP30x-%2BFIvM3I5lErbGswh8HQz-%2Bf9h-%2F36bTTd2-%2FNRlko6mh8f0Hyu3LzbJMOp8B6oWTcmp-%2Ffdy375-%2BPR-%2BUt-%2Fdqt021Q7N241ILdwH-%2FEsppGFfkblf9K28VdhAJgsJuYtaVbp7NCCs42dN6-%2FAF60H179td-%2FwEAAP-%2F-%2FAwA-%3D%26RelayState%3dBMHbkoIgAADQL2qmC154TFRMzVum6MuO4WpE4pJF6tfvOaizfRP9NbwKtBW6Hi-%2bdw9pe0UFJ8fBK0jx9ZTLa2sG4XWX8jKKs-%2bOoClOR5sm0sZDXKT1TtMzq5W-%2btHXxgzl-%2fu23sdJfgLpDQWW3BVvQ1hTsmDj8OXn1yVHvbdJwyylJu16sOsfRQznQZAvV6vP3TyeDaRkFCbYcTWn3nf3axNA-%2bC5G1gxTKDkkH6xXPSYXAstjfW7X4Yai36ms2jCNA50KEBik5aaepRCXHMiNSBKy8xk8T7M1xZqNteOHhScNqF4oG0SKij7vBjy-%2bbqwhLaD-%2fAAAA-%2f-%2f8DAA-%3d-%3d%26SigAlg%3dhttp-%3A-%2F-%2Fwww%2ew3%2eorg-%2F2001-%2F04-%2Fxmldsig--more-%23rsa--sha256%26Signature%3dRBdD-%2bSccL1cmP6AENWJD8SMw4wUe6CD-%2bjGq6jZfC357Hlln9AHrHQn7sr3V-%2bDDvh-%2bTNhFEMHmp0rBEmR0iE4W4ysDA7hsA-%2f9I0PrlgbwnBWKhAASmxqngMuQCP-%2bC-%2fWnd5hfZSvVKM9M7iRP2JDK1OkX09ARfjCopZmMLgdlqMedhJ-%2fLIawz1smZlX08oS4UdKsACVF8uYasVleFChkpL-%2fa-%2f-%2b7Gpf32lBeJC82sgjUUBG2cNKNAXqNdb0-%2bCpEWR2yJi-%2fYzYVUlJHLOwpdSjCwS5XWBqQXOBmauEfWA-%2b3vzWTv-%2fSZSe7UPPGjHEwyLpDWU6A-%2bAbHT-%2b4MvIhKtZxX6t2w-%3d-%3d%26SMPORTALURL%3dhttps-%3A-%2F-%2Fextag%2eiam%2eea%2ela%2egov-%2Faffwebservices-%2Fpublic-%2Fsaml2sso"
              <div class="row">
                <div class="col-12 col-md-12">
                  <div class="form-group">
                    <label class="label" for="sampleTextInput">Email</label>
                    <input
                      type="text"
                      id="sampleTextInput"
                      placeholder="Email Address"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <button type="submit" class="btn btn-success mr-1">Login</button>
                  <button type="submit" class="btn btn-ui btn-light ml-1">Cancel</button>
                </div>
              </div>
            </form>-->
          </div>
          <div class="card-footer text-muted">
            <a
              href="https://my.la.gov/en-us/Help"
              target="_blank"
              class="card-link text-info"
            >Forgot Password?</a>
                          <!-- <pre>
  <code>
{{forecasts}}
  </code>
</pre> -->
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Credentials } from "../models/credentials.interface";
import Carousel from "@/components/Carousel.vue";
import Spinner from "@/components/Spinner.vue"; // @ is an alias to /src

@Component({
  components: {
    Carousel
  }
})
export default class MainBody extends Vue {
  @Prop() private msg!: string;

  public forecasts = [];

  public created() {
    // fetch("weatherforecast")
    //   .then(res => res.json())
    //   .then(forecasts => {
    //     this.forecasts = forecasts;
    //   });
  }

  private isBusy = false;
  private errors = "";
  private credentials = {} as Credentials;

  private login() {
    this.credentials.userName = "John Doe";
    this.credentials.password = "password";
    this.isBusy = true;
    this.$store
      .dispatch("auth/authRequest", this.credentials)
      .then(result => {
        console.log("logged in");
        this.$router.push("/welcome");
      })
      .catch(err => {
        this.errors = err;
      })
      .then(() => {
        this.isBusy = false;
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

/* 
.card-img-top:hover {
  opacity: 1.5;
  transform: scale(1.2, 1.2);
}

.card-img-top:hover::after {
  opacity: 1;
}

.card-body:hover {
  opacity: 1.5;
  transform: scale(1.2, 1.2);
}

.card-body:hover::after {
  opacity: 1;
} 
*/

.entity-card:hover {
  opacity: 1.5;
  transform: scale(1.2, 1.2);
  z-index: 1000;
}

.entity-card:hover::after {
  opacity: 1;
}

.action-button:hover {
  opacity: 1.5;
  transform: scale(1.2, 1.2);
}

.action-button:hover::after {
  opacity: 1;
}

.card-img-top {
  width: 60%;
  height: 60%;
}

p.card-text {
  font-size: 90% !important;
  /* transform: scale(0.75,0.75); */
}

/*Extra small devices (portrait phones, less than 576px)
No media query since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media screen and (max-width: 600px) {
  #mainLogo {
    width: 100%;
    display: flex !important;
    justify-content: flex-start !important;
    transform: scale(0.65, 0.65);
  }
}

@media screen and (min-width: 576px) {
  #mainLogo {
    width: 50%;
    height: 50%;
    /* display: flex !important;
    justify-content: flex-end !important; */
    transform: scale(0.65, 0.65);
  }
}

/* Medium devices (tablets, 768px and up) */
/* @media (min-width: 768px) { ... } */

/* Large devices (desktops, 992px and up) */
/* @media (min-width: 992px) { ... } */

/* Extra large devices (large desktops, 1200px and up) */
/* @media (min-width: 1200px) { ... } */
</style>
