<template>
  <v-card class="rounded-lg" flat>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6">
          <v-list class="">
            <v-list-item>
              <v-list-item-icon class="mx-2">
                <v-icon color="dm__information" x-large>mdi-wallet-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  <h2 class="text-capitalize">
                    {{ dmoney(250.32) }}
                    <span class="text-uppercase subtitle-1">usd</span>
                  </h2>
                  <span class="font-weight-medium grey--text text-uppercase caption">{{
                    lang(`account balance`)
                  }}</span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row class="py-5 text-center">
            <v-col  cols="6" sm="3">
              <h2 class="dm__secondary4--text">7</h2>
              <span
                class="text-uppercase caption font-weight-bold black--grey"
                >{{ lang(`items`) }}</span
              >
            </v-col>
            <v-divider vertical inset />
            <v-col cols="6" sm="3">
              <h2 class="dm__secondary4--text">20</h2>
              <span
                class="text-uppercase caption font-weight-bold black--grey"
                >{{ lang(`comments`) }}</span
              >
            </v-col>
            <v-divider vertical inset />
            <v-col  cols="6" sm="3">
              <h2 class="dm__secondary4--text">9</h2>
              <span
                class="text-uppercase caption font-weight-bold black--grey"
                >{{ lang(`ratings`) }}</span
              >
            </v-col>
            <v-divider vertical inset />
            <v-col  cols="6" sm="3">
              <h2 class="dm__secondary4--text">362</h2>
              <span
                class="text-uppercase caption font-weight-bold black--grey"
                >{{ lang(`views`) }}</span
              >
            </v-col>
            <v-divider />
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>