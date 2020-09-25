<template>
  <div>
    <div class="container border">
      <h6>INITIAL APPLICATION FOR LICENSE TO OPERATE AN EARLY LEARNING CENTER</h6>
      <p>Important Notes</p>
      <p class="text-justify">
        A License is required PRIOR to opening. An initial application fee of S25.00 is required. Additional license
        fees, if any as required by the minimum standards, are due after initial survey and prior to issuance of a
        license. All fees ore to be paid by CERTIFIED CHECK, GOVERNMENT CHECK, OR MONEYORDER mode
        payable to the Louisiana Department of Education.
      </p>
      <p class="text-danger">Do NOT send cash, business or personal checks. Fees are NON-REFUNDABLE.</p>
    </div>

    <div class="container border">
      <h6>THE FOLLOWING ITEMS MUST BE SUBMITTED IN EDLINK BEFORE YOUR APPLICATION IS CONSIDERED COMPLETED:</h6>

      <div class="row">
        <div class="col-12 mb-3">
          <p>1) Completed Licensing Application in Edlink</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 mb-3">
          <p>2) Supporting Document Uploads (Check that you acknowledge these are required):</p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 mb-3">
          <input type="checkbox" class="custom-control-input" id="submiteddoc1" />
          <label class="custom-control-label" for="submiteddoc1">List of all Staff and Positions</label>
        </div>
        <div class="col-sm-4 mb-3">
          <a href="#">Link</a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 mb-3">
          <input type="checkbox" class="custom-control-input" id="submiteddoc2" />
          <label class="custom-control-label" for="submiteddoc3">CCCBC for Owners and Directors</label>
        </div>
        <div class="col-sm-4 mb-3">
          <a href="#">Help</a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 mb-3">
          <input type="checkbox" class="custom-control-input" id="submiteddoc3" />
          <label
            class="custom-control-label"
            for="submiteddoc3"
          >Current Commercial Liability Insurance</label>
        </div>
        <div class="col-sm-4 mb-3">
          <a href="#">Link</a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 mb-3">
          <input type="checkbox" class="custom-control-input" id="submiteddoc4" />
          <label
            class="custom-control-label"
            for="submiteddoc4"
          >Current State Fire Marshall Approval</label>
        </div>
        <div class="col-sm-4 mb-3">
          <a href="#">Link</a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 mb-3">
          <input type="checkbox" class="custom-control-input" id="submiteddoc5" />
          <label
            class="custom-control-label"
            for="submiteddoc5"
          >Current Office of Public Health Approval</label>
        </div>
        <div class="col-sm-4 mb-3">
          <a href="#">Link</a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 mb-3">
          <input type="checkbox" class="custom-control-input" id="submiteddoc6" />
          <label
            class="custom-control-label"
            for="submiteddoc6"
          >City Fire Department Approval (Required in New Orleans are only)</label>
        </div>
        <div class="col-sm-4 mb-3">
          <a href="#">Link</a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 mb-3">
          <input type="checkbox" class="custom-control-input" id="submiteddoc7" />
          <label class="custom-control-label" for="submiteddoc7">
            Zoning (Required in St. Benard Parish, St. Charles Parish, City of New Orleans, Shreveport, Baton Rouge, Minden,
            Bossier City, Amite, Zachary and Monroe)
          </label>
        </div>
        <div class="col-sm-4 mb-3">
          <a href="#">Link</a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 mb-3">
          <input type="checkbox" class="custom-control-input" id="submiteddoc8" />
          <label
            class="custom-control-label"
            for="submiteddoc8"
          >Pictures of the Center’s front entrance, direct exit to playground and playground</label>
        </div>
        <div class="col-sm-4 mb-3">
          <a href="#">Link</a>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 mb-3">
          <p>3) Academic Approval is Required of all Type III Centers</p>
        </div>
      </div>
      <br />

      <br />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
export default class Instructions extends Vue {}
</script>