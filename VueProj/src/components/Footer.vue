<template>
    <div class="footer-clean bg-primary text-white">
        <footer>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-sm-4 col-md-3 item">
                        <h3 class="text-white">Louisiana Department of Education</h3>
                        <ul>
                            <!-- <li><h3 class="text-white">Louisiana Department of Education</h3></li> -->
                            <li><a target="_blank" href="https://www.google.com/maps?f=q&hl=en&geocode&q=1201+N+3rd+St,+Baton+Rouge,+LA+70802&sll=30.339695,-91.597137&sspn=0.794089,1.121979&ie=UTF8&t=h&om=0&g=1201+N+3rd+St,+Baton+Rouge,+LA+70802&ll=30.46717,-91.185064&spn=0.03551,0.054932&z=14&iwloc=addr&source=embed">1201 North Third Street, Baton Rouge, LA 70802-5243</a></li>
                            <li>Toll-Free: 1.877.453.2721</li>
                            <li><a href="https://www.louisianabelieves.com/" target="_blank">Louisianabelieves.com</a></li>
                            <!-- <li>
                                <a href="https://www.louisianabelieves.com/resources/contact-us" target="_blank">
                                    <span class="fa fa-envelope"></span> Contact Us
                                </a>
                            </li> -->
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>REPORT CHILD ABUSE</h3><!-- &nbsp;&nbsp;<a href="#" data-toggle="tooltip" title="Child Abuse Form"><span class="fa fa-file-alt text-primary-10"></span></a> -->
                        <ul>
                            <li>Toll-Free:</li>
                            <li>1.855.4LA.KIDS</li>
                            <li>(1.855.452.5437)</li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>REPORT CHILD COMPLAINTS ABOUT CHILD CARE PROVIDERS OR UNLICENSED SITES</h3>
                        <ul>
                            <li>Toll-Free:225.342.9905</li>
                            <li>LDELicensing@la.gov</li>
                        </ul>
                    </div>
                    <!-- <div class="col-sm-4 col-md-3 item">
                        <h3>Contact</h3>
                        <ul>
                            <li><a href="http://www.dss.state.la.us/page/137" target="_blank">DCFS</a></li>
                            <li><a href="https://www.louisianabelieves.com/resources/contact-us" target="_blank">LDOE</a></li>
                            <li>
                                <a href="https://www.louisianabelieves.com/resources/contact-us" target="_blank">
                                    <span class="fa fa-envelope"></span> Email Us
                                </a>
                            </li>
                            <li>
                                <a href="https://www.louisianabelieves.com/resources/contact-us" target="_blank">
                                    <span class="fa fa-phone"></span> Call Us
                                </a>
                            </li>
                        </ul>
                    </div> -->
                    <!--<div class="col-md-6 text-center text-md-center">
                        <a href="internal.html" class="btn btn-secondary">
                            <span class="fa fa-envelope"></span> Email Us
                        </a>
                        <a href="internal.html" class="btn btn-secondary">
                            <span class="fa fa-phone"></span> Call Us
                        </a>
                    </div>-->
                    <div class="col-sm-4 col-md-3 item social">
                    
                        <a class="mr-2" href="https://www.facebook.com/LaEducation" target="_blank"><i class="icon ion-social-facebook"></i></a>
                        <a class="mr-2" href="https://twitter.com/la_believes" target="_blank"><i class="icon ion-social-twitter"></i></a>
                        <a class="mr-2" href="https://www.youtube.com/user/LDEcomm" target="_blank"><i class="icon ion-social-youtube"></i></a>
                        <a class="mr-5" href="https://www.instagram.com/la_believes/" target="_blank"><i class="icon ion-social-instagram"></i></a>
                    
                        <p class="copyright d-flex justify-content-center">Louisiana Department of Education &#169; 2023</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {

}
</script>

<style scoped>
@import "../assets/css/Footer-Clean.css";
@import "../assets/fonts/ionicons.min.css";

h3 {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: white;
    margin-bottom: 5px !important;
}

.footer-clean {
    padding: 15px 0 !important;
}

</style>