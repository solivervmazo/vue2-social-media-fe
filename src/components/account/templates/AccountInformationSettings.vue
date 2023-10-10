<template>
  <div class="dm-account-account-info-settings">
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{ lang(`account`) }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <h1 class="text-capitalize">{{ lang(`general settings`) }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-personal-information/>
        <v-security-information />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import vPersonalInformation from "./accountInformationSettings/PersonalInformation.vue";
import vSecurityInformation from "./accountInformationSettings/SecurityInformation.vue";
export default {
    components: {
       vPersonalInformation, vSecurityInformation
    }
}
</script>


<style lang="scss">
  .dm-account-account-info-settings .v-input .v-label {
    line-height: 30px !important;
  }
</style>