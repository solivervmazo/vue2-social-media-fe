<template>
  <div>
    <v-card-widget
      class="rounded-lg pa-5"
      :menu-items="['settings']"
      title="feature badges"
    >
      <template v-slot:header="{ title }">
        <span class="text-capitalize subtitle-2">
          {{ title }}
        </span>
        <v-spacer />
        <v-btn @click="page--" icon small>
          <v-icon small>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon small>
          <v-icon @click="page++" small>mdi-chevron-right</v-icon>
        </v-btn>
      </template>
      <v-carousel
        class="mt-5"
        continuous
        hide-delimiters
        :show-arrows="false"
        v-model="page"
        height="auto"
      >
        <v-carousel-item v-for="(badge, index) in badges" :key="index">
          <v-my-badge 
              :avatar="badge.icon"
              :title="badge.title"
              :description="badge.subtitle"
              :progress="badge.progress"
              :status="badge.status"
              text-center
            />
        </v-carousel-item>
      </v-carousel>
    </v-card-widget>
  </div>
</template>

<script>
import vMyBadge from "../core/Badge.vue";
export default {
  components:{
    vMyBadge
  },
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
