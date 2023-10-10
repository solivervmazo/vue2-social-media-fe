<template>
  <div>
    <v-card-widget
      class="rounded-lg pa-5"
      :menu-items="['settings']"
      title="badges"
    >
      <template v-slot:header="{ title }">
        <span class="text-capitalize subtitle-2">
          {{ title }}
          <span class="dm__primary--text mx-1"> {{ badges.length }} </span>
        </span>
      </template>
      <v-card
        class="d-flex align-content-start flex-wrap mt-3"
        flat
        tile
      >
        <v-avatar class="ma-2" v-for="(badge, i) in badges" :key="i + $uuid()">
          <v-img :src="badge.icon2" />
        </v-avatar>
      </v-card>
    </v-card-widget>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      page: 0,
      badges: [
        {
          icon: "https://odindesignthemes.com/vikinger/img/badge/bronze-b.png",
          icon2: "https://odindesignthemes.com/vikinger/img/badge/bronze-s.png",
          color: "brown lighten-1",
          title: "bronze user",
          subtitle: "Has posted more than 1 post on their profile",
          progress: 100,
          status: "unlocked!",
          experience: 20,
        },
        {
          icon: "https://odindesignthemes.com/vikinger/img/badge/silver-b.png",
          icon2: "https://odindesignthemes.com/vikinger/img/badge/silver-s.png",
          color: "blue-grey lighten-3",
          title: "silver user",
          subtitle: "Has posted more than 100 posts on their profile",
          progress: 100,
          status: "unlocked!",
          experience: 40,
        },
        {
          icon: "https://odindesignthemes.com/vikinger/img/badge/gold-b.png",
          icon2: "https://odindesignthemes.com/vikinger/img/badge/gold-s.png",
          color: "amber accent-2",
          title: "gold user",
          subtitle: "Has posted more than 500 posts on their profile",
          progress: 80,
          status: "461/500",
          experience: 60,
        },
        {
          icon: "https://odindesignthemes.com/vikinger/img/badge/platinum-b.png",
          icon2:
            "https://odindesignthemes.com/vikinger/img/badge/platinum-s.png",
          color: "indigo darken-2",
          title: "platinum user",
          subtitle: "Has posted more than 1000 posts on their profile",
          progress: 40,
          status: "461/1000",
          experience: 100,
        },
        {
          icon: "https://odindesignthemes.com/vikinger/img/badge/traveller-b.png",
          icon2:
            "https://odindesignthemes.com/vikinger/img/badge/traveller-s.png",
          color: "blue-grey darken-3",
          title: "forum traveller",
          subtitle: "Created at least 1 topic on 5 different groups forums",
          progress: 80,
          status: "1 topic",
          experience: 40,
        },
        {
          icon: "https://odindesignthemes.com/vikinger/img/badge/caffeinated-b.png",
          icon2:
            "https://odindesignthemes.com/vikinger/img/badge/caffeinated-s.png",
          color: "green darken-2",
          title: "caffeinated",
          subtitle: "Commented on a friend's post inside 30 seconds of posted",
          progress: 0,
          status: "locked",
          experience: 40,
        },
      ],
    };
  },
};
</script>
