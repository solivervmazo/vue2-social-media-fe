<template>
  <v-card class="rounded-lg" flat>
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-list class="">
            <v-list-item>
              <v-list-item-icon class="mx-2" >
                <v-icon color="dm__primary" x-large>mdi-currency-usd</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  <h2 class="text-capitalize">
                    {{ dmoney(250.32) }}
                    <span class="text-uppercase subtitle-1">usd</span>
                  </h2>
                  <span class="font-weight-medium grey--text text-uppercase caption">{{
                    lang(`total revenue`)
                  }}</span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>