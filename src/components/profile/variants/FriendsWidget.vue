<template>
  <div class="dm-members-widget">
    <v-card-widget
      class="rounded-lg pa-5"
      :menu-items="['settings']"
      title="friends"
    >
      <template v-slot:header="{ title }">
        <span class="text-capitalize subtitle-2">
          {{ title }}
          <span class="dm__primary--text mx-1"> {{ members.length }} </span>
        </span>
      </template>
      <v-list two-line>
        <v-list-item v-for="member in members" :key="member.title">
          <v-list-item-avatar>
            <v-img :src="member.avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <span class="body-2 font-weight-medium text-capitalize">
                {{ member.title }}
              </span>
            </v-list-item-title>
            <v-list-item-subtitle>
              <span
                class="
                  text-capitalize
                  caption
                  font-weight-light
                  dm__secondary4--text
                "
                >{{ member.subtitle }}
              </span>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template>
        <v-row>
          <v-col cols="12">
            <v-btn
              block
              color="dm__info"
              class="caption text-capitalize font-weight-light rounded-lg"
              rounded
              dark
              :to="{ name: `timeline.friends` }"
            >
              {{ lang(`see all friends`) }}
            </v-btn>
          </v-col>
        </v-row>
      </template>
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
          subtitle: "1 friends in common",
        },
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Destroy Dex",
          subtitle: "3 friends in common",
        },
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Nick Grissom",
          subtitle: "10 friends in common",
        },
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Sarah Diamond",
          subtitle: "5friends in common",
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
  .v-tab {
    min-width: 0px;
  }
}
</style>
