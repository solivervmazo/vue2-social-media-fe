<template>
  <div class="dm-profile-personal-settings">
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{ lang(`my profile`) }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <h1 class="text-capitalize">{{ lang(`profile info`) }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-card class="mt-5">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="100"
            style="overflow: visible"
          >
            <v-avatar
              style="postion: absolute; left: 35%; top: 40%"
              width="80px"
              class="pa-1"
              height="80px"
            >
              <img
                width="80"
                height="80"
                src="https://cdn.vuetifyjs.com/images/lists/1.jpg"
              />
            </v-avatar>
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-hover v-slot="{ hover }">
          <v-card
            class="dm-animate--up"
            :class="{ 'mt-3': hover, 'mt-5': !hover }"
          >
            <v-card-text class="text-center">
              <v-btn icon :plain="!hover" :color="hover ? 'dm__primary' : 'grey'">
                <v-icon>mdi-account-box-outline</v-icon>
              </v-btn>
              <p class="text-capitalize font-weight-medium text-center">
                {{ lang(`change avatar`) }}
                <br />
                <span class="text-capitalize font-weight-regular"
                  >110x110px size minimum</span
                >
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" sm="4">
        <v-hover v-slot="{ hover }">
          <v-card
            class="dm-animate--up"
            :class="{ 'mt-3': hover, 'mt-5': !hover }"
          >
            <v-card-text class="text-center">
              <v-btn icon :plain="!hover" :color="hover ? 'dm__primary' : 'grey'">
                <v-icon>mdi-account-box-outline</v-icon>
              </v-btn>
              <p class="text-capitalize font-weight-medium text-center">
                {{ lang(`change cover`) }}
                <br />
                <span class="text-capitalize font-weight-regular"
                  >110x110px size minimum</span
                >
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-about-profile></v-about-profile>
        <v-security-information></v-security-information>
        <v-manage-badges></v-manage-badges>
        <v-interests></v-interests>
        <v-jobs-and-education></v-jobs-and-education>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import vAboutProfile from "../../profile/templates/personalSettings/Profile.vue";
import vSecurityInformation from "../../profile/templates/personalSettings/SecurityInformation.vue";
import vManageBadges from "../../profile/templates/personalSettings/ManageBadges.vue";
import vInterests from "../../profile/templates/personalSettings/Interests.vue";
import vJobsAndEducation from "../../profile/templates/personalSettings/JobsAndEducation.vue";
export default {
  components: {
    vAboutProfile,
    vSecurityInformation,
    vManageBadges,
    vInterests,
    vJobsAndEducation,
  },
};
</script>

<style lang="scss">
.dm-profile-personal-settings .v-input .v-label {
  line-height: 30px !important;
}
</style>