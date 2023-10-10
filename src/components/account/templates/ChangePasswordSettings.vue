<template>
  <div class="dm-account-change-password-settings">
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{ lang(`account`) }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <h1 class="text-capitalize">{{ lang(`change password`) }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-change-password/>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import vChangePassword from "./changePasswordSettings/ChangePassword.vue";
export default {
    components: {
       vChangePassword
    }
}
</script>


<style lang="scss">
  .dm-account-change-password-settings .v-input .v-label {
    line-height: 30px !important;
  }
</style>