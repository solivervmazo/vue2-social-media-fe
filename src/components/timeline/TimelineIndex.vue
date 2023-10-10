<template>
  <v-container>
    <!-- TODO : timeline cover , refactor -->
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-lg" flat rounded>
          <v-card-title
            :style="{
              background: `url('${profile.banner}')`,
              'background-size': 'cover',
              height: '200px',
            }"
          >
          </v-card-title>
          <!-- TODO : Avatar -->
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="4"> </v-col>
              <v-col class="d-flex flex-row justify-center" cols="12" sm="4">
                <div class="mt-md-5" style="height: 0px">
                  <v-avatar
                    style="postion: absolute; bottom: 110px"
                    class="pa-1"
                    size="120"
                  >
                    <img :src="profile.avatar" />
                  </v-avatar>
                </div>
              </v-col>
              <v-col
                class="d-none d-md-flex flex-md-row justify-end"
                cols="12"
                sm="4"
              >
                <div style="height: 0px">
                  <v-btn
                    color="dm__info"
                    class="mx-1"
                    style="postion: absolute; left: 0px; top: -25px"
                    dark
                  >
                    <span class="caption font-weight-bold text-capitalize">
                      {{ lang(`add friend`) }} +
                    </span>
                  </v-btn>
                  <v-btn
                    color="dm__primary"
                    class="mx-1"
                    style="postion: absolute; left: 0px; top: -25px"
                    dark
                  >
                    <span class="caption font-weight-bold text-capitalize">
                      {{ lang(`send message`) }}
                    </span>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <!-- TODO : cover stats , refactor -->
            <v-row>
              <v-col cols="12">
                <v-row>
                  <v-col class="d-sm-flex d-md-none mt-n4" cols="12">
                    <v-card flat>
                      <v-card-text>
                        <h2 class="mx-2 text-center">
                          <span
                            class="
                              text-capitalize
                              font-weight-bold
                              dm__secondary4--text
                            "
                          >
                            {{ profile.fullname }}
                          </span>
                          <br />
                          <span class="caption font-weight-bold text-uppercase">
                            {{ profile.website }}
                          </span>
                        </h2>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col
                    class="d-flex flex-row justify-center mt-n4"
                    cols="12"
                    sm="4"
                  >
                    <v-slide-group>
                      <template
                        v-for="(interaction, i) in Object.keys(
                          profile.interactions
                        )"
                      >
                        <v-slide-item :key="i + $uuid()" v-slot="{}">
                          <v-card flat>
                            <v-card-text>
                              <h2 class="mx-2 text-center">
                                <span
                                  class="
                                    body-1
                                    text-capitalize
                                    font-weight-bold
                                    dm__secondary4--text
                                  "
                                >
                                  {{ profile.interactions[interaction] }}
                                </span>
                                <br />
                                <span
                                  class="
                                    caption
                                    font-weight-medium
                                    text-uppercase
                                  "
                                >
                                  {{ lang(interaction) }}
                                </span>
                              </h2>
                            </v-card-text>
                          </v-card>
                        </v-slide-item>
                      </template>
                    </v-slide-group>
                  </v-col>
                  <v-col class="d-none d-md-block mt-n4" cols="12" sm="4">
                    <v-card flat>
                      <v-card-text>
                        <h2 class="mx-2 text-center">
                          <span
                            class="
                              text-capitalize
                              font-weight-bold
                              dm__secondary4--text
                            "
                          >
                            {{ profile.fullname }}
                          </span>
                          <br />
                          <span class="caption font-weight-bold text-uppercase">
                            {{ profile.website }}
                          </span>
                        </h2>
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col
                    class="d-flex flex-row justify-center"
                    cols="12"
                    sm="4"
                  >
                    <v-slide-group show-arrows>
                      <template
                        v-for="(linkedAccount, i) in Object.keys(
                          profile.linkedAccounts
                        )"
                      >
                        <v-slide-item :key="i + $uuid()" v-slot="{}">
                          <v-btn class="mx-2" icon>
                            <v-icon>mdi-{{ linkedAccount }}</v-icon>
                          </v-btn>
                        </v-slide-item>
                      </template>
                    </v-slide-group>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- TODO : timeline navigation  , refactor   -->
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-lg" flat rounded>
          <v-tabs :show-arrows="true" icons-and-text centered grow>
            <template v-for="(view, i) in Object.assign([], views)">
              <v-tab
                class="pb-0 py-0 dm__secondary--text text-nowrap"
                :key="i + `-tab`"
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
                  {{ lang(view.title) }}
                </span>
                <v-icon> {{ view.icon }} </v-icon>
              </v-tab>
              <v-divider
                v-if="i < views.length - 1"
                class="my-5"
                inset
                vertical
                :key="i + `-divider`"
              />
            </template>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
    <!-- TODO : timeline body -->
    <v-row>
      <!-- TODO : left  -->
      <v-col class="d-none d-md-block" cols="3">
          <!-- TODO : About Me -->
          <v-row>
              <v-col cols="12">
                  <v-about-me-widget />
              </v-col>
          </v-row>
          <!-- TODO : Badges -->
          <v-row>
              <v-col cols="12">
                  <v-badges-widget />
              </v-col>
          </v-row>
          <!-- TODO : friends -->
          <v-row>
              <v-col cols="12">
                  <v-friends-widget />
              </v-col>
          </v-row>
      </v-col>
      <v-col cols="12" sm="6">
        <v-row>
          <v-col
            v-for="(post, index) in posts"
            :key="index"
            class="mb-5"
            cols="12"
          >
            <v-feed-post :key="index" :content="post" />
          </v-col>
        </v-row>
      </v-col>
      <!-- TODO : right -->
      <v-col class="d-none d-md-block" cols="3"> 
          <!-- TODO : stream box -->
          <v-row>
              <v-col cols="12">
                  <v-stream-box-widget />
              </v-col>
          </v-row>
          <!-- TODO : photos -->
          <v-row>
              <v-col cols="12">
                  <v-photos-widget />
              </v-col>
          </v-row>
          <!-- TODO : latest item -->
          <v-row>
              <v-col cols="12">
                  <v-latest-item-widget />
              </v-col>
          </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import vFeedPost from "../newsfeed/templates/FeedPost.vue";
