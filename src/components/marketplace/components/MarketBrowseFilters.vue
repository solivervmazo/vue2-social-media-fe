<template>
  <v-card class="rounded-lg" flat>
    <v-card-text class="pa-5">
      <v-form>
        <v-row>
          <v-col cols="12" sm="3">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`search events`)"
              outlined
            >
              <template v-slot:append-outer>
                <v-btn color="dm__primary" dark x-large>
                  <v-icon class="py-0"> mdi-magnify </v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-select
              class="rounded-lg"
              hide-details
              :label="lang(`filter by`)"
              outlined
            >
            </v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-select
              class="rounded-lg"
              hide-details
              :label="lang(`descending`)"
              outlined
            >
            </v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-btn block class="rounded-lg" color="dm__primary" dark x-large>
              <span class="text-capitalize caption font-weight-medium">
                {{ lang(`apply filters`) }}
              </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>


<style lang="scss">
.v-input .v-label {
  line-height: 30px !important;
}
</style>