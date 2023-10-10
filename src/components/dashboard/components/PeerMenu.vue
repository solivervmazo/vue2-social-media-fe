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
          <v-icon> mdi-emoticon-happy-outline </v-icon>
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
          justify-space-between
        "
      >
        <span>{{ lang(`friend requests`) }}</span>
        <v-card-actions class="pb-0">
          <v-btn plain>
            <span class="text-capitalize font-weight-medium caption">{{
              lang(`find friends`)
            }}</span>
          </v-btn>
          <v-btn plain>
            <span class="text-capitalize font-weight-medium caption">{{
              lang(`settings`)
            }}</span>
          </v-btn>
        </v-card-actions>
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
          <v-list-item-icon v-if="item.icon">
            <v-icon v-text="item.icon" small></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <span class="font-weight-medium">
                {{ lang(item.fullname) }}
              </span>
            </v-list-item-title>
            <v-list-item-subtitle>
              <span class="font-weight-regular"> {{ lang(item.message) }}</span>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>
              <v-btn color="danger" plain icon>
                <v-icon color="grey">
                  mdi-emoticon-outline
                </v-icon>
              </v-btn>
              <v-btn plain>
                <v-icon color="grey">
                  mdi-emoticon-sad-outline
                </v-icon>
              </v-btn>
            </v-list-item-action-text>
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
          fullname: "Jaymee Jaymee",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          timestamp: "1 min ago", //sould be timestamp
          message: "6 friends in common",
        },
        {
          fullname: "Tal Hadi",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          status: "offline",
          timestamp: "2 hours ago", //sould be timestamp
          message: "2 friends in common",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
</style>