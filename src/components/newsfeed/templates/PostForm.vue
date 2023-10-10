<template>
  <v-card class="dm-post-form rounded-lg white pa-0 pt-2" flat>
    <v-tabs fixed-tabs>
      <v-tab :ripple="false" class="pb-2 dm__secondary--text px-0">
        <v-icon class="ma-2" small>mdi-post</v-icon>
        <span
          class="
            text-none text-capitalize
            font-weight-medium
            caption
            text-no-wrap
          "
        >
          {{ lang(`status`) }}
        </span>
      </v-tab>
      <v-tab :ripple="false" class="pb-2 dm__secondary--text px-0">
        <v-icon class="ma-2" small>mdi-post-outline</v-icon>
        <span
          class="
            text-none text-capitalize
            font-weight-medium
            caption
            text-no-wrap
          "
        >
          {{ lang(`blog post`) }}
        </span>
      </v-tab>
      <v-tab :ripple="false" class="pb-2 dm__secondary--text px-0">
        <v-icon class="ma-2" small>mdi-poll</v-icon>
        <span class="text-none text-capitalize font-weight-medium caption">{{
          lang(`poll`)
        }}</span>
      </v-tab>
    </v-tabs>
    <v-divider />
    <v-textarea
      class="subtitle-2"
      no-resize
      flat
      solo
      :placeholder="lang(`what's in your mind?`)"
    >
    </v-textarea>
    <v-divider />
    <v-card-actions class="pa-4">
      <div class="d-flex flex-row">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="dm__secondary4--text" icon plain v-bind="attrs" v-on="on">
              <v-icon>mdi-camera-outline</v-icon>
            </v-btn>
          </template>
          <span class="text-capitalize caption">{{
            lang(`insert photo`)
          }}</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="dm__secondary4--text" icon plain v-bind="attrs" v-on="on">
              <v-icon>mdi-gif</v-icon>
            </v-btn>
          </template>
          <span class="text-capitalize caption">{{ lang(`insert gif`) }}</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="dm__secondary4--text" icon plain v-bind="attrs" v-on="on">
              <v-icon>mdi-pound</v-icon>
            </v-btn>
          </template>
          <span class="text-capitalize caption">{{ lang(`insert tag`) }}</span>
        </v-tooltip>
      </div>
      <v-spacer class="d-sm-none d-md-block" />
      <v-btn
        color="dm__secondary4--text rounded-lg text-capitalize caption"
        dark
        rounded
      >
        {{ lang(`discard`) }}
      </v-btn>
      <v-btn color="dm__info rounded-lg text-capitalize caption" dark rounded>
        {{ lang(`post`) }}
      </v-btn>
    </v-card-actions>
    <v-divider />
  </v-card>
</template>

<style lang="scss">
.dm-post-form {
  .v-tabs:not(.v-tabs--vertical):not(.v-tabs--right)
    > .v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-slide-group--has-affixes) {
    .v-slide-group__prev,
    .v-slide-group__next {
      display: none !important;
    }
  }
  .v-tabs-bar {
    .v-tab {
      &::before {
        background-color: rgba(255, 255, 255, 0) !important;
      }
      &.v-tab--active {
        color: var(--v-dm__secondary4--text-base) !important;
      }
    }
  }
  .v-textarea textarea {
    padding: 14px 15px !important;
  }
}
</style>