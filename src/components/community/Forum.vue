<template>
  <div>
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">
          {{ lang(`welcome to`) }}
        </span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col cols="6">
            <h2 class="text-capitalize">{{ lang(`dreamax forums`) }}</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-forum-filters />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-lg ma-2 transparent py-0 pb-0" flat>
          <v-card-text class="py-0 my-0">
            <v-row>
              <v-col
                class="
                  d-md-flex d-none
                  mt-6
                  font-weight-bold
                  text-capitalize
                  caption
                  py-0
                  pb-0
                "
                cols="6"
                :sm="header.span"
                v-for="(header, index) in headers"
                :key="index"
              >
                {{ lang(header.title) }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- TODO : mobile responsive -->
    <v-row>
      <template v-for="(category, index) in categories">
        <v-col cols="12" :key="`${index}__category`">
          <v-card class="rounded-lg pb-2 py-0 pb-0" flat>
            <v-card-text class="py-0 my-0">
              <v-row>
                <v-col class="d-flex align-center" cols="12" sm="5">
                  <v-list dense one-line>
                    <v-list-item>
                      <v-list-item-avatar class="mt-0">
                        <v-img :src="category.avatar"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content class="mt-0 pt-0">
                        <v-list-item-title class="pt-0 text-capitalize">
                          <span>
                            <a
                              @click="
                                $router.push({
                                  name: `views.forums`,
                                  params: { category: dclean(category.title) },
                                })
                              "
                            >
                              {{ lang(category.title) }}
                            </a>
                            <br />
                            <span class="font-weight-regular caption text-wrap">
                              {{ lang(category.description) }}</span
                            >
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="d-md-flex align-center d-none" cols="1">
                  <span class="caption text-wrap font-weight-bold">
                    {{ lang(category.topics) }}
                  </span>
                </v-col>
                <v-col class="align-center d-md-flex d-none" sm="1">
                  <span class="font-weight-medium">
                    <span class="caption text-wrap font-weight-bold">
                      {{ lang(category.posts) }}
                    </span>
                  </span>
                </v-col>
                <v-col class="d-flex flex-row align-center" cols="12" sm="5">
                  <span>
                    <template v-for="(recent, index) in category.recents">
                      <a
                        class="caption font-weight-medium"
                        :key="index + `--recent`"
                        @click="
                          $router.push({
                            name: `views.forums`,
                            params: {
                              category: dclean(category.title),
                              sub: dclean(recent),
                            },
                          })
                        "
                      >
                        {{ recent }}
                      </a>
                      <br :key="index + `--recent-br`" />
                    </template>
                  </span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </div>
</template>
<script>
import vForumFilters from "./components/ForumFilters.vue";
export default {
  components: {
    vForumFilters,
  },
  props: {
    headers: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>