<template>
  <div class="dm-manage-groups-settings">
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{ lang(`my store`) }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <h1 class="text-capitalize">{{ lang(`account overview`) }} </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-overview />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-item-sold/>
      </v-col>
      <v-col cols="12" sm="4">
        <v-total-earnings/>
      </v-col>
      <v-col cols="12" sm="4">
        <v-total-revenue/>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import vOverview from "./myAccount/Overview.vue";
import vItemSold from "./myAccount/ItemSold.vue";
import vTotalEarnings from "./myAccount/TotalEarnings.vue";
import vTotalRevenue from "./myAccount/TotalRevenue.vue";
export default {
    components: {
      vOverview, vItemSold, vTotalEarnings, vTotalRevenue
    }
}
</script>


<style lang="scss">
  .dm-manage-groups-settings .v-input .v-label {
    line-height: 30px !important;
  }
</style>