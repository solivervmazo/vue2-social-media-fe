<template>
  <div class="dm-community-group-filters">
    <v-card class="rounded-lg" flat rounded>
      <v-card-text class="px-8 py-0">
        <v-row>
          <v-col class="my-3" cols="12" sm="4">
            <v-text-field
              class="text-capitalize rounded-lg"
              :placeholder="lang(`search group`)"
              hide-details
              rounded
              outlined
              style="overflow: visible"
            >
              <template v-slot:append>
                <v-btn class="rounded-lg" color="dm__primary" dark>
                  <v-icon @click="1"> mdi-magnify </v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-col>
          <v-col class="py-0" cols="12" sm="4">
            <v-tabs fixed-tabs>
              <template v-for="(filter, index) in Object.assign([], filters)">
                <v-tab
                  class="pb-0 dm__secondary--text text-nowrap"
                  :key="index + `-tab`"
                  :ripple="false"
                  solo
                >
                  <span
                    class="
                      text-none text-capitalize
                      font-weight-medium
                      caption
                      text-no-wrap
                    "
                  >
                    {{ lang(filter) }}
                  </span>
                </v-tab>
                <v-divider
                  class="my-9"
                  inset
                  vertical
                  :key="index + `-divider`"
                />
              </template>
            </v-tabs>
          </v-col>
          <v-col
            class="d-flex my-3 align-center justify-center justify-md-end"
            cols="12"
            sm="4"
          >
            <div class="d-flex flex-row" height="100%">
              <template v-for="(views, index) in views">
                <v-tooltip bottom :key="index + `-hint`">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="dm__secondary"
                      icon
                      plain
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon>mdi-grid</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ lang(views) }}</span>
                </v-tooltip>
              </template>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      views: ["big grid", "small grid", "list"],
      filters: ["newly created", "most members", "alphabetical"],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.dm-community-group-filters {
  .v-slide-group__next,
  .v-slide-group__prev {
    flex: 0% !important;
    width: 0px;
    min-width: 0px !important;
  }
  .v-tabs-slider-wrapper {
    height: 5px !important;
  }
  .v-btn:not(.v-btn--round) {
    height: 57px !important;
    &::before {
      color: var(-v--dm__primary3-base) !important;
    }
  }
  input {
    padding: 0px 15px !important;
  }
  .v-input__append-inner {
    margin-top: 0px !important;
  }
  .v-input__slot {
    padding: 0px !important;
  }
  .v-tabs {
    height: 100% !important;
    .v-tabs-bar {
      height: 100% !important;
    }
  }
  .v-input .v-label {
    line-height: 30px !important;
    padding: 0px 30px !important;
  }
}
</style>