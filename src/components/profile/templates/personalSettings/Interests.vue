<template>
  <v-card class="mb-5">
    <v-card-title class="text-capitalize">
      {{ lang(`interests`) }}
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12" sm="6">
            <v-textarea
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`favorite tv shows`)"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`favorite music/bands artists`)"
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-textarea
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`favorite movies`)"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`favorite books`)"
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-textarea
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`favorite games`)"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-textarea
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`my hobbies`)"
              outlined
            />
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>
