<template>
  <div class="dm-market-browse-more-filters">
    <v-card class="rounded-lg" flat>
      <v-card-text class="pa-5">
        <v-form>
          <!-- TODO : categories & inclusions-->
          <template v-for="(key, index) in Object.keys(filters)">
            <v-row :key="index + $uuid()">
              <v-col cols="12">
                <v-list dense single-line>
                  <v-subheader>
                    <span
                      class="
                        subtitle-1
                        text-capitalize
                        font-weight-medium
                        dm__secondary4--text
                      "
                    >
                      {{ lang(key) }}
                    </span>
                  </v-subheader>
                  <v-list-item
                    class="py-0"
                    v-for="(filter, i) in filters[key]"
                    :key="i + $uuid()"
                  >
                    <v-list-item-content class="py-1 px-2">
                      <v-row>
                        <v-col cols="12">
                          <v-checkbox
                            dense
                            :true-value="filter.value"
                            hide-details
                            :ripple="false"
                          >
                            <template v-slot:label>
                              <v-row>
                                <v-col
                                  class="d-flex flex-row justify-space-between"
                                  cols="12"
                                >
                                  <span
                                    class="
                                      text-capitalize
                                      font-weight-medium
                                      dm__secondary4--text
                                    "
                                  >
                                    {{ lang(filter.text) }}
                                  </span>
                                  <span
                                    class="
                                      text-capitalize
                                      font-weight-light
                                      dm__primary--text
                                    "
                                  >
                                    {{ lang(filter.total) }}
                                  </span>
                                </v-col>
                              </v-row>
                            </template>
                          </v-checkbox>
                        </v-col>
                      </v-row>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </template>
          <!-- TODO : price range -->
          <v-row>
            <v-col cols="12">
              <v-list dense single-line>
                <v-subheader>
                  <span
                    class="
                      subtitle-1
                      text-capitalize
                      font-weight-medium
                      dm__secondary4--text
                    "
                  >
                    {{ lang(`price range`) }}
                  </span>
                </v-subheader>
                <v-list-item class="py-0">
                  <v-list-item-content class="py-1 px-2">
                    <v-row>
                      <v-col cols="6">
                        <v-text-field
                          class="rounded-lg text-capitalize"
                          :label="lang(`from`)"
                          hide-details
                          outlined
                          prefix="$"
                          rounded
                          v-model="price.from"
                        />
                      </v-col>
                      <v-col cols="6">
                        <v-text-field
                          class="rounded-lg text-capitalize"
                          :label="lang(`to`)"
                          hide-details
                          outlined
                          prefix="$"
                          rounded
                          v-model="price.to"
                        />
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
          <!-- TODO : reviews -->
          <v-row>
            <v-col cols="12">
              <v-list dense single-line>
                <v-subheader>
                  <span
                    class="
                      subtitle-1
                      text-capitalize
                      font-weight-medium
                      dm__secondary4--text
                    "
                  >
                    {{ lang(`reviews`) }}
                  </span>
                </v-subheader>
                <v-radio-group>
                  <v-list-item
                    class="py-0"
                    v-for="(review, i) in reviews"
                    :key="i + $uuid()"
                  >
                    <v-list-item-content class="py-1 px-2">
                      <v-row>
                        <v-col
                          class="d-flex flex-row justify-space-between"
                          cols="12"
                        >
                          <v-radio :value="review.rating" :ripple="false" small>
                            <template v-slot:label>
                              <span
                                class="
                                  text-capitalize
                                  caption
                                  font-weight-medium
                                  dm__secondary4--text
                                "
                                v-if="review.text"
                              >
                                {{ lang(review.text) }}
                              </span>
                              <v-row v-else>
                                <v-col
                                  class="d-flex flex-row align-center"
                                  cols="12"
                                >
                                  <v-rating
                                    readonly
                                    :value="review.rating"
                                    background-color="orange lighten-3"
                                    color="orange"
                                    size="10"
                                  />
                                  <span
                                    class="
                                      mx-2
                                      text-capitalize
                                      caption
                                      font-weight-medium
                                      dm__secondary4--text
                                    "
                                  >
                                    {{ review.rating }} +
                                  </span>
                                </v-col>
                              </v-row>
                            </template>
                          </v-radio>
                          <span
                            class="
                              caption
                              text-capitalize
                              font-weight-light
                              dm__primary--text
                            "
                          >
                            {{ lang(review.total) }}
                          </span>
                        </v-col>
                      </v-row>
                    </v-list-item-content>
                  </v-list-item>
                </v-radio-group>
              </v-list>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn block class="rounded-lg" color="dm__primary" dark x-large>
                <span class="text-capitalize caption font-weight-medium">
                  {{ lang(`apply filters`) }}
                </span>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      price: {
        from: 0,
        to: 0,
      },
      filters: {
        categories: [
          {
            text: `all categories`,
            value: "",
            total: 1207,
          },
          {
            text: `psd tempaltes`,
            value: "psd-templates",
            total: 134,
          },
          {
            text: `html templates`,
            value: "html-templates",
            total: 566,
          },
          {
            text: `wp templates`,
            value: "wp-templates",
            total: 209,
          },
          {
            text: `illustrations`,
            value: "illustrations",
            total: 80,
          },
          {
            text: `logos and badges`,
            value: "logos-and-badges",
            total: 21,
          },
          {
            text: `stream packs`,
            value: "stream-packs",
            total: 197,
          },
        ],
        inclusions: [
          {
            text: `photohop psd`,
            value: "photohop-psd",
            total: 22,
          },
          {
            text: `illustrator ai`,
            value: "illustrator-ai",
            total: 298,
          },
          {
            text: `sketch`,
            value: "sketch",
            total: 22,
          },
          {
            text: `html and css`,
            value: "html-and-css",
            total: 566,
          },
          {
            text: `wordpress`,
            value: "wordpress",
            total: 209,
          },
        ],
      },
      reviews: [
        {
          text: "all reviews",
          total: 1207,
        },
        {
          rating: 4,
          total: 964,
        },
        {
          rating: 3,
          total: 214,
        },
        {
          rating: 2,
          total: 102,
        },
        {
          rating: 1,
          total: 76,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.dm-market-browse-more-filters {
  .v-input .v-label {
    line-height: 32px !important;
  }
  .v-rating .v-icon {
    padding: 0px;
  }
}
</style>