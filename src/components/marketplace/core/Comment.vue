<template>
  <div>
    <v-card flat>
      <v-list class="py-0" dense three-line>
        <v-list-item>
          <v-list-item-avatar class="mt-1">
            <v-img :src="comment.author.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content class="mt-0 pt-0">
            <v-list-item-title class="pt-0 text-capitalize">
              <span>
                <a
                  @click="
                    $router.push({
                      name: `views.profile`,
                      params: { profile: dclean(comment.author.account) },
                    })
                  "
                >
                  {{ lang(comment.author.fullname) }}
                </a>
                <v-chip
                  class="text-capitalize"
                  :class="{
                    dm__primary: comment.author.tag == 'author',
                    dm__info: comment.author.tag != 'author',
                  }"
                  dark
                  small
                >
                  {{ lang(comment.author.tag) }}
                </v-chip>
              </span>
            </v-list-item-title>
            <v-list-item-subtitle>
              <span
                class="
                  font-weight-regular
                  caption
                  text-wrap
                  dm__secondary--text
                "
              >
                {{ lang(comment.text) }}
              </span>
            </v-list-item-subtitle>
            <v-list-item-subtitle
              class="font-weight-regular caption text-wrap dm__secondary--text"
            >
              <v-item-group>
                <v-container>
                  <v-row>
                    <v-item v-slot="{}">
                      <v-btn
                        class="text-capitalize"
                        color="dm__secondary"
                        plain
                        x-small
                      >
                        {{ lang(`react`) }}
                      </v-btn>
                    </v-item>
                    <v-item v-slot="{}">
                      <v-btn
                        class="text-capitalize"
                        color="dm__secondary"
                        plain
                        x-small
                      >
                        {{ lang(`reply`) }}
                      </v-btn>
                    </v-item>
                    <v-item v-slot="{}">
                      <v-btn
                        class="font-weight-regular text-capitalize dm__secondary4--text"
                        :link="false"
                        plain
                        x-small
                      >
                        {{ comment.timestamp }}
                      </v-btn>
                    </v-item>
                    <v-item v-slot="{}">
                      <v-menu offset-overflow offset-y left>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            color="dm__secondary"
                            v-bind="attrs"
                            v-on="on"
                            icon
                            x-small
                          >
                            <v-icon> mdi-dots-horizontal </v-icon>
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
                            v-for="item in ['report post']"
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
                    </v-item>
                  </v-row>
                </v-container>
              </v-item-group>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-card-text v-if="showReplies">
        <slot name="replies" />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    showReplies: {
      default: () => {
          return true;
      },
      type: Boolean,
    },
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>