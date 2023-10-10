<template>
  <v-menu offset-overflow offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="white--text"
        retain-focus-on-click
        v-bind="attrs"
        v-on="on"
        icon
      >
        <v-icon> mdi-cog-outline </v-icon>
      </v-btn>
    </template>
    <v-card absolute flat>
      <v-avatar-menu-list />
    </v-card>
    <v-card flat max-height="70vh">
      <v-list-item>
        <v-logout />
      </v-list-item>
      <v-profile-menu-list />
      <v-account-menu-list />
      <v-peers-menu-list />
      <v-store-menu-list />
    </v-card>

  </v-menu>
</template>

<script>
import vLogout from "../../auth/components/Logout.vue";
import vAvatarMenuList from "../../account/components/AvatarMenuList.vue";
import vProfileMenuList from "../../profile/components/ProfileMenuList.vue";
import vAccountMenuList from "../../account/components/AccountMenuList.vue";
import vPeersMenuList from "../../account/components/PeersMenuList.vue";
import vStoreMenuList from "../../mystore/components/StoreMenuList.vue";
export default {
  components: {
    vLogout,
    vAvatarMenuList,
    vProfileMenuList,
    vAccountMenuList,
    vPeersMenuList,
    vStoreMenuList,
  },
  methods: {
    signOut: function () {
      const {
        $store: { dispatch },
        $router,
      } = this;
      dispatch("auth/signOut");
      $router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss">

.theme--light.v-list-item.dm-hoverable:hover {
  padding: 0px 23px;
  transition: padding ease 0.5s;
  .v-list-item__content{
    color: var(--v-primary-base);
  }
}


</style>