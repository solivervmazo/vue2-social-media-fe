<template>
  <v-container>
    <v-row>
      <!-- LEFT -->
      <v-col class="d-none d-md-block" cols="3">
        <v-row>
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <v-profile-completion />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-featured-badges-widget />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-open-quests-widget />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-members-widget />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <!-- CENTER -->
      <v-col cols="12" sm="6">
        <v-row>
          <v-col cols="12">
            <v-post-form></v-post-form>
          </v-col>
        </v-row>
        <v-row class="d-none d-md-flex">
          <v-col cols="12">
            <v-feed-filter />
          </v-col>
        </v-row>
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
      <!-- RIGHT -->
      <v-col class="d-none d-md-block" cols="3">
        <v-row>
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <v-reactions-received />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-row>
              <v-col cols="12">
                <v-events-widget />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import vPostForm from "./templates/PostForm.vue";
import vFeedFilter from "./templates/FeedFilter.vue";
import vFeedPost from "./templates/FeedPost.vue";

import vProfileCompletion from "../profile/components/ProfileCompletion.vue";
import vOpenQuestsWidget from "../games/variants/OpenQuestsWidget.vue";
import vFeaturedBadgesWidget from "../games/variants/FeaturedBadgesWidget.vue";
import vMembersWidget from "../community/variants/MembersWidget.vue";
import vEventsWidget from "../events/variants/EventsWidget.vue";

import vReactionsReceived from "../profile/templates/ReactionsReceived.vue";
export default {
  components: {
    vPostForm,
    vFeedFilter,
    vFeedPost, //
    vProfileCompletion,
    vReactionsReceived,

    vOpenQuestsWidget,
    vFeaturedBadgesWidget,
    vMembersWidget,
    vEventsWidget,
  },
  data() {
    return {
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