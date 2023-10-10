<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="panel"
    clipped
    left
    app
  >
    <v-card class="mb-10" v-if="!panel">
      <v-img :src="profile.banner" height="100" style="overflow: visible">
        <router-link
          :to="{
            name: 'views.profile',
            params: { profile: dclean(profile.account) },
          }"
        >
          <v-avatar
            style="postion: absolute; left: 35%; top: 60%"
            width="80px"
            class="pa-1"
            height="80px"
          >
            <img width="80" height="80" :src="profile.avatar" /> </v-avatar
        ></router-link>
      </v-img>
    </v-card>
    <v-card v-if="!panel" flat>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <router-link
              class="text-decoration-none dm__secondary4--text"
              :to="{
                name: 'views.profile',
                params: { profile: dclean(profile.account) },
              }"
            >
              <p class="text-center font-weight-medium body-1 mb-0">
                Test Test
              </p>
            </router-link>
            <p class="text-center grey--text">1288 972 1291</p>
          </v-col>
          <v-col cols="12">
            <div class="d-flex flex-row justify-center">
              <v-avatar size="32">
                <v-img
                  src="https://odindesignthemes.com/vikinger/img/badge/liked-s.png"
                />
              </v-avatar>
              <v-avatar size="32">
                <v-img
                  src="https://odindesignthemes.com/vikinger/img/badge/platinum-s.png"
                />
              </v-avatar>
              <v-avatar size="32">
                <v-img
                  src="https://odindesignthemes.com/vikinger/img/badge/warrior-s.png"
                />
              </v-avatar>
              <v-avatar size="32">
                <v-img
                  src="https://odindesignthemes.com/vikinger/img/badge/rmachine-s.png"
                />
              </v-avatar>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-avatar
      class="d-block text-center mx-auto mt-4"
      color="grey darken-1"
      tile
      size="36"
      v-if="panel"
    >
      <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
    </v-avatar>

    <v-divider v-if="panel" class="mx-3 my-5"></v-divider>

    <v-list-item v-if="!panel" class="d-sm-flex d-md-none">
      <v-logout />
    </v-list-item>
    <v-list class="dm-main-nav" nav dense>
      <v-list-item
        class="rounded-lg"
        v-for="(view, index) in Object.assign([], views)"
        :key="index"
        :to="view.url"
      >
        <v-list-item-icon>
          <v-icon>{{ view.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title
          class="
            text-capitalize
            font-weight-medium
            caption
            dm__secondary4--text
          "
          >{{ lang(view.title) }}</v-list-item-title
        >
      </v-list-item>
    </v-list>
    <v-profile-menu-list v-if="!panel" class="d-sm-flex d-md-none" />
    <v-account-menu-list v-if="!panel" class="d-sm-flex d-md-none" />
    <v-peers-menu-list v-if="!panel" class="d-sm-flex d-md-none" />
    <v-store-menu-list v-if="!panel" class="d-sm-flex d-md-none" />
  </v-navigation-drawer>
</template>


<script>
import vLogout from "../auth/components/Logout.vue";
import vProfileMenuList from "../profile/components/ProfileMenuList.vue";
import vAccountMenuList from "../account/components/AccountMenuList.vue";
import vPeersMenuList from "../account/components/PeersMenuList.vue";
import vStoreMenuList from "../mystore/components/StoreMenuList.vue";
export default {
  components: {
    vLogout,
    vProfileMenuList,
    vAccountMenuList,
    vPeersMenuList,
    vStoreMenuList,
  },
  props: {
    show: {
      type: [Boolean],
    },
  },
  data() {
    return {
      profile: this.$store.getters["profile/GET_PROFILE"](),
      views: this.$store.getters["GET_VIEWS"],
      drawer: true,
      panel: true,
    };
  },
  watch: {
    show: {
      handler: function (newValue) {
        this.$nextTick(() => {
          if (["xs", "sm"].includes(this.$vuetify.breakpoint.name)) {
            this.drawer = true;
            this.panel = false;
          } else {
            this.panel = newValue;
          }
        });
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss">
.dm-main-nav .theme--light.v-list-item {
  &::before {
    background-color: var(--v-dm__info-base) !important;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.836);
  }
  &:hover {
    .v-list-item__title {
      color: var(--v-dm__info-base) !important;
      padding: 0px 10px;
      transition: ease 0.5s;
    }
    .v-list-item__icon {
      color: var(--v-dm__info-base) !important;
      &::after {
        color: var(--v-dm__info-base) !important;
      }
    }
  }
}
</style>