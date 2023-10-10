<template>
  <v-card class="rounded-lg ma-2" flat>
    <v-card-text class="pa-5">
      <v-form>
        <v-row>
          <v-col cols="12" sm="4">
            <v-select
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`filter by`)"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="4">
            <v-select
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`order by`)"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="4">
            <v-btn block class="rounded-lg" color="dm__primary" dark x-large>
              <span class="text-capitalize">
                {{ lang(`filter downloads`) }}!
              </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>