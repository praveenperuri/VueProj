<template>
  <div>
    <WelcomeNavBar />
    <div class="container-fluid">
      <div class="row-cols-1 m-1 p-1">
        <div id="pageTitle" class="page-title p-0">
          <div class="row">
            <div class="col-12 d-lg-flex justify-content-lg-left align-items-left">
              <div>
                <h5 class="font-weight-light text-dark">
                  <!-- <span class="fa fa-home text-primary-10"></span> -->
                  Dashboard for {{msg}}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7 col-sm-7">
          <div class="row-cols-1">
            <div class="card mb-3" id="welcome-user-card">
              <div class="row no-gutters">
                <div class="col-sm-2 p-5 my-auto">
                  <img
                    style="width: 70px; height: 70px;"
                    src="../assets/img/opportunity-icon.svg"
                    class="card-img"
                    alt="..."
                  />
                </div>
                <div class="col-sm-10">
                  <div
                    class="card-body d-sm-flex flex-column justify-content-sm-start align-items-start my-auto"
                  >
                    <h5>Welcome {{msg}}!</h5>
                    <p class="d-sm-flex flex-column justify-content-sm-left align-items-left">
                      <small>
                        What is the EdLink Entity Portal? The Entity Portal is a tool to submit applications, manage your site, and update valuable information.
                        <br />Why am I here? As a new applicant, you will be able to submit a new application or request account access to an existing site.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row-cols-1">
            <router-link to="/help">
              <div class="card mb-3 hoverable">
                <div class="row no-gutters">
                  <div class="col-sm-2 p-5 my-auto">
                    <img
                      style="width: 70px; height: 70px;"
                      src="../assets/img/helper-icon.svg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-sm-10">
                    <div
                      class="card-body my-auto d-sm-flex flex-column justify-content-sm-start align-items-start"
                    >
                      <h5>Help Me Decide</h5>
                      <p class="d-sm-flex flex-column justify-content-sm-left align-items-left">
                        <small>
                          Not sure which application type is right for your business? Click here to get information on all the different types.
                          The Provider Wizard is also available to guide you in the right direction based on answers to some questions about your business.
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>

          <div class="row-cols-1">
            <router-link to="/application">
              <div class="card mb-3 hoverable">
                <div class="row no-gutters">
                  <div class="col-sm-2 p-5 my-auto">
                    <img
                      style="width: 70px; height: 70px;"
                      src="../assets/img/checklist-icon.svg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-sm-10">
                    <div
                      class="card-body d-sm-flex flex-column justify-content-sm-start align-items-start my-6"
                    >
                      <h5>Submit a New Application</h5>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-5 col-sm-5">
          <div class="card hoverable">
            <div class="card-header d-sm-flex flex-column align-items-start m-1">
              <h5 class="m-1">Active Applications</h5>
            </div>
            <div class="card-body">
              <table class="table table-responsive">
                <thead>
                  <tr>
                    <th scope="col">Application ID</th>
                    <th scope="col">Type</th>
                    <th scope="col">Status</th>
                    <th scope="col">Last Update</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>000111222333</td>
                    <td>Charter School</td>
                    <td>
                      Incomplete
                      <span class="fa fa-exclamation-triangle"></span>
                    </td>
                    <td>9/10/2020</td>
                    <td>
                      <button class="btn btn-primary" type="button">
                        <small class="text-white">Edit</small>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>000111222444</td>
                    <td>ABC Early Learning Center</td>
                    <td>
                      Submitted
                      <span class="fa fa-check-square"></span>
                    </td>
                    <td>9/1/2020</td>
                    <td>
                      <button class="btn btn-secondary" type="button">
                        <small class="text-white">View</small>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import WelcomeNavBar from "@/components/WelcomeNavBar.vue";

@Component({
  components: {
    WelcomeNavBar
  }
})
export default class WelcomeBody extends Vue {
  @Prop() msg!: string;

  public forecasts = [];

  public created() {
    fetch("weatherforecast/getWeather")
      .then(res => res.json())
      .then(forecasts => {
        this.forecasts = forecasts;
      });
  }
}
</script>

<style scoped>
p {
  text-align: left;
}

#welcome-user-card {
  background: rgba(196, 196, 196, 0.5);
}

.card {
  box-shadow: none !important;
}

.hoverable:hover {
  box-shadow: 5px 10px 8px rgb(44, 62, 80) !important;
  transition: box-shadow 0.3s ease-in-out !important;
  transform: scale(1.1, 1.1);
}

.btn {
  width: 75px;
}

.table tr td {
  vertical-align: center !important;
}

tr:hover {
  background-color: rgba(196, 196, 196, 0.5);
}

tr:hover td {
  background-color: transparent; /* or #000 */
}

/*Extra small devices (portrait phones, less than 576px)
No media query since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media screen and (max-width: 600px) {
  /* #mainLogo {
    width: 100%;
    display: flex !important;
    justify-content: flex-start !important;
    transform: scale(0.65, 0.65);
  } */
}

@media screen and (min-width: 576px) {
  /* #mainLogo {
    width:50%;
    height:50%;
    display: flex !important;
    justify-content: flex-end !important; 
    transform: scale(0.65, 0.65);
  } */

  .btn {
    width: auto;
    height: auto;
  }

  .container-fluid {
    font-size: 75%;
  }
}

/* Medium devices (tablets, 768px and up) */
/* @media (min-width: 768px) { ... } */

/* Large devices (desktops, 992px and up) */
/* @media (min-width: 992px) { ... } */

/* Extra large devices (large desktops, 1200px and up) */
/* @media (min-width: 1200px) { ... } */
</style>