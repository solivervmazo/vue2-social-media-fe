<template>
  <div class="dm-item-details">
    <v-card class="rounded-lg" rounded flat>
      <v-card-text>
        <!-- Add To Cart  -->
        <v-row>
          <v-col class="mb-5 text-center" cols="12">
            <h1 class="pt-3">
              <span class="dm__primary--text">{{ lang(`$`) }}</span>
              <span>{{ dmoney(item.price) }}</span>
            </h1>
          </v-col>
        </v-row>
        <v-form class="mb-5">
          <v-row>
            <v-expansion-panels v-model="license" flat accordion mandatory>
              <v-expansion-panel
                v-for="(item, i) in item.licenses"
                :value="item"
                :key="i"
              >
                <v-expansion-panel-header class="py-0" hide-actions>
                  <template v-slot>
                    <v-checkbox
                      readonly
                      class="py-0"
                      dense
                      hide-details
                      :input-value="i == license"
                    >
                      <template v-slot:label>
                        <span class="font-weight-medium text-capitalize">{{
                          lang(item.title)
                        }}</span>
                      </template>
                    </v-checkbox>
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row>
                    <v-col cols="12">
                      <span class="caption font-weight-light">{{
                        lang(item.description)
                      }}</span>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn
                block
                color="dm__primary"
                class="caption font-weight-medium text-capitalize"
                dark
              >
                {{ lang(`add to cart`) }}
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
        <!-- Ratings -->
        <v-row class="mb-5">
          <v-col class="text-center" cols="6">
            <v-row>
              <v-col class="pb-0" cols="12">
                <span class="subtitle-1 font-weight-bold">{{
                  item.sales
                }}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pt-0" cols="12">
                <span
                  class="
                    caption
                    text-uppercase
                    font-weight-bold
                    dm__disabled1--text
                  "
                >
                  {{ lang(`sales`) }}
                </span>
              </v-col>
            </v-row>
          </v-col>
          <v-divider class="my-5" vertical />
          <v-col class="text-center" cols="6">
            <v-row>
              <v-col class="pb-0" cols="12">
                <span class="subtitle-1 font-weight-bold"
                  >{{ item.ratings }}/5</span
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pt-0" cols="12">
                <v-rating
                  readonly
                  :value="item.ratings"
                  background-color="orange lighten-3"
                  color="orange"
                  size="15"
                >
                </v-rating>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <!-- author -->
        <v-row>
          <v-col class="py-0" cols="12">
            <span
              class="
                subtitle-1
                font-weight-medium
                text-capitalize
                dm__secondary4--text
              "
            >
              {{ lang(`item author`) }}
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-list class="py-0" dense two-line>
              <v-list-item class="px-0">
                <v-list-item-avatar>
                  <v-img :src="item.author.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content class="mt-1 pt-1">
                  <v-list-item-title class="pt-0 text-capitalize">
                    <a
                      class="dm__secondary4--text"
                      @click="
                        $router.push({
                          name: `views.profile`,
                          params: { profile: dclean(item.author.account) },
                        })
                      "
                    >
                      {{ lang(item.author.fullname) }}
                    </a>
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    <span
                      class="
                        font-weight-regular
                        caption
                        text-wrap
                        dm__secondary--text
                      "
                    >
                      {{ lang(item.author.description) }}
                    </span>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="pt-0" cols="12">
            <v-item-group>
              <v-container>
                <v-row>
                  <v-item
                    class="mx-1"
                    v-for="(badge, i) in item.author.badges"
                    v-slot="{}"
                    :key="i + $uuid()"
                  >
                    <v-avatar size="32">
                      <v-img :src="badge" />
                    </v-avatar>
                  </v-item>
                </v-row>
              </v-container>
            </v-item-group>
          </v-col>
        </v-row>
        <v-row class="mb-5">
          <v-col cols="12">
            <v-btn class="rounded-lg" block outlined plain rounded>
              <span class="text-capitalize caption font-weight-bold">
                {{ lang(`view author's store`) }}</span
              >
            </v-btn>
          </v-col>
        </v-row>
        <!-- item metadata  -->
        <v-row>
          <v-col class="py-0 mb-4" cols="12">
            <span
              class="
                subtitle-1
                font-weight-medium
                text-capitalize
                dm__secondary4--text
              "
            >
              {{ lang(`item details`) }}
            </span>
          </v-col>
        </v-row>
        <!-- TODO : item details -->
        <v-row class="mb-2">
          <v-col cols="12">
            <template v-for="(detail, i) in Object.keys(item.details)">
              <v-row :key="i + $uuid()">
                <v-col class="py-1" cols="4">
                  <span
                    class="
                      caption
                      font-weight-light
                      text-capitalize
                      dm__secondary4--text
                    "
                  >
                    {{ lang(detail) }}
                  </span>
                </v-col>
                <v-col class="py-1" cols="8">
                  <span v-if="typeof item.details[detail] === 'object'">
                    <span
                      v-if="Array.isArray(item[item.details[detail].target])"
                    >
                      <template
                        v-for="(link, i) in item[item.details[detail].target]"
                      >
                        <a
                          class="caption font-weight-medium text-capitalize"
                          :key="i + $uuid()"
                        >
                          {{ lang(link) }}
                        </a>
                        <span v-if="i < item[item.details[detail].target].length -1" class="caption font-weight-medium text-capitalize dm__primary--text" :key="i + $uuid()">
                            ,
                        </span>
                      </template>
                    </span>
                    <a
                      class="caption font-weight-medium text-capitalize"
                      v-else
                    >
                      {{ lang(item[item.details[detail].target]) }}
                    </a>
                  </span>
                  <span
                    v-else
                    class="
                      caption
                      font-weight-medium
                      text-capitalize
                      dm__secondary4--text
                    "
                  >
                    {{ lang(item.details[detail]) }}
                  </span>
                </v-col>
              </v-row>
            </template>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      license: null,
    };
  },
  watch: {
    license: function (nv) {
      console.log("nv", nv);
    },
  },
};
</script>

<style lang="scss">
.dm-item-details {
  .v-rating .v-icon {
    padding: 0px;
  }
}
</style>