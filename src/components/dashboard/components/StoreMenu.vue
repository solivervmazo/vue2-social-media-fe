<template>
  <v-menu class="mt-10" offset-overflow offset-y left>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="white--text"
        retain-focus-on-click
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-badge color="error" dot overlap>
          <v-icon> mdi-shopping-outline </v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-card class="py-0" flat>
      <v-card-title
        class="
          text-capitalize
          font-weigh-medium
          pb-0
          mb-0
        "
      >
        <span>{{ lang(`friend requests`) }}</span>
        <span class="dm__primary--text mx-2">{{ lang(`3`) }}</span>
      </v-card-title>
    </v-card>
    <v-card flat max-height="70vh">
      <v-list two-line>
        <v-list-item
          dense
          v-for="(item, index) in Object.assign([], items)"
          :key="index"
          link
        >
          <v-list-item-avatar class="mr-5">
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <span class="font-weight-medium">
                {{ lang(item.title) }}
              </span>
            </v-list-item-title>
            <v-list-item-subtitle>
              <span class="font-weight-regular"> {{ lang(item.description) }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
              <v-btn plain icon>
                <v-icon color="grey">
                  close-circle-outline
                </v-icon>
              </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-btn class="py-6" color="deep-purple lighten-1" block tile dark>
        <span class="text-capitalize">{{ lang(`view all requests`) }}</span>
      </v-btn>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      items: [
        {
          title: "Twitch Stream UI Pack",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          price: "12.00", //sould be timestamp
          quantity: "1",
          description: "regular licence",
        },
        {
          title: "Twitch Stream UI Pack 2",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          price: "14.00", //sould be timestamp
          quantity: "2",
          description: "regular licence",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
</style>