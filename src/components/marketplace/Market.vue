<template>
  <div>
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">
          {{ lang(`search what you want`) }}
        </span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col cols="6">
            <h2 class="text-capitalize">{{ lang(`market categories`) }}</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <template v-for="(category, index) in categories">
            <v-col cols="12" sm="3" :key="index + `--category`">
              <router-link
                class="text-decoration-none"
                :to="{
                  name: `views.marketplace`,
                  query: { marketCategory: dclean(category.value) },
                }"
              >
                <v-category-card :content="category" />
              </router-link>
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{ lang(`see what's new`) }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col cols="6">
            <h2 class="text-capitalize">{{ lang(`latest items`) }}</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <template v-for="(item, index) in items">
            <v-col cols="12" sm="3" :key="index + `--item`">
              <v-item-card :content="item" />
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import vCategoryCard from "./components/CategoryCard.vue";
import vItemCard from "./components/ItemCard.vue";
export default {
  components: {
    vCategoryCard,
    vItemCard,
  },
  props: {
    items: {
      type: Array,
      default: function () {
        return this.$store.getters["marketplace/GET_ITEMS"]();
      },
    },
    categories: {
      type: Array,
      default: function () {
        return this.$store.getters["marketplace/GET_CATEGORIES"]();
      },
    },
  },
};
</script>