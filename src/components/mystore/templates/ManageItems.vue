<template>
  <div class="dm-manage-groups-settings">
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{ lang(`my store`) }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <h1 class="text-capitalize">{{ lang(`manage items`) }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col v-for="(item, key) in Array.from(new Array(10))" :key="key" cols="12" sm="4">
            <v-item />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import vItem from "../templates/manageItems/Item.vue";
export default {
  components: {
    vItem
  },
};
</script>


<style lang="scss">
.dm-manage-groups-settings .v-input .v-label {
  line-height: 30px !important;
}
</style>