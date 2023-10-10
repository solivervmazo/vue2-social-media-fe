<template>
  <v-card class="mb-5 pa-4">
    <v-card-title class="text-capitalize">
      {{ lang(`personal info`) }}
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`full name`)"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`account email`)"
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`URL Username www.dreamax.com/`)"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`phone number`)"
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-select
              class="rounded-lg"
              hide-details
              :label="lang(`Country`)"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              class="rounded-lg"
              hide-details
              :label="lang(`Language`)"
              outlined
            />
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>