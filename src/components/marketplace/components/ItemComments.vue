<template>
  <div>
    <v-card flat>
      <template v-for="(comment, index) in comments.comments">
        <v-comment :comment="comment" :key="index + $uuid()">
          <template v-slot:replies>
            <template v-for="(reply, index) in comment.replies">
              <v-item-reply
                :show-replies="false"
                :comment="reply"
                :key="index + $uuid()"
              />
            </template>
            <v-list class="pb-0 pt-0" dense>
              <v-list-item>
                <v-list-item-avatar class="mt-0">
                  <v-img
                    :src="`https://cdn.vuetifyjs.com/images/lists/1.jpg`"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content class="mt-0">
                  <v-row>
                    <v-col class="" cols="12">
                      <v-form>
                        <v-textarea
                          class="rounded-lg"
                          rounded
                          hide-details
                          no-resize
                          rows="1"
                          outlined
                          :label="lang(`your reply`)"
                        />
                      </v-form>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider />
          </template>
        </v-comment>
      </template>
      <v-card-text>
        <h1> <span class="caption font-weight-medium text-capitalize dm__secondary4--text"> {{ lang(`leave a comment`) }} </span> </h1>
        <v-list class="pb-0 pt-0" dense>
          <v-list-item>
            <v-list-item-avatar class="mt-0">
              <v-img
                :src="`https://cdn.vuetifyjs.com/images/lists/1.jpg`"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content class="mt-0">
              <v-row>
                <v-col class="" cols="12">
                  <v-form>
                    <v-textarea
                      class="rounded-lg"
                      rounded
                      hide-details
                      no-resize
                      rows="3"
                      outlined
                      :label="lang(`your comment`)"
                    />
                  </v-form>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import vComment from "../core/Comment.vue";
import vItemReply from "../core/Comment.vue";
export default {
  components: {
    vComment,
    vItemReply,
  },
  props: {
    comments: {
      type: Object,
      required: true,
    },
  },
};
</script>