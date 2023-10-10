<template>
  <v-list >
    <v-subheader class="text-uppercase caption font-weight-medium">
      {{ lang(navigation[0].title) }}
    </v-subheader>
      <v-list-item class="dm-hoverable"  v-for="(item , index) in Object.assign([] , navigation)[0].items" :key="index" dense  :to="item.url" >
        <v-list-item-icon v-if="item.icon">
          <v-icon v-text="item.icon" small></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-capitalize"> {{ lang(item.title) }} </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      navigation: this.$store.getters["GET_NAVIGATION"]({ module: 'account'}),
    };
  },
  mounted(){}
};
</script>

<style lang="scss" scoped>
    .v-subheader {
        height: auto !important;
    }
</style>