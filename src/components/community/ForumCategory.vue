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
            <h2 class="text-capitalize">{{ lang(category.title) }}</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-forum-category-filters :category="category" />
      </v-col>
    </v-row>
    <!-- TODO : mobile responsive -->
    <!-- Refactor -->
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
    <!-- category -->
    <v-row>
      <template v-for="(cat, index) in category.categories">
        <v-col cols="12" :key="`${index}__cat`">
          <v-card class="rounded-lg pb-2 py-0 pb-0" flat>
            <v-card-text class="py-0 my-0">
              <v-row>
                <v-col class="d-flex align-center" cols="12" sm="5">
                  <v-list dense one-line>
                    <v-list-item>
                      <v-list-item-avatar class="mt-0">
                        <v-img :src="cat.avatar"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content class="mt-0 pt-0">
                        <v-list-item-title class="pt-0 text-capitalize">
                          <span>
                            <a
                              @click="
                                $router.push({
                                  name: `views.forums`,
                                  params: { category: dclean(cat.title) },
                                })
                              "
                            >
                              {{ lang(cat.title) }}
                            </a>
                            <br />
                            <span class="font-weight-regular caption text-wrap">
                              {{ lang(cat.description) }}</span
                            >
                          </span>
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="d-md-flex align-center d-none" cols="1">
                  <span class="caption text-wrap font-weight-bold">
                    {{ lang(cat.topics) }}
                  </span>
                </v-col>
                <v-col class="align-center d-md-flex d-none" sm="1">
                  <span class="font-weight-medium">
                    <span class="caption text-wrap font-weight-bold">
                      {{ lang(cat.posts) }}
                    </span>
                  </span>
                </v-col>
                <v-col class="d-flex flex-row align-center" cols="12" sm="5">
                  <span>
                    <template v-for="(recent, index) in cat.recents">
                      <a
                        class="caption font-weight-medium"
                        :key="index + `--recent`"
                        @click="
                          $router.push({
                            name: `views.forums`,
                            params: {
                              category: dclean(cat.title),
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
    <!-- TODO : Discussions -->
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
                v-for="(header, index) in discussionHeaders"
                :key="index"
              >
                {{ lang(header.title) }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="pt-0" cols="12">
        <v-card class="rounded-lg pa-0 ma-2 overflow-hidden" rounded>
          <v-card>
            <template v-for="(dis, index) in category.discussions">
              <v-card flat tile :key="index + `--discussion`">
                <v-card-text>
                  <v-row>
                    <v-col cols="12" sm="7">
                      <v-list dense two-line>
                        <v-list-item>
                          <v-list-item-content class="mt-0 pt-0">
                            <v-list-item-title class="pt-0 text-capitalize">
                              <v-chip class="text-uppercase" color="dm__primary" dark v-if="dis.pinned" small> {{ lang(`pinned`) }} </v-chip>
                              <span>
                                <a
                                  @click="
                                    $router.push({
                                      name: `views.forums`,
                                      params: { category: $route.params.category  , sub: dclean(dis.title) },
                                    })
                                  "
                                >
                                  {{ lang(dis.title) }}
                                </a>
                                <br />
                                <span
                                  class="font-weight-regular caption text-wrap"
                                >
                                  {{ lang(dis.description) }}</span
                                >
                              </span>
                            </v-list-item-title>
                            <v-list-item-subtitle>
                              <span
                                class="
                                  caption
                                  font-weight-light
                                  text-capitalize
                                "
                                >{{ lang(`started by`) }}
                              </span>
                              <v-avatar size="21">
                                <v-img :src="dis.author.avatar" />
                              </v-avatar>
                              <span
                                class="
                                  caption
                                  font-weight-medium
                                  text-capitalize
                                "
                              >
                                {{ dis.author.fullname }}
                              </span>
                              <span
                                class="
                                  caption
                                  font-weight-light
                                  text-capitalize
                                "
                              >
                                {{ dis.timestamp }}
                              </span>
                            </v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-col>
                    <v-col class="d-md-flex align-center d-none" cols="1">
                      <span class="caption font-weight-medium text-capitalize">
                        {{ dis.voices }}
                      </span>
                    </v-col>
                    <v-col class="d-md-flex align-center d-none" cols="1">
                      <span class="caption font-weight-medium text-capitalize">
                        {{ dis.replies }}
                      </span>
                    </v-col>
                    <v-col class="d-md-flex align-center d-none" cols="3">
                      <v-list dense one-line>
                        <v-list-item>
                          <v-list-item-avatar>
                            <v-img :src="dis.recent.author.avatar" />
                          </v-list-item-avatar>
                          <v-list-item-content class="mt-0">
                            <v-list-item-title class="pt-0 text-capitalize">
                              {{ lang(dis.recent.author.fullname) }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                              <span
                                class="
                                  caption
                                  font-weight-medium
                                  text-capitalize
                                "
                              >
                                {{ dis.recent.timestamp }}
                              </span>
                            </v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-list>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </template>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import vForumCategoryFilters from "./components/ForumCategoryFilters.vue";
export default {
  components: {
    vForumCategoryFilters,
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        {
          title: "category",
          span: 5,
          sm: true,
        },
        {
          title: "topics",
          span: 1,
          sm: true,
        },
        {
          title: "posts",
          span: 1,
        },
        {
          title: "recent topics",
          span: 5,
        },
      ],
      discussionHeaders: [
        {
          title: "discussion",
          span: 7,
          sm: true,
        },
        {
          title: "voices",
          span: 1,
          sm: true,
        },
        {
          title: "replies",
          span: 1,
        },
        {
          title: "activities",
          span: 3,
        },
      ]
    };
  },
};
</script>