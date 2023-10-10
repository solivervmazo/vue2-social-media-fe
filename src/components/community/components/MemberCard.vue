<template>
  <div class="dm-community-group-card">
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-lg" width="100%" flat rounded>
          <v-img :src="content.banner" height="120px" />
          <v-card-text class="pa-5 text-center">
            <v-row>
              <v-col class="d-flex justify-center" cols="12">
                <div style="height: 30px">
                  <v-avatar
                    style="postion: absolute; left: 0px; top: -58px"
                    class="pa-1"
                    size="80"
                  >
                    <img :src="content.avatar" />
                  </v-avatar>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="my-2" cols="12">
                <h1 class="dm__secondary4--text subtitle-2">{{ content.title }}</h1>
                <span class="caption font-weight-medium text-uppercase">
                  {{ content.subtitle }}
                </span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex flex-row justify-center py-4" cols="12">
                <v-avatar
                  class="ma-1"
                  v-for="badge in content.badges"
                  size="30"
                  :key="badge.title"
                >
                  <v-img :src="badge.icon" />
                </v-avatar>
              </v-col>
            </v-row>

            <v-carousel
              height="auto"
              hide-delimiters
              :show-arrows="!!content.description"
            >
              <template v-slot:prev="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" x-small>
                  <v-icon> mdi-chevron-left </v-icon>
                </v-btn>
              </template>
              <v-carousel-item>
                <v-row>
                  <v-col class="d-flex flex-row justify-center" cols="12">
                    <template
                      v-for="(overview, index, count) in content.overview"
                    >
                      <div class="mx-2 px-3" :key="overview">
                        <span
                          class="mb-5 dm__secondary4--text font-weight-bold caption-1"
                        >
                          <span class="text-capitalize font-weight-medium">
                            {{ overview }}
                          </span>
                          <br />
                          <small class="grey--text font-weight-medium">
                            {{ index }}
                          </small>
                        </span>
                      </div>
                      <v-divider
                        v-if="count < Object.keys(content.overview).length - 1"
                        vertical
                        class="my-3"
                        :key="index"
                      ></v-divider>
                    </template>
                  </v-col>
                </v-row>
              </v-carousel-item>
              <v-carousel-item>
                <v-row>
                  <v-col class="px-10" cols="12">
                    <p class="caption px-5 text-justify">
                      {{ content.description }}
                    </p>
                  </v-col>
                </v-row>
              </v-carousel-item>
              <template v-slot:next="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on" x-small>
                  <v-icon> mdi-chevron-right </v-icon>
                </v-btn>
              </template>
            </v-carousel>
            <v-row>
              <v-col class="d-flex flex-row justify-center py-4 mt-5" cols="12">
                <v-btn
                  v-for="account in content.accounts"
                  :color="account.color"
                  class="rounded-lg"
                  rounded
                  dark
                  :key="account.title"
                  icon
                >
                  <v-icon rounded>{{ account.icon }}</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-btn block color="dm__info rounded-lg" rounded dark large>
                  <span class="text-capitalize caption">
                    {{ lang(`add friend`) }}+
                  </span>
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6">
                <v-btn block color="dm__primary rounded-lg" rounded dark large>
                  <span class="text-capitalize caption">
                    {{ lang(`send message`) }}
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
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