import vAboutMeWidget from "../profile/variants/AboutMeWidget.vue";
import vBadgesWidget from "../games/variants/BadgesWidget.vue";
import vFriendsWidget from "../profile/variants/FriendsWidget.vue";
import vStreamBoxWidget from "../streams/variants/StreamBoxWidget.vue";
import vPhotosWidget from "../profile/variants/PhotosWidget.vue";
import vLatestItemWidget from "../marketplace/variants/LatestItemWidget.vue";
export default {
  components: {
    vFeedPost,
    vAboutMeWidget,
    vBadgesWidget,
    vFriendsWidget,
    vStreamBoxWidget,
    vPhotosWidget,
    vLatestItemWidget
  },
  data() {
    return {
      profile: this.$store.getters["profile/GET_PROFILE"](),
      views: [
        {
          alias: "views.timeline",
          title: "timeline",
          url: { name: "views.timeline" },
          icon: "mdi-apps-box",
        },
        {
          alias: "timeline.about",
          title: "about",
          url: { name: "timeline.about" },
          icon: "mdi-account-circle-outline",
        },
        {
          alias: "timeline.friends",
          title: "friends",
          url: { name: "views.friends" },
          icon: "mdi-account-group-outline",
        },
        {
          alias: "timeline.groups",
          title: "groups",
          url: { name: "views.groups" },
          icon: "mdi-account-group-outline",
        },
        {
          alias: "timeline.photos",
          title: "photos",
          url: { name: "views.photos" },
          icon: "mdi-image-outline",
        },
        {
          alias: "timeline.videos",
          title: "videos",
          url: { name: "views.videos" },
          icon: "mdi-star-face",
        },
        {
          alias: "timeline.badges",
          title: "badges",
          url: { name: "views.badges" },
          icon: "mdi-medal-outline",
        },
        {
          alias: "timeline.streams",
          title: "streams",
          url: { name: "views.streams" },
          icon: "mdi-television-play",
        },
        {
          alias: "timeline.blog",
          title: "blog",
          url: { name: "views.blog" },
          icon: "mdi-post-outline",
        },
        {
          alias: "timeline.forums",
          title: "forums",
          url: { name: "views.forums" },
          icon: "mdi-forum-outline",
        },
      ],
      posts: [
        {
          author: {
            fullname: "Soliver V Mazo",
            avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          },
          timestamp: "2 mins ago",
          text: "Sorry everyone, but from now on, I will only be able to edit and upload one design tutorial per month. This happens because I'm having a lot on my plate right now and recording and editing the tutorials requiere a lot of attention.",
          widget: {
            variety: "status",
          },
          overview: {
            participants: 23,
            comments: 14,
            shares: 21,
          },
        },
        {
          author: {
            fullname: "Jaymee eemyaJ",
            avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          },
          timestamp: "1 hr ago",
          text: "my new album",
          widget: {
            variety: "album",
          },
          overview: {
            participants: 31,
            comments: 34,
            shares: 24,
          },
        },
        {
          author: {
            fullname: "Tal Hadi",
            avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          },
          timestamp: "3 hr ago",
          text: "please watch my new vid",
          widget: {
            variety: "video",
          },
          overview: {
            participants: 43,
            comments: 41,
            shares: 23,
          },
        },
        {
          author: {
            fullname: "sol sol",
            avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          },
          timestamp: "3 hr ago",
          text: "check this out",
          widget: {
            variety: "poll",
          },
          overview: {
            participants: 10,
            comments: 20,
            shares: 5,
          },
        },
      ],
    };
  },
};
</script>
