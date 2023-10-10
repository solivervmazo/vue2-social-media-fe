<template>
  <v-card class="dm-social-accounts-settings mb-5 rounded-lg">
    <v-card-title class="text-capitalize">
      {{ lang(`tweeter feed`) }}
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col class="justify-space-between" cols="12" sm="12">
              <div class="d-flex flex-wrap justify-space-between">
                <p class="subtitle-2">
                    Enable Twitter Feed <br>
                    <span class="text-regular caption">Turn on this switch to show your connected twitter account in your profile page</span>
                </p>
                <v-switch right></v-switch>
              </div>
          </v-col>
          <v-col cols="12">
              <div class="d-flex justify-space-between">
              <v-btn class="dm__primary text-capitalize rounded-lg" dark>
                  <v-icon class="px-2">mdi-twitter</v-icon>
                  {{ lang(`link your twitter account`) }}
              </v-btn>
                <p class="caption">
                    <br>
                    <span class="text-capitalize">{{ lang(`linked account`) }} </span> 
                    <span class="font-weight-medium">@solivermazo</span>
                </p>
              </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
    .dm-social-accounts-settings .v-input .v-label {
        line-height: 30px !important;
    }
</style>
