<template>
  <v-card class="rounded-lg" flat>
    <v-card-text class="pa-5">
      <v-row>
        <v-col cols="12" sm="12">
          <v-row>
            <v-col class="pb-0 pb-0" cols="12">
              <v-breadcrumbs class="py-0 px-0">
                <router-link :to="{ name: 'views.forums' }">
                  <v-breadcrumbs-item href>
                    <a>{{ lang(`forums`) }}</a>
                  </v-breadcrumbs-item>
                </router-link>
                <v-divider vertical class="mx-2 dm__primary my-1" />
                <router-link :to="{ name: 'views.forums' , params: { category: dclean(category.title) } }">
                  <v-breadcrumbs-item href>
                    <a>{{ lang(category.title) }}</a>
                  </v-breadcrumbs-item>
                </router-link>
                <v-divider vertical class="mx-2 dm__primary my-1" />
                <router-link :to="{ name: 'views.forums' , params: { category: dclean(category.title) } }">
                  <v-breadcrumbs-item href>
                    <a>{{ lang(room.category) }}</a>
                  </v-breadcrumbs-item>
                </router-link>
                <v-divider vertical class="mx-2 dm__primary my-1" />
                <v-breadcrumbs-item>
                  {{ lang(room.title) }}
                </v-breadcrumbs-item>
              </v-breadcrumbs>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <h1>
                <span class="caption font-weight-regular text-capitalize">
                  {{ lang(`last post by`) }}
                </span>
                <v-avatar
                    size="23"
                >
                    <v-img :src="room.recent.author.avatar" />
                </v-avatar>
                <span
                  class="
                    caption
                    font-weight-regular
                    text-capitalize
                    dm__primary--text
                  "
                >
                  {{ lang( room.recent.author.fullname ) }}
                </span>
                <span class="caption font-weight-regular text-capitalize">
                  {{ lang( room.recent.timestamp ) }}
                </span>
              </h1>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    room: {
      type: Object,
      required: true,
    },
    category: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.v-input .v-label {
  line-height: 30px !important;
}
</style>