<template>
  <v-card class="rounded-lg pa-5" flat>
    <v-card-title class="py-0">
      <span class="text-capitalize subtitle-2">{{
        lang(`reactions received`)
      }}</span>
      <v-spacer />
      <v-btn @click="page--" icon small>
        <v-icon small>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn icon small>
        <v-icon @click="page++" small>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-title>
    <v-carousel
      continuous
      hide-delimiters
      :show-arrows="false"
      v-model="page"
      height="auto"
    >
      <v-carousel-item v-for="(carousel, page) in items" :key="page">
        <v-row class="text-center">
          <template v-for="(react, index) in carousel">
            <v-col class="mt-5" cols="6" :key="index">
              <v-icon :color="react.color" large> {{ react.icon }} </v-icon>
              <h2 class="dm__secondary4--text">
                <span class="text-capitalize font-weight-medium"> {{ react.count }} </span>
                <br />
              </h2>
              <span
                class="caption grey--text font-weight-medium text-uppercase"
              >
                {{ lang(react.text) }}
              </span>
            </v-col>
            <v-divider class="my-10" vertical :key="index"/>
          </template>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      page: 0,
      items: {
        1: [
          {
            count: 12.642,
            icon: "mdi-thumb-up",
            text: "likes",
            color: "blue",
          },
          {
            count: 8.913,
            icon: "mdi-heart-circle",
            text: "likes",
            color: "red accent-3",
          },
          {
            count: 945,
            icon: "mdi-thumb-down",
            text: "dislikes",
            color: "purple",
          },
          {
            count: 123,
            icon: "mdi-emoticon-happy-outline",
            text: "likes",
            color: "amber lighten-3",
          },
        ],
        2: [
          {
            count: 123,
            icon: "mdi-emoticon-lol-outline",
            text: "funny",
            color: "amber lighten-3",
          },
          {
            count: 781,
            icon: "mdi-emoticon-excited-outline",
            text: "wow",
            color: "orange lighten-2",
          },
          {
            count: 121,
            icon: "mdi-emoticon-angry-outline",
            text: "angry",
            color: "red accent-3",
          },
          {
            count: 532,
            icon: "mdi-emoticon-sad-outline",
            text: "sad",
            color: "blue lighten-3",
          },
        ],
      },
    };
  },
};
</script>
