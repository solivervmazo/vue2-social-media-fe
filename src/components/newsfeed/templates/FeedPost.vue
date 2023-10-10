<template>
  <v-card class="dm-feed-post rounded-lg pa-0" flat>
    <v-list class="transparent" dense two-line>
      <v-list-item>
        <v-list-item-avatar class="py-0" size="40">
          <v-img :src="content.author.avatar" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            <span>{{ content.author.fullname }}</span>
            <span v-if="content.widget.variety != 'status'">
              <span class="font-weight-regular text-wrap"> {{ getTitleText({ variety: content.widget.variety }) }} </span>
              <span> {{ getTitleTarget({ variety: content.widget.variety }) }} </span>
            </span>
          </v-list-item-title>
          <v-list-item-subtitle>
            <small class="dm__secondary--text"> {{ content.timestamp }} </small>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-menu offset-overflow offset-y left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list
              class="dm-feed-post-list"
              dense
              min-width="150px"
              single-line
            >
              <v-list-item
                class="py-0"
                v-for="item in [
                  'edit post',
                  'delete post',
                  'make it featured',
                  'report post',
                  'report author',
                ]"
                :key="item"
                link
              >
                <v-list-item-title
                  class="caption font-weight-medium text-capitalize"
                >
                  {{ item }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-card-text>
      <v-post-text :content="content.text" />
      <v-post-poll v-if="content.widget.variety == 'poll'"/>
      <v-post-album v-if="content.widget.variety == 'album'"/>
      <v-post-video v-if="content.widget.variety == 'video'"/>
      <v-divider />
      <v-post-comments :content="content.overview" />
    </v-card-text>
    <v-post-actions />
  </v-card>
</template>

<script>
import vPostText from "../components/PostText.vue";
import vPostComments from "../templates/PostComments.vue";
import vPostActions from "../components/PostActions.vue";
import vPostPoll from "../components/PostPoll.vue";
import vPostVideo from "../components/PostVideo.vue";
import vPostAlbum from "../components/PostAlbum.vue";
export default {
  components: {
    vPostText,
    vPostComments,
    vPostActions,
    vPostPoll,
    vPostAlbum,
    vPostVideo
  },
  props: {
    content: {
      type: Object,
    },
  },
  data() {
    return {
      variety: {
        post: {
          message: "shared a",
          target: "post",
        },
        poll: {
          message: "created a",
          target: "poll",
        },
        album: {
          message: "uploaded a",
          target: "26 new photos",
        },
        video: {
          message: "uploaded a",
          target: "video",
        },
        link: {
          message: "created a",
          target: "poll",
        },
      },
    };
  },
  methods: {
    getTitleText: function({variety = false} = {}){
      if(!variety) return;
      if(!this.variety[variety]) return;
      return this.variety[variety].message;
    },
    getTitleTarget: function({variety = false} = {}){
      if(!variety) return;
      if(!this.variety[variety]) return;
      return this.variety[variety].target;
    }
  }
};
</script>

<style lang="scss" scoped>
.dm-feed-post {
  &.v-card {
    background-color: #fafafa !important;
  }
  .dm-feed-post-list .theme--light.v-list-item {
    min-height: 32px !important;
    &:hover {
      .v-list-item__title {
        color: var(--v-dm__primary-base) !important;
        padding: 0px 10px;
        transition: ease 0.5s;
      }
      .v-list-item__icon {
        color: var(--v-dm__primary-base) !important;
        &::after {
          color: var(--v-dm__primary-base) !important;
        }
      }
    }
  }
}
</style>