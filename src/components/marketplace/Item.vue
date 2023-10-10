<template>
  <div class="dm-item-page">
    <!-- TODO : header refactor mobile -->
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">
          {{ lang(item.category) }}
        </span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col class="d-flex" cols="12" sm="6">
            <h2 class="text-capitalize">{{ lang(item.title) }}</h2>
          </v-col>
          <v-col class="d-flex flex-column align-end" cols="12" sm="6">
            <v-breadcrumbs class="px-0 py-0">
              <router-link :to="{ name: 'views.marketplace' }">
                <v-breadcrumbs-item href>
                  <a class="text-capitalize">{{ lang(`marketplace`) }}</a>
                </v-breadcrumbs-item>
              </router-link>
              <v-divider vertical class="mx-2 dm__primary my-1" />
              <router-link
                :to="{
                  name: 'views.marketplace',
                  query: { marketCategory: dclean(item.marketCategory) }
                }"
              >
                <v-breadcrumbs-item href>
                  <a class="text-capitalize"
                    >{{ lang(item.marketCategory) }}
                  </a>
                </v-breadcrumbs-item>
              </router-link>
              <v-divider vertical class="mx-2 dm__primary my-1" />
              <v-breadcrumbs-item>
                {{ lang(item.title) }}
              </v-breadcrumbs-item>
            </v-breadcrumbs>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="9">
        <v-row>
          <v-col cols="12">
            <!-- TODO : carousel -->
            <v-row>
              <v-col cols="12">
                <v-card class="rounded-lg" flat rounded>
                  <v-carousel
                    cycle
                    hide-delimiter-background
                    hide-delimiters
                    :show-arrows="false"
                    v-model="carousel"
                  >
                    <v-carousel-item
                      v-for="(slide, i) in item.slides"
                      :key="i"
                      :src="slide"
                    >
                    </v-carousel-item>
                  </v-carousel>
                </v-card>
              </v-col>
            </v-row>
            <!-- TODO : gallery view -->
            <v-row>
              <v-col cols="12">
                <v-card class="rounded-lg" flat rounded>
                  <v-card-text>
                    <v-row>
                      <v-col cols="12">
                        <v-slide-group
                          v-model="carousel"
                          active-class="success"
                          show-arrows
                        >
                          <v-container>
                            <v-row class="d-flex flex-row">
                              <template v-for="(slide, n) in item.slides">
                                <v-slide-item
                                  v-slot="{ active, toggle }"
                                  :key="slide"
                                >
                                  <v-card
                                    :color="active ? 'primary' : ''"
                                    class="
                                      rounded-lg
                                      overflow-hidden
                                      pa-0
                                      mx-3
                                      my-1
                                    "
                                    dark
                                    rounded
                                    @click="toggle"
                                  >
                                    <v-scroll-y-transition>
                                      <v-avatar size="60" tile rounded>
                                        <v-img :src="slide">
                                          <v-overlay
                                            absolute
                                            :value="n != carousel"
                                          >
                                          </v-overlay>
                                        </v-img>
                                      </v-avatar>
                                    </v-scroll-y-transition>
                                  </v-card>
                                </v-slide-item>
                              </template>
                            </v-row>
                          </v-container>
                        </v-slide-group>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
            <!-- TODO : desc / comments / reviews -->
            <v-row>
              <v-col cols="12">
                <v-card class="rounded-lg" flat rounded>
                  <v-tabs v-model="tabs" fixed-tabs>
                    <v-tab
                      v-for="section in sections"
                      :key="section.value"
                      :value="section.value"
                    >
                      <span
                        class="
                          caption
                          text-capitalize
                          font-weight-medium
                          dm__secondary4--text
                        "
                      >
                        {{ lang(section.text) }}
                      </span>
                      <span
                        class="
                          dm__primary--text
                          caption
                          font-weight-medium
                          px-1
                        "
                        v-if="item[section.value] && item[section.value].count"
                      >
                        {{ item[section.value].count }}
                      </span>
                    </v-tab>
                  </v-tabs>
                  <v-tabs-items v-model="tabs">
                    <v-tab-item
                      v-for="section in sections"
                      :key="section.value"
                    >
                      <v-card flat>
                        <v-card-text>
                          <v-item-description
                            :descriptions="item.descriptions"
                            v-if="section.value === `description`"
                          />
                          <v-item-comments
                            :comments="item.comments"
                            v-if="section.value === `comments`"
                          />
                          <v-item-reviews
                            :reviews="item.reviews"
                            v-if="section.value === `reviews`"
                          />
                        </v-card-text>
                      </v-card>
                    </v-tab-item>
                  </v-tabs-items>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="3">
        <v-item-details :item="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import vItemDescription from "./components/ItemDescription.vue";
import vItemComments from "./components/ItemComments.vue";
import vItemReviews from "./components/ItemReviews.vue";
import vItemDetails from "./components/ItemDetails.vue";
export default {
  components: {
    vItemDescription,
    vItemComments,
    vItemReviews,
    vItemDetails,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tabs: null,
      sections: [
        {
          text: "description",
          value: "description",
        },
        {
          text: "comments",
          value: "comments",
        },
        {
          text: "reviews",
          value: "reviews",
        },
      ],
      carousel: 0,
    };
  },
  watch: {},
};
</script>

<style lang="scss">

.dm-item-page {
  .v-slide-group__next,
  .v-slide-group__prev {
    flex: 0% !important;
    width: 0px;
    min-width: 0px !important;
  }
  .v-tab{
      min-width: 0px;
  }
}

</style>