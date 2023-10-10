
<template>
  <v-row>
    <v-col cols="12"  sm="3">
      <v-settings-menu />
    </v-col>
    <v-col cols="12" sm="9">
      <router-view />
    </v-col>
  </v-row>
</template>
<script>
import vSettingsMenu from "../dashboard/components/SettingsMenu.vue";
export default {
  components: {
    vSettingsMenu,
  },
};
</script>