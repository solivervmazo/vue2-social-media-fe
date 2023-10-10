<template>
  <v-card class="mb-5">
    <v-card-title class="text-capitalize">
      {{ lang(`security info`) }}
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg"
              hide-details
              :label="lang(`recovery email`)"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg"
              hide-details
              :label="lang(`recovery phone`)"
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-select
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`security question 01`)"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`answer 01`)"
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-select
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`security question 02`)"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`answer 02`)"
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-select
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`security question 03`)"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`answer 03`)"
              outlined
            />
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>