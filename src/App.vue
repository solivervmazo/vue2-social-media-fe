<template>
  <v-app>
    <v-bar
      :authed="authed"
      v-on:toggle-nav="
        ({ show = true } = {}) => {
          panel = show;
        }
      "
      v-on:toggle-drawer="
        ({ toggle = false } = {}) => {
          alert(toggle)
          panel = toggle;
        }
      "
    ></v-bar>
    <v-side-navigation-drawer :show="panel" v-if="authed" />
    <v-messenger-navigation-drawer v-if="authed" />
    <v-main :class="{ 'purple-welcome': !authed }">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12">
            <div min-height="70vh">
              <router-view />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import vBar from "./components/dashboard/templates/Bar.vue";
import vSideNavigationDrawer from "./components/dashboard/SideNavigationDrawer.vue";
import vMessengerNavigationDrawer from "./components/messenger/MessageNavigationDrawer.vue";
export default {
  name: "App",
  components: {
    vBar,
    vSideNavigationDrawer,
    vMessengerNavigationDrawer,
  },
  data() {
    return {
      authed: this.$store.getters["auth/GET_AUTHED"],
      panel: true,
    };
  },
  computed: {
    _authed() {
      return this.$store.getters["auth/GET_AUTHED"];
    },
  },
  watch: {
    _authed: {
      handler: function (newValue) {
        this.$nextTick(() => {
          this.authed = newValue;
        });
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">

.v-main__wrap {
  background-color: #eceff1 !important;
}

.purple-welcome {
  background-color: #7e57c2;
}
.v-label.theme--light {
  font-size: 12px;
}
.dm-mini-nav-messenger .v-navigation-drawer__content {
  overflow-y: hidden !important;
}

::-webkit-scrollbar {
  width: 5px !important;
}

::-webkit-scrollbar-track {
  background: transparent !important;
}

::-webkit-scrollbar-thumb {
  background: #b39ddb !important;
  border: solid 0px transparent !important;
  border-radius: 7px !important;
}

::-webkit-scrollbar-thumb:hover {
  background: #7e57c2 !important;
}

.dm-animate--up {
  transition: margin-top ease 0.3s;
}
</style>