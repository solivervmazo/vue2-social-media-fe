<template>
  <div>
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">
          {{ lang(`welcome to`) }}
        </span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col cols="6">
            <h2 class="text-capitalize">
              <v-chip
                class="text-uppercase"
                color="dm__primary"
                dark
                v-if="discussion.pinned"
                small
              >
                {{ lang(`pinned`) }}
              </v-chip>
              {{ lang(discussion.title) }}
            </h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-forum-room-filters :category="category" :room="discussion" />
      </v-col>
    </v-row>
    <!-- TODO : mobile responsive -->
    <!-- Refactor -->
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-lg ma-2 transparent py-0 pb-0" flat>
          <v-card-text class="py-0 my-0">
            <v-row>
              <v-col
                class="
                  d-md-flex d-none
                  mt-6
                  font-weight-bold
                  text-capitalize
                  caption
                  py-0
                  pb-0
                "
                cols="6"
                :sm="header.span"
                v-for="(header, index) in headers"
                :key="index"
              >
                {{ lang(header.title) }}
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- posts -->
    <v-row>
      <v-col cols="12">
        <v-card class="pa-0 rounded-lg" flat rounded>
          <!-- post -->
          <template v-for="(post, index) in discussion.posts">
            <v-card
              class="rounded-lg pb-2 py-0 pb-0"
              flat
              :key="`${index}__cat`"
            >
              <v-card-title class="dm__disabled5">
                <span class="caption font-weight-light">
                  {{ post.timestamp }}
                </span>
                <v-spacer />
                <v-btn
                  class="caption font-weight-medium text-capitalize"
                  color="dm__secondary"
                  plain
                >
                  {{ lang(`report`) }}
                </v-btn>
                <v-btn
                  class="caption font-weight-medium text-capitalize"
                  color="dm__secondary"
                  text
                  depressed
                >
                  {{ lang(`reply`) }}
                </v-btn>
              </v-card-title>
              <v-card-text class="py-0 my-0">
                <v-row>
                  <v-col cols="4" sm="2" class="text-center my-3">
                    <v-avatar>
                      <v-img :src="post.author.avatar" />
                    </v-avatar>
                    <br />
                    <span class="caption font-weight-medium dm__secondary4--text">
                      {{ post.author.fullname }}
                    </span>
                    <br />
                    <span class="caption font-weight-medium">
                      {{ post.author.account }}
                    </span>
                    <br />
                    <v-chip
                      class="text-capitalize white--text rounded-lg dm__info"
                      :class="{
                        dm__secondary: post.author.role == 'participant',
                      }"
                      small
                    >
                      {{ post.author.role }}
                    </v-chip>
                  </v-col>
                  <v-col cols="8" sm="10">
                    <p class="tex-justify font-weight-light py-3 dm__secondary4--text">
                      {{ post.text }}
                    </p>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <v-divider :key="`${index}__dv`" />
          </template>
        </v-card>
      </v-col>
    </v-row>
    <!-- leave a comment -->
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-lg pa-0" rounded>
          <v-card-title class="text-captilize">
            {{ lang(`leave a reply`) }}
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text class="dm__disabled5 pa-0">
            <v-textarea
              class="subtitle-2 dm__disabled5 font-weight-regular"
              no-resize
              hide-details
              flat
              solo
              :placeholder="lang(`what's in your mind?`)"
            >
            </v-textarea>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="pa-4">
            <div class="d-flex flex-row">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="dm__secondary4--text"
                    icon
                    plain
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-camera-outline</v-icon>
                  </v-btn>
                </template>
                <span class="text-capitalize caption">{{
                  lang(`insert photo`)
                }}</span>
              </v-tooltip>
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="dm__secondary4--text"
                    icon
                    plain
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-gif</v-icon>
                  </v-btn>
                </template>
                <span class="text-capitalize caption">{{
                  lang(`insert gif`)
                }}</span>
              </v-tooltip>
            </div>
            <v-spacer class="d-sm-none d-md-block" />
            <v-btn
              color="dm__secondary4--text rounded-lg text-capitalize caption"
              dark
              rounded
            >
              {{ lang(`discard`) }}
            </v-btn>
            <v-btn
              color="dm__info rounded-lg text-capitalize caption"
              dark
              rounded
            >
              {{ lang(`post reply`) }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import vForumRoomFilters from "./components/ForumRoomFilters.vue";
export default {
  components: {
    vForumRoomFilters,
  },
  props: {
    discussion: {
      type: Object,
      required: true,
    },
    category: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        {
          title: "author",
          span: 2,
          sm: true,
        },
        {
          title: "post",
          span: 10,
          sm: true,
        },
      ],
    };
  },
};
</script>