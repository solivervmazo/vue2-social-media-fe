<template>
  <v-container>
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">
          {{ lang(`chosen by the community`) }}
        </span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col cols="6">
            <h2 class="text-capitalize">{{ lang(`featured streamers`) }}</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <template v-for="(streamer, index) in streamers">
            <v-col cols="12" sm="2" :key="index">
              <!-- <v-quest-card :content="quest" /> -->
              <v-streamer-card :content="streamer" />
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">
          {{ lang(`watch what you want`) }}
        </span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col cols="6">
            <h2 class="text-capitalize">{{ lang(`browse all streams`) }}</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-stream-filters />
      </v-col>
    </v-row>
    <v-row>
      <template v-for="(stream, index) in streams">
        <v-col cols="12" sm="3" :key="index + `--vod`">
          <!-- <v-quest-card :content="quest" /> -->
          <v-stream-card :content="stream" />
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import vStreamerCard from "./components/StreamerCard.vue";
import vStreamFilters from "./components/StreamFilters.vue";
import vStreamCard from "./components/StreamCard.vue";
export default {
  components: {
    vStreamerCard,
    vStreamFilters,
    vStreamCard,
  },
  data() {
    return {
      streamers: [
        {
          banner: "https://odindesignthemes.com/vikinger/img/cover/01.jpg",
          avatar: "https://odindesignthemes.com/vikinger/img/avatar/01.jpg",
          title: "GameHuntress",
          author: "Marina Valentine",
          status: "offline",
        },
        {
          banner: "https://odindesignthemes.com/vikinger/img/cover/04.jpg",
          avatar: "https://odindesignthemes.com/vikinger/img/avatar/02.jpg",
          title: "NekoStreamz",
          author: "Neko Bebop",
          status: "live",
        },
        {
          banner: "https://odindesignthemes.com/vikinger/img/cover/05.jpg",
          avatar: "https://odindesignthemes.com/vikinger/img/avatar/03.jpg",
          title: "BeardedWonder66",
          author: "Bearded Wonder",
          status: "live",
        },
      ],
      streams: [
        {
          vod: "https://player.twitch.tv/?channel=shahzam&parent=localhost",
          avatar: "https://odindesignthemes.com/vikinger/img/avatar/01.jpg",
          title: "Rony's EggRing Quest",
          author: "@BeardedWonder66",
          category: "Rony da Hedgehog",
        },
        {
          vod: "https://player.twitch.tv/?channel=shahzam&parent=localhost",
          avatar: "https://odindesignthemes.com/vikinger/img/avatar/03.jpg",
          title: "Robo Bross Level Maker",
          author: "@TomatoFilter",
          category: "Super Robo Bross II",
        },
        {
          vod: "https://player.twitch.tv/?channel=shahzam&parent=localhost",
          avatar: "https://odindesignthemes.com/vikinger/img/avatar/05.jpg",
          title: "Athena Goddess Gameplay",
          author: "@StaggPatrns",
          category: "Zodiac Goddess",
        },
        {
          vod: "https://player.twitch.tv/?channel=shahzam&parent=localhost",
          avatar: "https://odindesignthemes.com/vikinger/img/avatar/08.jpg",
          title: "2 New Levels on Mochi's Island for the the next long title",
          author: "@HappyWhale",
          category: "Mochi's Island",
        },
        {
          vod: "https://player.twitch.tv/?channel=shahzam&parent=localhost",
          avatar: "https://odindesignthemes.com/vikinger/img/avatar/10.jpg",
          title: "I'm Playing Athena’s Goddess Story and a long title",
          author: "@GameHuntress",
          category: "Zodiac Goddess",
        },
        {
          vod: "https://player.twitch.tv/?channel=shahzam&parent=localhost",
          avatar: "https://odindesignthemes.com/vikinger/img/avatar/12.jpg",
          title: "Ram Goddess Gameplay",
          author: "@NekoStreamz",
          category: "Zodiac Goddess",
        },
      ],
    };
  },
};
</script>
