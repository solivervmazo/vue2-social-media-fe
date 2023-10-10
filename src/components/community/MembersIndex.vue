<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12">
            <v-member-filters />
          </v-col>
        </v-row>
        <v-row>
          <template v-for="(member, index) in members">
            <v-col cols="12" sm="4" :key="index">
              <v-member-card :content="member" />
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import vMemberFilters from "./components/MemberFilters.vue";
import vMemberCard from "./components/MemberCard.vue";
export default {
  components: {
    vMemberFilters,
    vMemberCard,
  },
  data() {
    return {
      members: [
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "NekoBebop",
          subtitle: "WWW.STORE.COM/NEKOPRINTS",
          description:
            "Hello! I'm James Hart, but I go by the name of Destroy Dex on my stream channel. Come to check out the latest gaming news!",
          overview: {
            members: 900,
            posts: 105,
            visits: 213,
          },
          accounts: [
            {
              icon: "mdi-twitch",
              color: "deep-purple lighten-1",
            },
            {
              icon: "mdi-facebook",
              color: "indigo darken-1",
            },
            {
              icon: "mdi-instagram",
              color: "pink lighten-2",
            },
          ],
          badges: [
            {
              icon: "https://odindesignthemes.com/vikinger/img/badge/age-s.png",
              color: "blue lighten-2",
            },
            {
              icon: "https://odindesignthemes.com/vikinger/img/badge/platinum-s.png",
              color: "pink lighten-2",
            },
            {
              icon: "https://odindesignthemes.com/vikinger/img/badge/caffeinated-s.png",
              color: "grey lighten-2",
            },
          ],
          author: "soliver mazo",
        },
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Destroy Dex",
          subtitle: "WWW.TWITCH.TV/D-DESTROYER",
          overview: {
            members: 300,
            posts: 25,
            visits: 16,
          },
          accounts: [
            {
              icon: "mdi-twitter",
              color: "blue lighten-2",
            },
            {
              icon: "mdi-facebook",
              color: "indigo darken-1",
            },
            {
              icon: "mdi-google-plus",
              color: "red darken-1",
            },
          ],
          badges: [
            {
              icon: "https://odindesignthemes.com/vikinger/img/badge/age-s.png",
              color: "blue lighten-2",
            },
            {
              icon: "https://odindesignthemes.com/vikinger/img/badge/platinum-s.png",
              color: "pink lighten-2",
            },
            {
              icon: "https://odindesignthemes.com/vikinger/img/badge/propphoto-s.png",
              color: "grey lighten-2",
            },
          ],
          author: "soliver mazo",
        },
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Nick Grissom",
          subtitle: "AKA PHANTOM STREAMER",
          description:
            "Hello! I'm James Hart, but I go by the name of Destroy Dex on my stream channel. Come to check out the latest gaming news!",
          overview: {
            members: 300,
            posts: 25,
            visits: 16,
          },
          accounts: [
            {
              icon: "mdi-instagram",
              color: "pink lighten-2",
            },
            {
              icon: "mdi-google-plus",
              color: "red darken-1",
            },
          ],
          badges: [
            {
              icon: "https://odindesignthemes.com/vikinger/img/badge/age-s.png",
              color: "blue lighten-2",
            },
            {
              icon: "https://odindesignthemes.com/vikinger/img/badge/sloved-s.png",
              color: "pink lighten-2",
            },
            {
              icon: "https://odindesignthemes.com/vikinger/img/badge/caffeinated-s.png",
              color: "grey lighten-2",
            },
            {
              icon: "https://odindesignthemes.com/vikinger/img/badge/liked-s.png",
              color: "grey lighten-2",
            },
          ],
          author: "soliver mazo",
        },
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Sarah Diamond",
          subtitle: "WWW.DIAMONDART.COM",
          overview: {
            posts: 300,
            friends: 25,
            visits: 16,
          },
          accounts: [
            {
              icon: "mdi-twitter",
              color: "blue lighten-2",
            },
            {
              icon: "mdi-twitch",
              color: "deep-purple lighten-1",
            },
            {
              icon: "mdi-facebook",
              color: "indigo darken-1",
            },
          ],
          badges: [
            {
              icon: "https://odindesignthemes.com/vikinger/img/badge/age-s.png",
              color: "blue lighten-2",
            },
            {
              icon: "https://odindesignthemes.com/vikinger/img/badge/platinum-s.png",
              color: "pink lighten-2",
            },
            {
              icon: "https://odindesignthemes.com/vikinger/img/badge/caffeinated-s.png",
              color: "grey lighten-2",
            },
            {
              icon: "https://odindesignthemes.com/vikinger/img/badge/caffeinated-s.png",
              color: "grey lighten-2",
            },
          ],
          author: "soliver mazo",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>