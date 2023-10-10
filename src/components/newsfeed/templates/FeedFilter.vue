<template>
  <v-card class="dm-feed-filter transparent rounded-lg" flat>
    <v-tabs fixed-tabs>
      <v-tab
        class="pb-2 dm__secondary--text text-nowrap"
        v-for="(filter, index) in Object.assign([], filters)"
        :key="index"
        :ripple="false"
        solo
      >
        <span
          class="
            text-none text-capitalize
            font-weight-medium
            caption
          "
          >{{ lang(filter) }}
        </span>
      </v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      filters: ["all updates", "mentions", "friends", "groups", "blog posts"],
    };
  },
};
</script>

<style lang="scss">
.dm-feed-filter {
  .v-tabs {
    > .v-tabs-bar {
      background: transparent !important;
      .v-tab {
        &::before {
          background-color: rgba(255, 255, 255, 0) !important;
        }
        &.v-tab--active {
          color: var(--v-dm__secondary4--text-base) !important;
        }
      }
    }
  }
}
</style>