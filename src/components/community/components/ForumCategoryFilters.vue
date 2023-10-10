<template>
  <v-card class="rounded-lg" flat>
    <v-card-text class="pa-5">
      <v-row>
        <v-col cols="12" sm="6">
          <v-row>
            <v-col class="pb-0 pb-0" cols="12">
              <v-breadcrumbs class="py-0 px-0">
                <router-link :to="{ name: 'views.forums' }">
                  <v-breadcrumbs-item href>
                    <a>{{ lang(`forums`) }}</a>
                  </v-breadcrumbs-item>
                </router-link>
                <v-divider vertical class="mx-2 dm__primary my-1" />
                <v-breadcrumbs-item>
                  {{ lang(category.title) }}
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
                <span
                  class="
                    caption
                    font-weight-regular
                    text-capitalize
                    dm__primary--text
                  "
                >
                  {{ lang(`the jukebox`) }}
                </span>
                <span class="caption font-weight-regular text-capitalize">
                  {{ lang(`2 weeks ago`) }}
                </span>
              </h1>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="6">
          <v-form>
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`search forums`)"
              outlined
            >
              <template v-slot:append-outer>
                <v-btn color="dm__primary" dark x-large>
                  <v-icon class="py-0"> mdi-magnify </v-icon>
                </v-btn>
              </template>
            </v-text-field>
          </v-form>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: `forums`,
          url: { name: `views.forums` },
        },
        {
          text: this.category.title,
          url: {
            name: `views.forums`,
            params: { category: this.dclean(this.category.title) },
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.v-input .v-label {
  line-height: 30px !important;
}
</style>