<template>
  <div class="dm-manage-groups-settings">
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{ lang(`my store`) }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <h1 class="text-capitalize">{{ lang(`sales statement`) }} </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
          groups
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
    components: {
    }
}
</script>


<style lang="scss">
  .dm-manage-groups-settings .v-input .v-label {
    line-height: 30px !important;
  }
</style>