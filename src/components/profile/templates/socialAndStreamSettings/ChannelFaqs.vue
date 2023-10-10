<template>
  <v-card class="dm-channel-faqs-settings mb-5">
    <v-card-title class="text-capitalize">
      {{ lang(`your channel FAQs`) }}
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              height="30px"
              hide-details
              :label="lang(`question`)"
              outlined
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea
              class="rounded-lg text-capitalize"
              height="30px"
              hide-details
              :label="lang(`answer`)"
              outlined
            >
            </v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              height="30px"
              hide-details
              :label="lang(`question`)"
              outlined
            >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea
              class="rounded-lg text-capitalize"
              height="30px"
              hide-details
              :label="lang(`answer`)"
              outlined
            >
            </v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn class="text-capitalize" color="dm__primary">
                <v-icon class="px-2" small>mdi-plus</v-icon>
              {{ lang(`add new field`) }}
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
.dm-channel-faqs-settings .v-input .v-label {
  line-height: 30px !important;
}
</style>
