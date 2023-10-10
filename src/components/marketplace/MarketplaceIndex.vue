<template>
  <v-container>
    <v-market v-if="!item && !browse" />
    <v-market-browse :filters="filters" v-if="browse" />
    <v-item :item="item" v-if="item" />
  </v-container>
</template>

<script>
import vMarket from "./Market.vue";
import vMarketBrowse from "./MarketBrowse.vue";
import vItem from "./Item.vue";
export default {
  components: {
    vMarket,
    vMarketBrowse,
    vItem,
  },
  data() {
    return {
      item: false,
      browse: false,
      items: this.$store.getters["marketplace/GET_ITEMS"](),
      filters: {
        marketCategory: "",
        category: [],
        inclusions: [],
        minPrice: 0,
        maxPrice: 0,
        minRating: 0,
      },
    };
  },
  methods: {
    checkRouteIntent: function (to) {
      this.browse = false;
      const { items, dclean } = this;
      const item = items.find(
        (item) =>
          dclean(item.title).toLowerCase() === to.params?.item?.toLowerCase()
      );
      this.item = (() => {
        return (this.browse = Object.keys(to.query).length > 0);
      })()
        ? false
        : item
        ? item
        : false;
      Object.keys(to.query).forEach((key) => {
        this.filters[key] = to.query[key];
      });
    },
    resetFilter: function () {
      this.filters.marketCategory = "";
      this.filters.category = [];
      this.filters.inclusions = [];
      this.filters.minPrice = 0;
      this.filters.maxPrice = 0;
      this.filters.minRating = 0;
    },
  },
  watch: {
    $route(to) {
      this.checkRouteIntent(to);
    },
  },
  /* eslint-disable no-unused-vars */
  beforeRouteEnter(to, from, next) {
    // TODO : refactor code to usebale
    next((vm) => {
      vm.checkRouteIntent(to)
    });
  },
};
</script>
