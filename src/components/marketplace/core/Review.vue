<template>
  <div class="dm-item-review">
    <v-card flat>
      <v-list class="py-0" dense three-line>
        <v-list-item>
          <v-list-item-avatar class="mt-1">
            <v-img :src="review.author.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content class="mt-0 pt-0">
            <v-list-item-title class="pt-0 text-capitalize text-nowrap">
              <v-row>
                <v-col class="d-flex flex-row align-center" cols="12">
                  <v-rating
                    readonly
                    :value="review.ratings"
                    background-color="orange lighten-3"
                    color="orange"
                    size="15"
                  >
                  </v-rating>
                  <v-chip
                    class="text-capitalize mx-2 px-2 dm__primary"
                    dark
                    small
                  >
                    {{ lang(review.tag) }}
                  </v-chip>
                </v-col>
              </v-row>
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
                {{ lang(review.reason) }}
              </span>
            </v-list-item-subtitle>
            <v-list-item-subtitle
              class="font-weight-regular caption text-wrap dm__secondary--text"
            >
              <v-item-group>
                <v-container>
                  <v-row>
                    <v-item v-slot="{}">
                      <v-btn
                        class="font-weight-regular text-capitalize dm__secondary4--text px-0"
                        @click="
                          $router.push({
                            name: `views.profile`,
                            params: { profile: dclean(comment.author.account) },
                          })
                        "
                        plain
                        x-small
                      >
                        {{ lang(review.author.fullname) }}
                      </v-btn>
                    </v-item>
                    <v-item v-slot="{}">
                      <v-btn
                        class="font-weight-regular text-capitalize dm__secondary4--text"
                        :link="false"
                        plain
                        x-small
                      >
                        {{ review.timestamp }}
                      </v-btn>
                    </v-item>
                    <v-item v-slot="{}">
                      <v-menu offset-overflow offset-y left>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="dm__secondary"
                            v-bind="attrs"
                            v-on="on"
                            icon
                            x-small
                          >
                            <v-icon> mdi-dots-horizontal </v-icon>
                          </v-btn>
                        </template>
                        <v-list
                          class="dm-feed-post-list"
                          dense
                          min-width="150px"
                          single-line
                        >
                          <v-list-item
                            class="py-0"
                            v-for="item in ['report review']"
                            :key="item"
                            link
                          >
                            <v-list-item-title
                              class="caption font-weight-medium text-capitalize"
                            >
                              {{ item }}
                            </v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-item>
                  </v-row>
                </v-container>
              </v-item-group>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.dm-item-review {
  .v-rating .v-icon {
    padding: 0px;
  }
}
</style>