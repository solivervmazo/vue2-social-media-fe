<template>
  <div class="dm-members-widget">
    <v-card-widget
      class="rounded-lg pa-5"
      :menu-items="['settings']"
      title="members"
    >
      <v-tabs :show-arrows="false">
        <template v-for="(filter, index) in Object.assign([], filters)">
          <v-tab
            class="pb-0 py-0 dm__secondary--text text-nowrap"
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
              {{ lang(filter.text) }}
            </span>
          </v-tab>
          <v-divider class="my-9" inset vertical :key="index + `-divider`" />
        </template>
      </v-tabs>
      <v-list two-line>
        <v-list-item v-for="member in members" :key="member.title">
          <v-list-item-avatar>
            <v-img :src="member.avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <span class="body-2 font-weight-medium text-capitalize"> {{ member.title }} </span>
            </v-list-item-title>
            <v-list-item-subtitle>
              <span class="text-capitalize caption font-weight-light dm__secondary4--text">{{ member.subtitle }} </span>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon> mdi-emoticon-happy-outline </v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-widget>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      filters: [{ text: "newest" }, { text: "popular" }, { text: "active" }],
      members: [
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "NekoBebop",
          subtitle: "WWW.STORE.COM/NEKOPRINTS",
        },
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Destroy Dex",
          subtitle: "WWW.TWITCH.TV/D-DESTROYER",
        },
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Nick Grissom",
          subtitle: "AKA PHANTOM STREAMER",
        },
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Sarah Diamond",
          subtitle: "WWW.DIAMONDART.COM",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.dm-members-widget {
  .v-slide-group__next,
  .v-slide-group__prev {
    flex: 0% !important;
    width: 0px;
    min-width: 0px !important;
  }
  .v-tab{
      min-width: 0px;
  }
}
</style>
