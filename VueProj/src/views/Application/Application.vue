<template>
  <!-- <div class="application">
    <ApplicationContainer />
  </div> -->
  <div>
    <WelcomeNavBar />
    <div class="container-fluid">
      <div class="row-cols-1 m-1 p-1">
        <div id="pageTitle" class="page-title p-0">
          <div class="row">
            <div
              class="col-4 d-lg-flex justify-content-lg-left align-items-left"
            >
              <h3 class="font-weight-bold text-dark">
                <strong>Type 3 Application</strong>
              </h3>
            </div>
            <div class="col-4 ">
              <h4 class="font-weight-light text-dark">
                <strong>Application Instructions {{ sectionName }} </strong>
              </h4>
            </div>
            <div class="col-4 align-items-right justify-content-lg-right">
              <router-link to="/welcome" exact>
                <h4 class="font-weight-light text-dark align-content-end">
                  <img
                    src="../../assets/img/back2DashArrow.svg"
                    alt="Back to Dashboard"
                  />&nbsp;&nbsp;<strong>Back to Dashboard</strong>
                </h4>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="container-fluid m-2 p-2">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3">
              <div class="row-cols-1">
                <div class="card mb-2">
                  <router-link to="/application/instructions">  <!-- :to="{ name: 'Instructions' }" exact -->
                    <div class="card-body">
                      Application Instructions
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="row-cols-1">
                <div class="card">
                  <!--Funding source--> 
                  <div class="card-body">
                    <router-link to="/application/funding" exact> <!--:to="{ name: 'Funding' }" -->
                      <span class="float-left p-1"
                        ><img
                          class="app-section-icon"
                          src="../../assets/img/university.svg"
                          alt="university"
                        /><strong class="p-1 m-1">Funding Source</strong></span
                      ><span class="float-right p-1 mt-1"
                        ><img src="../../assets/img/plus-circle.svg" alt="new"
                      /></span>
                    </router-link>
                  </div>
                  <!--Facility Information-->
                  <div class="card-body"> 
                    <router-link to="/application/facility" exact>  <!-- :to="{ name: 'Facility' }" -->
                      <span class="float-left p-1"
                        ><img
                          class="app-section-icon"
                          src="../../assets/img/school.svg"
                          alt="university"
                        /><strong class="p-1 m-1"
                          >Facility Information</strong
                        ></span
                      ><span class="float-right p-1 mt-1"
                        ><img src="../../assets/img/plus-circle.svg" alt="new"
                      /></span>
                    </router-link>
                  </div>
                  <!--Ownership Type-->
                  <div class="card-body">
                    <router-link to="/newApplication3/ownershipType">
                      <span class="float-left p-1"
                        ><img
                          class="app-section-icon"
                          src="../../assets/img/users.svg"
                          alt="university"
                        /><strong class="p-1 m-1">Ownership Type</strong></span
                      ><span class="float-right p-1 mt-1"
                        ><img src="../../assets/img/plus-circle.svg" alt="new"
                      /></span>
                    </router-link>
                  </div>
                  <!--Licensed Capacity-->
                  <div class="card-body">
                    <router-link to="/newApplication3/licensedCapacity">
                      <span class="float-left p-1"
                        ><img
                          class="app-section-icon"
                          src="../../assets/img/children.svg"
                          alt="university"
                        /><strong class="p-1 m-1"
                          >Licensed Capacity</strong
                        ></span
                      ><span class="float-right p-1 mt-1"
                        ><img src="../../assets/img/plus-circle.svg" alt="new"
                      /></span>
                    </router-link>
                  </div>
                  <!--Hours of Operation-->
                  <div class="card-body">
                    <router-link to="/newApplication3/hoursOfOperation">
                      <span class="float-left p-1"
                        ><img
                          class="app-section-icon"
                          src="../../assets/img/clock.svg"
                          alt="university"
                        /><strong class="p-1 m-1"
                          >Hours of Operation</strong
                        ></span
                      ><span class="float-right p-1 mt-1"
                        ><img src="../../assets/img/plus-circle.svg" alt="new"
                      /></span>
                    </router-link>
                  </div>
                  <!--Center Owner-->
                  <div class="card-body">
                    <router-link to="/newApplication3/centerOwner">
                      <span class="float-left p-1"
                        ><img
                          class="app-section-icon"
                          src="../../assets/img/owner.svg"
                          alt="university"
                        /><strong class="p-1 m-1">Center Owner</strong></span
                      ><span class="float-right p-1 mt-1"
                        ><img src="../../assets/img/plus-circle.svg" alt="new"
                      /></span>
                    </router-link>
                  </div>
                  <!--Center Director-->
                  <div class="card-body">
                    <router-link to="/newApplication3/centerDirector">
                      <span class="float-left p-1"
                        ><img
                          class="app-section-icon"
                          src="../../assets/img/center-director.svg"
                          alt="university"
                        /><strong class="p-1 m-1">Center Director</strong></span
                      ><span class="float-right p-1 mt-1"
                        ><img src="../../assets/img/plus-circle.svg" alt="new"
                      /></span>
                    </router-link>
                  </div>
                  <!--Center Designee-->
                  <div class="card-body">
                    <router-link to="/newApplication3/centerDesignee">
                      <span class="float-left p-1"
                        ><img
                          class="app-section-icon"
                          src="../../assets/img/center-designee.svg"
                          alt="university"
                        /><strong class="p-1 m-1">Center Designee</strong></span
                      ><span class="float-right p-1 mt-1"
                        ><img src="../../assets/img/plus-circle.svg" alt="new"
                      /></span>
                    </router-link>
                  </div>
                  <!--Background Check-->
                  <div class="card-body">
                    <router-link to="/newApplication3/backgroundCheck">
                      <span class="float-left p-1"
                        ><img
                          class="app-section-icon"
                          src="../../assets/img/user-secret.svg"
                          alt="university"
                        /><strong class="p-1 m-1"
                          >Background Check</strong
                        ></span
                      ><span class="float-right p-1 mt-1"
                        ><img src="../../assets/img/plus-circle.svg" alt="new"
                      /></span>
                    </router-link>
                  </div>
                  <!--Emergency Plan-->
                  <div class="card-body">
                    <router-link to="/newApplication3/emergencyPlan">
                      <span class="float-left p-1"
                        ><img
                          class="app-section-icon"
                          src="../../assets/img/emergency-plan.svg"
                          alt="university"
                        /><strong class="p-1 m-1">Emergency Plan</strong></span
                      ><span class="float-right p-1 mt-1"
                        ><img src="../../assets/img/plus-circle.svg" alt="new"
                      /></span>
                    </router-link>
                  </div>
                  <!--CCAP Application-->
                  <div class="card-body">
                    <router-link to="/newApplication3/ccapApplication">
                      <span class="float-left p-1"
                        ><img
                          class="app-section-icon"
                          src="../../assets/img/ccap-app.svg"
                          alt="university"
                        /><strong class="p-1 m-1"
                          >CCAP Application</strong
                        ></span
                      ><span class="float-right p-1 mt-1"
                        ><img src="../../assets/img/plus-circle.svg" alt="new"
                      /></span>
                    </router-link>
                  </div>
                  <!--Academic Approval-->
                  <div class="card-body">
                    <router-link to="/newApplication3/academicApproval">
                      <span class="float-left p-1"
                        ><img
                          class="app-section-icon"
                          src="../../assets/img/academic-approval.svg"
                          alt="university"
                        /><strong class="p-1 m-1"
                          >Academic Approval</strong
                        ></span
                      ><span class="float-right p-1 mt-1"
                        ><img src="../../assets/img/plus-circle.svg" alt="new"
                      /></span>
                    </router-link>
                  </div>
                  <!--Document Upload-->
                  <div class="card-body">
                    <router-link to="/newApplication3/documentUpload">
                      <span class="float-left p-1"
                        ><img
                          class="app-section-icon"
                          src="../../assets/img/folder-open.svg"
                          alt="university"
                        /><strong class="p-1 m-1">Document Upload</strong></span
                      ><span class="float-right p-1 mt-1"
                        ><img src="../../assets/img/plus-circle.svg" alt="new"
                      /></span>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="row-cols-1">
                <div class="card mt-2">
                  <router-link to="/newApplication3/checklist">
                    <div class="card-body">
                      Review Application
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-9 col-md-9 col-sm-9">
              <router-view :key="$route.path"></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import ApplicationContainer from "@/components/Application/ApplicationContainer.vue"; // @ is an alias to /src
import WelcomeNavBar from "@/components/WelcomeNavBar.vue";

@Component({
  components: {
    //ApplicationContainer
    WelcomeNavBar,
  }
})
export default class Application extends Vue {
  public sectionName = "";

  private getInstructions(section: string) {
    this.sectionName = section;
    this.$router.push("/newApplication/instructions");
  }

  private getFundingSource(section: string) {
    this.sectionName = section;
    this.$router.push("/newApplication/fundingSource");
  }
}
</script>

<style scoped>
strong {
  font-size: 80%;
}

.app-section-icon {
  width: 40px;
  height: 40px;
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
}

/* Medium devices (tablets, 768px and up) */
/* @media (min-width: 768px) { ... } */

/* Large devices (desktops, 992px and up) */
/* @media (min-width: 992px) { ... } */

/* Extra large devices (large desktops, 1200px and up) */
/* @media (min-width: 1200px) { ... } */
</style>
