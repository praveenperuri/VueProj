<template>
  <div class="home">

    <Navbar />
    <div class="row-cols-1 mt-1">
      <div
        class="alert alert-warning text-white bg-warning border-dark"
        role="alert"
        
      >
        <span>
          <strong>IMPORTANT: Due to COVID-19 we have made some changes to the licensing process. &nbsp;&nbsp;</strong>
          <!-- <a
            class="alert-link"
            data-bs-hover-animate="shake"
            href="https://www.louisianabelieves.com/resources/covid-19"
            target="_blank"
          >Click here for more information.</a>
          <strong>&nbsp;&nbsp;</strong> -->

          <a data-toggle="collapse" href="#announcementsCollapse" role="button" aria-expanded="false" aria-controls="announcementsCollapse">
						<strong>Click here for more information</strong>. &thinsp;<i class="fas fa-angle-down"></i>
					</a>
        </span>
      </div>
    </div>
    <div class="collapse py-2 alert alert-warning" id="announcementsCollapse">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6 col-lg-5">
					<div class="media">
						<!-- <img src="https://isralduke-site-files.s3.amazonaws.com/images/icon-dot-gov.svg" alt="" class="align-self-start img-official"> -->
						<div class="media-body ml-2">
							<p class=" mb-0">
                <strong>
                <a class="alert-link"
                   data-bs-hover-animate="shake"
                   href="https://www.louisianabelieves.com/resources/covid-19"
                   target="_blank">Placeholder link</a>
                </strong>
              </p>
							<p class=" mb-0">Some text description</p>
						</div>
					</div>
				</div>
				<div class="col-12 col-md-6 col-lg-5 offset-lg-1">
					<div class="media">
						<!-- <img src="https://isralduke-site-files.s3.amazonaws.com/images/icon-https.svg" alt="" class="align-self-start img-official"> -->
						<div class="media-body ml-2">
									<p class=" mb-0">
                <strong>
                <a class="alert-link"
                   data-bs-hover-animate="shake"
                   href="https://www.louisianabelieves.com/resources/covid-19"
                   target="_blank">Placeholder link</a>
                </strong>
              </p>
							<p class=" mb-0">Some text description</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


    <MainBody msg="Welcome, Louisiana Families and Educators" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar.vue"; // @ is an alias to /src
import MainBody from "@/components/MainBody.vue"; // @ is an alias to /src


@Component({
  components: {
    Navbar,
    MainBody
  }
})
export default class Home extends Vue {}
</script>
