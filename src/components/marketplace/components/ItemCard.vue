<template>
  <div class="dm-market-item-card">
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-lg" width="100%" flat rounded>
          <v-card-title
            :style="{ background: `url('${content.cover}')`, height: '180px' }"
          >
          </v-card-title>
          <v-card-text class="">
            <v-row style="height: 40px">
              <v-chip
                pill
                class="caption font-weight-medium elevation-6"
                color="white"
                :elevation="1"
                style="postion: absolute; left: 0%; top: 0px"
              >
                <span class="dm__primary--text mx-1">$</span>
                <span class="text-capitalize">
                  {{ dmoney(content.price) }}
                </span>
              </v-chip>
            </v-row>
            <v-row>
              <v-col class="my-2" cols="12">
                <h1 class="dm__secondary4--text subtitle-2 text-capitalize mb-3">
                  <router-link
                    :to="{
                      name: `views.marketplace`,
                      params: { item: dclean(content.title) },
                    }"
                  >
                    {{ content.title }}
                  </router-link>
                  <br />
                  <span>
                    <span>
                        <v-icon x-small>
                          mdi-checkbox-blank-circle-outline
                        </v-icon>
                        <span class="mx-1">
                          <router-link
                            class="caption text-capitalize dm__secondary4--text text-decoration-none"
                            :to="{
                              name: `views.marketplace`,
                              query: { marketCategory : dclean(content.marketCategory), category : dclean(content.category) }
                            }"
                          >
                            {{ content.category }}
                          </router-link>
                        </span>
                    </span>
                  </span>
                </h1>
                <span
                  class="dm__secondary4--text caption font-weight-light text-capitalize"
                >
                  {{ content.description }}
                </span>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider />
          <v-card-actions class="grey lighten-5">
            <v-list-item dense>
              <v-list-item-avatar class="mx-1" size="25">
                <v-img :src="content.author.avatar" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <small>{{ content.author.fullname }}</small>
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-rating
                  readonly
                  :value="content.ratings"
                  background-color="orange lighten-3"
                  color="orange"
                  size="10"
                ></v-rating>
              </v-list-item-action>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    content: {
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
.dm-market-item-card {
  .v-rating .v-icon {
    padding: 0px;
  }
}
</style>