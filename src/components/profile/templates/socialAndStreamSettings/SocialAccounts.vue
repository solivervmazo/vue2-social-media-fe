<template>
  <v-card class="dm-social-accounts-settings mb-5">
    <v-card-title class="text-capitalize">
      {{ lang(`your social accounts`) }}
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              height="30px"
              hide-details
              :label="lang(`facebook username`)"
              outlined
            >
              <template v-slot:prepend-inner>
                <v-icon class="px-2">mdi-facebook</v-icon>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              height="30px"
              hide-details
              :label="lang(`twitter username`)"
              outlined
            >
              <template v-slot:prepend-inner>
                <v-icon class="px-2">mdi-twitter</v-icon>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              height="30px"
              hide-details
              :label="lang(`instagram username`)"
              outlined
            >
              <template v-slot:prepend-inner>
                <v-icon class="px-2">mdi-instagram</v-icon>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              height="30px"
              hide-details
              :label="lang(`twitch username`)"
              outlined
            >
              <template v-slot:prepend-inner>
                <v-icon class="px-2">mdi-twitch</v-icon>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              height="30px"
              hide-details
              :label="lang(`google username`)"
              outlined
            >
              <template v-slot:prepend-inner>
                <v-icon class="px-2">mdi-google</v-icon>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              height="30px"
              hide-details
              :label="lang(`youtube username`)"
              outlined
            >
              <template v-slot:prepend-inner>
                <v-icon class="px-2">mdi-youtube</v-icon>
              </template>
            </v-text-field>
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
