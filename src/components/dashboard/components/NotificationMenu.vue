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
          <v-icon> mdi-bell-outline</v-icon>
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
        <span>{{ lang(`notifications`) }}</span>
        <v-card-actions class="pb-0">
          <v-btn plain>
            <span class="text-capitalize font-weight-medium caption">{{
              lang(`mark all as read`)
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
        <v-subheader class="text-uppercase caption font-weight-medium">
          {{ lang(`Account`) }}
        </v-subheader>
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
          <v-list-item-content class="text-wrap">
            <v-list-item-subtitle>
              <span class="font-weight-medium">{{ lang(item.fullname) }}</span>
              <span class="font-weight-regular"> {{ lang(item.message) }}</span>
              <span class="cyan--text"> {{ lang(item.target) }}</span>
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              <small class="grey--text"> {{ lang(item.timestamp) }}</small>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>
              <v-icon color="grey">mdi-message-text-outline</v-icon>
            </v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </v-list>
         <v-btn
              class="py-6"
              color="deep-purple lighten-1"
              block
              tile
              dark
            >
              <span class="text-capitalize">{{ lang(`show all notifications`) }}</span>
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
          timestamp: "1 minute ago", //sould be timestamp
          message: "posted a coment on",
          target: "status update",
        },
        {
          fullname: "Tal Hadi",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          status: "offline",
          timestamp: "2 hours ago", //sould be timestamp
          message: "posted a coment on",
          target: "status update",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
</style>