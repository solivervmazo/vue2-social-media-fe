<template>
  <v-app-bar
    app
    class="px-4"
    color="deep-purple accent-2"
    clipped-right
    clipped-left
    flat
    height="72"
    v-if="authed"
  >
    <v-toolbar-title class="white--text font-weight-medium">
      Dreamax
    </v-toolbar-title>
    <v-app-bar-nav-icon @click="show = !show">
      <v-icon color="white">mdi-view-grid-outline</v-icon>
    </v-app-bar-nav-icon>
    <div class="d-none d-md-flex">
      <v-btn class="white--text" text>{{ lang(`Home`) }}</v-btn>
      <v-btn class="white--text" text>{{ lang(`Careers`) }}</v-btn>
      <v-btn class="white--text" text>{{ lang(`Faqs`) }}</v-btn>
    </div>
    <v-responsive>
      <v-text-field
        class="rounded-lg px-5"
        dense
        flat
        hide-details
        rounded
        solo-inverted
      >
        <template v-slot:append>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon small text v-bind="attrs" v-on="on">
                <v-icon color="grey lighten-1" small>mdi-magnify</v-icon>
              </v-btn>
            </template>
            <span>{{ lang("search") }}</span>
          </v-tooltip>
        </template>
      </v-text-field>
    </v-responsive>
    <div class="d-none d-md-flex">
      <v-col cols="4">
        <v-row>
          <v-col
            class="pt-1 white--text text-uppercase font-weight-bold caption"
            cols="6"
          >
            {{ lang(`next`) }} :</v-col
          >
          <v-col
            class="
              pt-1
              text-right
              white--text
              text-uppercase
              font-weight-bold
              caption
            "
            cols="6"
            >38 exp</v-col
          >
        </v-row>
        <v-progress-linear value="50" color="light-blue lighten-2">
        </v-progress-linear>
      </v-col>
      <v-spacer />
      <v-divider class="mx-4" vertical inset></v-divider>
      <v-store-menu />
      <v-peer-menu />
      <v-message-menu />
      <v-notification-menu />
      <v-divider class="mx-4" vertical inset></v-divider>
      <v-user-menu />
    </div>
  </v-app-bar>
</template>

<script>
import vUserMenu from "../components/UserMenu.vue";
import vNotificationMenu from "../components/NotificationMenu.vue";
import vMessageMenu from "../components/MessageMenu.vue";
import vPeerMenu from "../components/PeerMenu.vue";
import vStoreMenu from "../components/StoreMenu.vue";
export default {
  components: {
    vUserMenu,
    vNotificationMenu,
    vMessageMenu,
    vPeerMenu,
    vStoreMenu,
  },
  props: {
    authed: {
      type: [Boolean],
      required: true,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {},
  watch: {
    show: function (newValue) {
      this.$emit("toggle-nav", { show: newValue });
    },
  },
};
</script>