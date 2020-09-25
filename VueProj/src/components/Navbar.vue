
<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">

            <router-link class="navbar-brand" to="/">
                <!-- <img class="navLogo" src="../assets/img/edlink-logo.png" > -->
                <img src="../assets/img/LDOE-Logo.svg" alt="LDOE">
            </router-link> 

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto col-md-4">

                <li class="nav-item dropdown ml-1 mr-2">
                    <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true">
                        Resources
                    </a>
                    <div class="dropdown-menu" role="menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" role="presentation" href="https://www.irs.gov/" target="_blank">IRS</a>
                        <a class="dropdown-item" role="presentation" href="https://cafe-cp.dcfs.la.gov/providerservice/selfserviceJSPController?id=0.5651109250932688&tab=1" target="_blank">Important Links</a>
                        <a class="dropdown-item" role="presentation" href="https://www.louisianabelieves.com/resources/covid-19" target="_blank">COVID-19</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" role="presentation" href="https://www.louisianabelieves.com/resources/classroom-support/teacher-support-toolbox" target="_blank">Tools</a>
                        <a class="dropdown-item" role="presentation" href="https://urldefense.proofpoint.com/v2/url?u=https-3A__www.louisianabelieves.com_docs_default-2Dsource_early-2Dchildhood_guidance-2Don-2Dthe-2Ddifferent-2Dlicense-2Dtypes.pdf-3Fsfvrsn-3Dea979d1f-5F2&d=DwMFaQ&c=xlPCXuHzMdaH2Flc1sgyicYpGQbQbU9KDEmgNF3_wI0&r=7TbWb-vSo8FsfTb2pudmUShKs2zmYCJTJAUGLhdABTc&m=aegkHVZDWrwOyBhPgYCyDpFVyX0fuGXCDzJKWkucNxI&s=vyt4u-7sF7iFyOydNwqkHOViS06D4hunGRUL9KXwsxI&e=" target="_blank">Provider Guidance</a>
                    </div>
                </li>
                <li class="nav-item ml-1 mr-2">
                    <router-link class="nav-link text-white" to="/departments">Departments</router-link>
                </li>
                <li class="nav-item ml-1 mr-2">
                    <router-link class="nav-link text-white" to="/about">About</router-link>
                </li>
            </ul>
            <!-- <div class="search-form search-form-nav mr-2">
                <div class="input-group">
                    <input type="search" class="form-control" aria-label="Search" aria-describedby="searchButton">
                    <div class="input-group-append">
                        <button class="btn btn-ui btn-secondary" type="button" id="searchButton">
                            <span class="fa fa-search text-white"></span>
                            <span class="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </div> -->
       
            <!-- <button class="btn btn-outline-success my-2 my-sm-0" type="button" v-on:click="visitSignIn($event)">Log In</button> -->
            <!-- <button class="btn btn-outline-primary my-2 my-sm-0 m-2" type="button" v-on:click="visitSignUp($event)">Sign Up</button> -->
            <div class="col-md-4">
                <!-- <div class="official-banner" role="contentinfo" id="OfficialBanner"> -->
				<div class="media align-items-center nav-item">
					<!-- <img src="https://isralduke-site-files.s3.amazonaws.com/images/Louisiana-State-Seal.png" alt="Louisiana State Seal." class="img-official"> -->
					<div class="media-body ml-2">
						<p class="mt-lg-1 mb-0 text-white">An official Louisiana.gov website.
							<br class="d-block d-md-none">
							<a class="text-white" data-toggle="collapse" href="#officialCollapse" role="button" aria-expanded="false" aria-controls="officialCollapse">
								<strong class="text-white">Here&rsquo;s how you know</strong>. &thinsp;<i class="fas fa-angle-down"></i>
							</a>
						</p>
					</div>
				</div>
                <!-- </div> -->
            </div>
            
                    <div class="col-md-4 order-lg-1 text-lg-right">
                        <div class="btn-group ml-n2 ml-lg-2" role="group" aria-label="Language Selector Buttons">
                            <button type="button" id="Language-Use-English" name="Language-Use-English" class="btn btn-link btn-sm text-white font-weight-bold">English</button>
                            <button type="button" id="Language-Use-Espanol" name="Language-Use-Espanol" class="btn btn-link btn-sm text-white">español</button>
                            <button type="button" id="Language-Use-Francais" name="Language-Use-Francais" class="btn btn-link btn-sm text-white">français</button>
                            <button type="button" id="Language-Use-Vietnamese" name="Language-Use-Vietnamese" class="btn btn-link btn-sm text-white">Tiếng Việt</button>
                        </div>
                    </div>
            
        </div>
    </nav>
    	<div class="collapse py-2 bg-dark text-white" id="officialCollapse">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6 col-lg-5">
					<div class="media">
						<img src="https://isralduke-site-files.s3.amazonaws.com/images/icon-dot-gov.svg" alt="" class="align-self-start img-official">
						<div class="media-body ml-2">
							<p class=" mb-0"><strong>The .gov means it&rsquo;s official.</strong></p>
							<p class=" mb-0">Louisiana government websites often end in .gov. Before sharing sensitive information, make sure
								you&rsquo;re on a Louisiana government site.</p>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-5 offset-lg-1">
					<div class="media">
						<img src="https://isralduke-site-files.s3.amazonaws.com/images/icon-https.svg" alt="" class="align-self-start img-official">
						<div class="media-body ml-2">
							<p class=" mb-0"><strong>The site is secure. </strong></p>
							<p class=" mb-0">The <strong>https://</strong> ensures that you are connecting to the official website and that
								any information you provide is encrypted and transmitted securely.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue{

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

@media only screen and (min-width: 768px), only screen and (min-device-width: 768px), only screen and (max-width: 1024px), only screen and (max-device-width: 1024px) and (orientation: portrait) {
    .nav li {
        text-align: center;
    }
}
</style>