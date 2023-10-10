<template>
  <v-card class="mb-5">
    <v-card-title class="text-capitalize">
      {{ lang(`jobs and education`) }}
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`title or place`)"
              outlined
            />
          </v-col>
          <v-col cols="6" sm="3">
            <v-select
              class="rounded-lg"
              hide-details
              :label="lang(`year started`)"
              outlined
            />
          </v-col>
          <v-col cols="6" sm="3">
            <v-select
              class="rounded-lg"
              hide-details
              :label="lang(`year ended`)"
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-textarea
              class="rounded-lg text-capitalize"
              hide-details
              :placeholder="lang(`description`)"
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn class="text-capitalize" color="secondary" outlined plain rounded>
              <v-icon class="pa-2" small>mdi-plus</v-icon>
              {{ lang(`add new field`) }}
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>
