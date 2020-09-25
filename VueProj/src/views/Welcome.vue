<template>
  <div class="welcome">
    <WelcomeBody msg="John Doe" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WelcomeBody from "@/components/WelcomeBody.vue"; // @ is an alias to /src

@Component({
  components: {
    WelcomeBody
  }
})
export default class Welcome extends Vue {}
</script>
