<template>
  <div class="dm-members-widget">
    <v-card-widget
      class="rounded-lg pa-5"
      :menu-items="['settings']"
      title="members"
    >
    <v-calendar-card :widget="true" />
    </v-card-widget>
  </div>
</template>

<script>
import vCalendarCard from "../components/CalendarCard.vue";
export default {
  components: {
      vCalendarCard
  },
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
