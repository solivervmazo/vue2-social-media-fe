<template>
  <div class="dm-market-browse">
    <!-- TODO : header -->
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">
          {{ lang(`browse products`) }}
        </span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col class="d-flex" cols="12" sm="6">
            <h2 class="text-capitalize">
              {{ lang(filters.marketCategory) }} {{ lang(`items`) }}
            </h2>
          </v-col>
          <v-col class="d-flex flex-column align-end" cols="12" sm="6">
            <v-breadcrumbs class="px-0 py-0">
              <router-link :to="{ name: 'views.marketplace' }">
                <v-breadcrumbs-item href>
                  <a class="text-capitalize">{{ lang(`marketplace`) }}</a>
                </v-breadcrumbs-item>
              </router-link>
              <v-divider vertical class="mx-2 dm__primary my-1" />
              <v-breadcrumbs-item>
                <span class="text-capitalize">
                  {{ lang(filters.marketCategory) }}
                </span>
              </v-breadcrumbs-item>
            </v-breadcrumbs>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- TODO : filters -->
    <v-row>
      <v-col cols="12">
        <v-market-browse-filters />
      </v-col>
    </v-row>
    <!-- TODO : filters -->
    <v-row>
      <v-col cols="12" sm="4">
        <v-market-browse-more-filters />
      </v-col>
      <v-col cols="12" sm="8">
        <v-row>
          <v-col cols="12">
            <v-row>
              <template v-for="(item, index) in items">
                <v-col cols="12" sm="4" :key="index + `--item`">
                  <v-item-card :content="item" />
                </v-col>
              </template>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import vItemCard from "./components/ItemCard.vue";
import vMarketBrowseFilters from "./components/MarketBrowseFilters.vue";
import vMarketBrowseMoreFilters from "./components/MarketBrowseMoreFilters.vue";
export default {
  components: {
    vItemCard,
    vMarketBrowseFilters,
    vMarketBrowseMoreFilters,
  },
  props: {
    items: {
      type: Array,
      default: function () {
        return this.$store.getters["marketplace/GET_ITEMS"]();
      },
    },
    filters: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.dm-market-browse {
  .v-slide-group__next,
  .v-slide-group__prev {
    flex: 0% !important;
    width: 0px;
    min-width: 0px !important;
  }
  .v-tab {
    min-width: 0px;
  }
}
</style>