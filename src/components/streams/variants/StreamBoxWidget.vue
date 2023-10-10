<template>
  <div>
    <v-card-widget
      class="rounded-lg pa-5"
      :menu-items="['settings']"
      title="stream box"
    >
      <v-row>
        <v-col cols="12">
          <v-card class="rounded-lg overflow-hidden mt-3" width="100%" flat rounded>
            <iframe
              src="https://player.twitch.tv/?channel=shahzam&parent=localhost"
              frameborder="0"
              allowfullscreen="true"
              scrolling="no"
              width="100%"
            ></iframe>
            <v-card-text class="text-justify">
              <v-row style="height: 0px">
                <v-avatar
                  style="postion: absolute; left: 0; top: -30px"
                  class="pa-1"
                  size="42"
                >
                  <img style="border: 5px solid white" :src="content.avatar" />
                </v-avatar>
              </v-row>
              <v-row>
                <v-col class="mt-2" cols="12">
                  <h1
                    class="
                      dm__secondary4--text
                      subtitle-2
                      text-capitalize text-truncate
                      mb-0
                    "
                  >
                    {{ content.title }}
                  </h1>
                  <span
                    class="
                      dm__secondary4--text
                      caption
                      font-weight-light
                      text-capitalize
                    "
                  >
                    {{ content.author }}
                  </span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <span class="font-weight-medium text-capitalize caption">
                    <span>{{ lang(`category`) }}: </span>
                    <span class="dm__primary--text">
                      {{ content.category }}
                    </span></span
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-widget>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      content: {
        vod: "https://player.twitch.tv/?channel=shahzam&parent=localhost",
        avatar: "https://odindesignthemes.com/vikinger/img/avatar/01.jpg",
        title: "Rony's EggRing Quest",
        author: "@BeardedWonder66",
        category: "Rony da Hedgehog",
      },
    };
  },
};
</script>
