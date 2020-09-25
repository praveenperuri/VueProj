<template>
  <div>
    <div class="container border-bottom">
      <h5 class="float-left">FUNDING SOURCE</h5>
      <br />
      <p>How will your facility be funded?(Check all that Apply)</p>
      <br />
      <div class="row">
        <div class="col-sm-4 mb-3">
          <input type="checkbox" class="custom-control-input" id="fund-source1" />
          <label class="custom-control-label" for="fund-source1">Private Pay</label>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 mb-3">
          <input type="checkbox" class="custom-control-input" id="fund-source2" />
          <label class="custom-control-label" for="fund-source2">Child Nutrition Program</label>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 mb-3">
          <input type="checkbox" class="custom-control-input" id="fund-source3" />
          <label class="custom-control-label" for="fund-source3">Head Start</label>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 mb-3">
          <input type="checkbox" class="custom-control-input" id="fund-source4" />
          <label
            class="custom-control-label"
            for="fund-source4"
          >Strategies to Empower People Program(STEP)</label>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 mb-3">
          <input type="checkbox" class="custom-control-input" id="fund-source5" />
          <label class="custom-control-label" for="fund-source5">Child Care Assistance Program</label>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 mb-3">
          <input type="checkbox" class="custom-control-input" id="fund-source6" />
          <label class="custom-control-label" for="fund-source6">Child Welfare</label>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 mb-3">
          <input type="checkbox" class="custom-control-input" id="fund-source7" />
          <label class="custom-control-label" for="fund-source7">Other</label>
        </div>
        <div class="col-sm-4 mb-3">
          <input type="text" class="form-control" id="txt_fund-source7" placeholder="Describe" />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-4 mb-3">
          <h5 class="header-black float-left">TAX INFORMATION</h5>
          <p class="float-left">Is your Organization a non-profit organization?</p>
        </div>
        <div class="col-sm-4 mb-3"></div>
      </div>
      <div class="row">
        <div class="col-sm-4 mb-3">
          <input class="float-left" type="radio" id="Orgyes" name="non-profitOrg" value="yes" />
          <label class="float-left" for="yes">Yes</label>
        </div>
        <div class="col-sm-4 mb-3">
          <input class="float-left" type="radio" id="Orgno" name="non-profitOrg" value="no" />
          <label class="float-left" for="no">No</label>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 mb-3">
          <label class="float-left" for="FederalEIN">Federal EIN</label>
          <input type="text" class="form-control" id="FederalEIN" placeholder value required />
          <div class="invalid-feedback">Valid Federal EIN is required.</div>
        </div>
        <div class="col-sm-4 mb-3">
          <label class="float-left" for="StateTaxID">State Tax ID Number</label>
          <input type="text" class="form-control" id="StateTaxID" placeholder value required />
          <div class="invalid-feedback">Valid State Tax ID is required.</div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4 mb-3"></div>
        <div class="col-sm-4 mb-3"></div>
        <div class="col-sm-4 mb-3">
          <button type="button" class="btn btn-success">Save</button>
          <button type="button" class="btn btn-info">Save & Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
export default class FundingSource extends Vue {}
</script>