<template>
  <v-card class="rounded-lg ma-2" flat>
    <v-img
      class="white--text align-end"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="120px"
      max-width="280px"
    >
      <v-card-title class="text-wrap subtitle-2 rounded-lg">
        <span class="dm__primary--text mx-1">&#36;</span>
        {{ dmoney(250) }}
      </v-card-title>
    </v-img>
    <v-card-text>
      <v-row>
        <v-col class="my-2" cols="12">
          <h1 class="dm__secondary4--text subtitle-2">Developers Of Dark Realm</h1>
          <span class="caption font-weight-regular dm__secondary4--text">
            <span class="text-capitalize">stream packs</span>
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-btn
            block
            color="dm__secondary"
            outlined
            class="rounded-lg text-capitalize caption font-weight-medium my-2"
            dark
          >
            {{ lang(`edit item`) }}
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>