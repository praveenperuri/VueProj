<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/welcome">
        <img src="../assets/img/EdLink-Logo-Light.svg" alt="EdLink" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto col-md-8">
          <li class="nav-item dropdown ml-1 mr-2">
            <a
              class="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
            >Resources</a>
            <div class="dropdown-menu" role="menu" aria-labelledby="navbarDropdown">
              <a
                class="dropdown-item"
                role="presentation"
                href="https://www.irs.gov/"
                target="_blank"
              >IRS</a>
              <a
                class="dropdown-item"
                role="presentation"
                href="https://cafe-cp.dcfs.la.gov/providerservice/selfserviceJSPController?id=0.5651109250932688&tab=1"
                target="_blank"
              >Important Links</a>
              <a
                class="dropdown-item"
                role="presentation"
                href="https://www.louisianabelieves.com/resources/covid-19"
                target="_blank"
              >COVID-19</a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                role="presentation"
                href="https://www.louisianabelieves.com/resources/classroom-support/teacher-support-toolbox"
                target="_blank"
              >Tools</a>
              <a
                class="dropdown-item"
                role="presentation"
                href="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.louisianabelieves.com_docs_default-2Dsource_early-2Dchildhood_guidance-2Don-2Dthe-2Ddifferent-2Dlicense-2Dtypes.pdf-3Fsfvrsn-3Dea979d1f-5F2&d=DwMFaQ&c=xlPCXuHzMdaH2Flc1sgyicYpGQbQbU9KDEmgNF3_wI0&r=7TbWb-vSo8FsfTb2pudmUShKs2zmYCJTJAUGLhdABTc&m=aegkHVZDWrwOyBhPgYCyDpFVyX0fuGXCDzJKWkucNxI&s=vyt4u-7sF7iFyOydNwqkHOViS06D4hunGRUL9KXwsxI&e="
                target="_blank"
              >Provider Guidance</a>
            </div>
          </li>
        </ul>
        <div class="col-sm-2 mr-auto ml-1 mr-2">
            <!-- <img src="../assets/img/user-icon.svg" alt="Username"> -->
            <!-- <router-link class="text-white ml-2 mb-0" to="/userProfile">John Doe</router-link> -->
            <ul class="navbar-nav mr-auto col-md-4">
          <li class="nav-item dropdown ml-2 mr-2">
            <router-link
              class="nav-link dropdown-toggle text-white"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
            ><img class="mr-2" src="../assets/img/user-icon.svg" alt="Username">John Doe</router-link>
            <div class="dropdown-menu" role="menu" aria-labelledby="navbarDropdown">
              <router-link
                class="dropdown-item"
                role="presentation"
                to="/userProfile"
                target="_blank"
              >Profile</router-link>
              <router-link
                class="dropdown-item"
                role="presentation"
                to="/"                
              >Log Out</router-link>             
            </div>
          </li>
        </ul>
        </div>
        <div class="col-sm-2">
            <ul class="navbar-nav mr-auto col-md-4">
          <li class="nav-item dropdown ml-2 mr-2">
            <a
              class="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
            ><img class="mr-2" src="../assets/img/menu-icon.svg" alt="Menu">Menu</a>
            <div class="dropdown-menu" role="menu" aria-labelledby="navbarDropdown">
              <a
                class="dropdown-item"
                role="presentation"
                href="https://www.irs.gov/"
                target="_blank"
              >Placeholder</a>
              <a
                class="dropdown-item"
                role="presentation"
                href="https://cafe-cp.dcfs.la.gov/providerservice/selfserviceJSPController?id=0.5651109250932688&tab=1"
                target="_blank"
              >Placeholder</a>
              <a
                class="dropdown-item"
                role="presentation"
                href="https://www.louisianabelieves.com/resources/covid-19"
                target="_blank"
              >Placeholder</a>
              <div class="dropdown-divider"></div>
              <a
                class="dropdown-item"
                role="presentation"
                href="https://www.louisianabelieves.com/resources/classroom-support/teacher-support-toolbox"
                target="_blank"
              >Placeholder</a>
              <a
                class="dropdown-item"
                role="presentation"
                href="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.louisianabelieves.com_docs_default-2Dsource_early-2Dchildhood_guidance-2Don-2Dthe-2Ddifferent-2Dlicense-2Dtypes.pdf-3Fsfvrsn-3Dea979d1f-5F2&d=DwMFaQ&c=xlPCXuHzMdaH2Flc1sgyicYpGQbQbU9KDEmgNF3_wI0&r=7TbWb-vSo8FsfTb2pudmUShKs2zmYCJTJAUGLhdABTc&m=aegkHVZDWrwOyBhPgYCyDpFVyX0fuGXCDzJKWkucNxI&s=vyt4u-7sF7iFyOydNwqkHOViS06D4hunGRUL9KXwsxI&e="
                target="_blank"
              >Placeholder</a>
            </div>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WelcomeNavBar extends Vue{

  public visitSignIn() {
    const url = 'https://extag.iam.ea.la.gov/affwebservices/public/IECP/login.jsp?TYPE=33554433&REALMOID=06-000576a7-f8ea-1da5-a83a-68600a180000&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-haH5U8HCzW6yYh%2bte2eCiIvCk1dOeHHE%2bRrBRw8VuCQ4%2fttBS%2bE1UWR0Atx82WfZ&TARGET=-SM-HTTPS%3a%2f%2fextag%2eiam%2eea%2ela%2egov%2faffwebservices%2fredirectjsp%2fOneCitizenRedirect%2ejsp%3fSAMLRequest%3dhJLdjpswEIVfBfke85-%2BAFbJKN6oaKduiTbpa9c4xhlgCm3pMyL59HViy6kW3t-%2BOZOed8ntXDtW2cC9cglMxRgH30sF4BbZuObHpzls-%2F8d8-%2FBOLZNArmCyNHZmI543jAMeIiw0rUX-%2Bn7gvT7tD-%2BzMW-%2BoKCYZKxtF9qvz-%2F1Nx8085RryVRFAQQSVsOxDBy2DztSYh9QgG4NtYvcnbbHIlyUdEgyBYhXfpZHJXslPEwi2MWJYmfJoslcl7mgHbeTgH0fDeaNLbkh77rp27kH8OIhEsSpzhL0niZJr-%2BQs7XhhaQ3uSkD2BD8amiNBW0xp7ihuFYXj1bVwE-%2FW2UUwDl7XnxrBvFuaEEAh56vSjI9Ic1TRBiydHRQ2i7jwe6XQyiimmi9ClkLWn3M4TU1Avh2PhVv8OByRs5nZPCoJfcv1YTL083n-%2FYb99m02P9lwQtRSW5scHdJ8rd-%2B820XQqZASq150u8X33alw-%2BP72f1He7arctlEXzdiPSUvsB-%2F1IKcDBWROlWYyvpJXSciUrw0kZtGjU8ak6N5Wd0b-%2FF560n179td-%2FwEAAP-%2F-%2FAwA-%3D%26RelayState%3dBMHZsoIgAADQL2oGsyQfA7dcyjCXemlERRG94eSWX3-%2fPwcxwT1jm4ukdN91yRGqqWxljdR4mx4czEdLHJN31NTLLUMbGBjErfvy6XgRtA7CzBrHICYUzyAAtm8V2a6NiobMHL95mdLzJcBdrL1Mi6lzwkiUabIcqAZFyGYnPs8chAg-%2fzUzQ-%2fUOrlu4-%2b9Iv-%2f9Wf1kw-%2b9sqnQCV50U-%2bN11H3G8hSDPJFp6kK0Du0POLTRGwbm-%2fHd1U01qF6fVACqVOAvgc1-%2fCrIHiYO5HYG0OOQW0BkLWeT7q-%2bdyrCjHvikuYqmoTzOVJLNHgGu1MrV-%2feecvgHAAD-%2f-%2fwMA%26SigAlg%3dhttp-%3A-%2F-%2Fwww%2ew3%2eorg-%2F2001-%2F04-%2Fxmldsig--more-%23rsa--sha256%26Signature%3dosnT6ufIGYX0wBqS1wqsmYhZhioeeVJtLYpvrUmXRTiQe4qfLXIliIHhqwbmMf6l6WTR5pwB-%2fGR4lOE66XnkMYkKEje6Wn0SgxVXjlvGgw-%2fIXo86MBfu-%2bHBSBqE3XbqKLaG-%2bP7z0KSqTz5Rwa5iNoPjvuMdcutZrZKUlfDBSqlU2XkQ-%2bEEmZLtQ4PcwqPciytOZK4hXDklswQ2RrNpjGWavqyuA6Jpnx3zkzoc1bnEo-%2bHJherlRQ33fgtzcHhwrrrrFV-%2fLuUy1L0Onc1oZ-%2bi9PBWUsQKknCUetMZul1hO5bqhviXGHMgNwrV8lskn2Ur4TBwVKCg7gNG-%2bNe5iNyKJw-%3d-%3d%26SMPORTALURL%3dhttps-%3A-%2F-%2Fextag%2eiam%2eea%2ela%2egov-%2Faffwebservices-%2Fpublic-%2Fsaml2sso';
    window.open(url, '_self');                
  }

  public visitSignUp() {
    const url = 'https://my.la.gov/en-us/';
    window.open(url,'_self');   
  }



  
}
</script>

<style scoped>
.navLogo {
    width: 150px;
    height: 50px;
    filter: contrast(50%);
}
</style>