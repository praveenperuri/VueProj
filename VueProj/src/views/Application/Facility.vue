<template>
    <div>
      <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <h5 class="header-black">EARLY LEARNING CENTER INFORMATION</h5>
              <label for="ELCName">ELC Name(as it will appear on School Finder)</label>
              <input type="text" class="form-control" id="ELCName" placeholder value required />
              <div class="invalid-feedback">Valid Federal EIN is required.</div>
            </div>
            <div class="col-sm-6"></div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <label for="Physicaladdress">Physical Address</label>
              <input
                type="text"
                class="form-control"
                id="physicalAddress"
                placeholder="1234 Main St"
                value
                required
              />
              <div class="invalid-feedback">Physical Address is required.</div>
            </div>
            <div class="col-sm-6">
              <label for="city">City</label>
              <input type="text" class="form-control" id="city" placeholder value required />
              <div class="invalid-feedback">Valid City is required.</div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <label for="state">State</label>
              <input type="text" class="form-control" id="state" placeholder value required />
              <div class="invalid-feedback">State is required.</div>
            </div>
            <div class="col-sm-4">
              <label for="zip">ZIP</label>
              <input type="text" class="form-control" id="ZIP" placeholder value required />
              <div class="invalid-feedback">ZIP is required.</div>
            </div>
            <div class="col-sm-4">
              <label for="parish">Parish</label>
              <input type="text" class="form-control" id="parish" placeholder value required />
              <div class="invalid-feedback">Parish is required.</div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <label for="mailingaddress">Mailing Address</label>
              <input
                type="text"
                class="form-control"
                id="mailingAddress"
                placeholder="1234 Main St"
                value
                required
              />
              <div class="invalid-feedback">Physical Address is required.</div>
            </div>
            <div class="col-sm-6">
              <label for="mailingcity">City</label>
              <input type="text" class="form-control" id="mailingcity" placeholder value required />
              <div class="invalid-feedback">Valid City is required.</div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-4">
              <label for="mailingstate">State</label>
              <input type="text" class="form-control" id="mailingstate" placeholder value required />
              <div class="invalid-feedback">State is required.</div>
            </div>
            <div class="col-sm-4">
              <label for="mailingzip">ZIP</label>
              <input type="text" class="form-control" id="mailingZIP" placeholder value required />
              <div class="invalid-feedback">ZIP is required.</div>
            </div>
            <div class="col-sm-4">
              <label for="mailingparish">Parish</label>
              <input type="text" class="form-control" id="mailingparish" placeholder value required />
              <div class="invalid-feedback">Parish is required.</div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <label for="elctelephone">ELC Telephone Number</label>
              <input type="text" class="form-control" id="elctelephone" placeholder value required />
            </div>
            <div class="col-sm-6">
              <label for="officetelephone">Office Telephone Number</label>
              <input
                type="text"
                class="form-control"
                id="officetelephone"
                placeholder
                value
                required
              />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <label for="notificationemail">Notification Email Address</label>
              <input
                type="text"
                class="form-control"
                id="notificationemail"
                placeholder="you@example.com"
                value
                required
              />
            </div>
            <div class="col-sm-6">
              <label for="elcwebsite">ELC Website Address</label>
              <input type="text" class="form-control" id="elcwebsite" placeholder value required />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <label for="facebook">ELC Facebook Address</label>
              <input type="text" class="form-control" id="facebook" placeholder value required />
            </div>
            <div class="col-sm-6">
              <label for="twitter">ELC Twitter Address</label>
              <input type="text" class="form-control" id="twitter" placeholder value required />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <label for="location">Where is your Facility Located(i.e. School , Stand alone)</label>
              <select class="form-control" id="location" name="sellist1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6"></div>
            <div class="col-sm-6">
              <button type="button" class="btn btn-success">Save</button>
              <button type="button" class="btn btn-info">Save & Continue</button>
            </div>
          </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class Facility extends Vue {}
</script>