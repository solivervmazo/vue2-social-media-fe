<template>
  <v-card class="mb-5 rounded-lg">
    <v-card-title class="text-capitalize">
      {{ lang(`privacy settings`) }}
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col class="d-flex align-center" cols="12" sm="6">
            <span class="dm__secondary4--text text-capitalize subtitle-2">{{ lang(`who can see your profile`)}}?</span>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              class="rounded-lg text-capitalize"
              hide-details
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex align-center" cols="12" sm="6">
            <span class="dm__secondary4--text text-capitalize subtitle-2">{{ lang(`who can send you a friend request`)}}?</span>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              class="rounded-lg text-capitalize"
              hide-details
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex align-center" cols="12" sm="6">
            <span class="dm__secondary4--text text-capitalize subtitle-2">{{ lang(`who can see your chat activity`)}}?</span>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select
              class="rounded-lg text-capitalize"
              hide-details
              outlined
            />
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>