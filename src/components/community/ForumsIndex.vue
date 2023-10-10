<template>
  <v-container>
    <v-forum v-if="!category" :headers="headers" :categories="categories" />
    <v-forum-category v-if="category && !room" :category="category" />
    <v-forum-room
      v-if="category && room"
      :category="category"
      :discussion="room"
    />
  </v-container>
</template>

<script>
import vForum from "./Forum.vue";
import vForumCategory from "./ForumCategory.vue";
import vForumRoom from "./ForumRoom.vue";
export default {
  components: {
    vForum,
    vForumCategory,
    vForumRoom,
  },
  data() {
    return {
      headers: [
        {
          title: "category",
          span: 5,
          sm: true,
        },
        {
          title: "topics",
          span: 1,
          sm: true,
        },
        {
          title: "posts",
          span: 1,
        },
        {
          title: "recent topics",
          span: 5,
        },
      ],
      categories: [
        {
          avatar:
            "https://odindesignthemes.com/vikinger/img/forum/category/01.png",
          title: "community hangout",
          description:
            "A place for the community to talk and chat about whatever they want!",
          topics: 44,
          posts: 236,
          recents: [
            "What's your favourite food in the world?",
            "Share a picture of your city or town and let's travel together!",
            "Do you think we'll ever get flying cars in the future?",
          ],
          categories: [
            {
              avatar:
                "https://odindesignthemes.com/vikinger/img/forum/category/07.png",
              title: "comics",
              description:
                "A place for the community to talk and chat about whatever they want!",
              topics: 44,
              posts: 236,
              recents: [
                `Bebop Publishing will release a limited edition of "Justice"`,
                `This is the first image of the new "Multiverse" movie!`,
                `What actor do you think should play the new Captain?`,
              ],
            },
            {
              avatar:
                "https://odindesignthemes.com/vikinger/img/forum/category/08.png",
              title: "comics",
              description:
                "Everything about the gaming world! News, reviews, upcoming games and more!",
              topics: 23,
              posts: 109,
              recents: [
                `Come and discuss that new "Power X" transformation`,
                `Hunter's manga chapter 526 will release in December`,
                `A new animation studio will take over after this month`,
              ],
            },
          ],
          discussions: [
            {
              pinned: true,
              category: `comics`,
              title: `Let's discuss the current state of the Comics Cinematic Universe`,
              pages: 46,
              author: {
                avatar: `https://odindesignthemes.com/vikinger/img/avatar/04.jpg`,
                fullname: `sarah diamond`,
              },
              timestamp: `2 months ago`,
              voices: 398,
              replies: 941,
              recent: {
                author: {
                  avatar: `https://odindesignthemes.com/vikinger/img/avatar/07.jpg`,
                  fullname: `sarah diamond`,
                },
                timestamp: `1 hour, 36 minutes ago`,
              },
              posts: [
                {
                  text: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/02.jpg",
                    fullname: "Sarah Diamond",
                    account: `@sarahdiamond`,
                    role: `organizer`,
                  },
                  timestamp: "April 15, 2019 at 4:05 am",
                },
                {
                  text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/09.jpg",
                    fullname: "Destroy Dex",
                    account: `@destroy dex`,
                    role: `participant`,
                  },
                  timestamp: "April 15, 2019 at 10:33 am",
                },
              ],
            },
            {
              title: `Bebop Publishing will release a limited edition of "Justice"`,
              category: `comics`,
              author: {
                avatar:
                  "https://odindesignthemes.com/vikinger/img/avatar/03.jpg",
                fullname: "Bearded Wonder",
              },
              timestamp: "5 hours ago",
              voices: 19,
              replies: 24,
              recent: {
                author: {
                  avatar:
                    "https://odindesignthemes.com/vikinger/img/avatar/07.jpg",
                  fullname: "Nick Grissom",
                },
                timestamp: "2 mins ago",
              },
              pages: 6,
              posts: [
                {
                  text: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/02.jpg",
                    fullname: "Sarah Diamond",
                    account: `@sarahdiamond`,
                    role: `organizer`,
                  },
                  timestamp: "April 15, 2019 at 4:05 am",
                },
                {
                  text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/09.jpg",
                    fullname: "Destroy Dex",
                    account: `@destroy dex`,
                    role: `participant`,
                  },
                  timestamp: "April 15, 2019 at 10:33 am",
                },
              ],
            },
            {
              title: `Come and discuss that new "Power X" transformation"`,
              category: `comics`,
              author: {
                avatar:
                  "https://odindesignthemes.com/vikinger/img/avatar/01.jpg",
                fullname: "Crimson Thunder",
              },
              timestamp: "1 hour ago",
              voices: 8,
              replies: 11,
              recent: {
                author: {
                  avatar:
                    "https://odindesignthemes.com/vikinger/img/avatar/02.jpg",
                  fullname: "Marina Valentine",
                },
                timestamp: "31 mins ago",
              },
              posts: [
                {
                  text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/09.jpg",
                    fullname: "Destroy Dex",
                    account: `@destroy dex`,
                    role: `organizer`,
                  },
                  initiated: "April 15, 2019 at 10:33 am",
                },
              ],
            },

            {
              title: `This is the first image of the new "Multiverse" movie!"`,
              author: {
                avatar:
                  "https://odindesignthemes.com/vikinger/img/avatar/07.jpg",
                fullname: "Nick Grissom",
              },
              timestamp: "14 hours ago",
              voices: 26,
              replies: 33,
              recent: {
                author: {
                  avatar:
                    "https://odindesignthemes.com/vikinger/img/avatar/03.jpg",
                  fullname: "Bearded Wonder",
                },
                timestamp: "1 hour, 7 minutes ago",
              },
            },
          ],
        },
        {
          avatar:
            "https://odindesignthemes.com/vikinger/img/forum/category/02.png",
          title: "the arcade",
          description:
            "Everything about the gaming world! News, reviews, upcoming games and more!",
          topics: 23,
          posts: 109,
          recents: [
            "Post your GTE V character photo and vote for the best!",
            "Does anyone know how to capture Mewthree?",
            "Super Brawl Bross tournament. Sign up right here!",
          ],
          categories: [
            {
              avatar:
                "https://odindesignthemes.com/vikinger/img/forum/category/07.png",
              title: "comics",
              description:
                "A place for the community to talk and chat about whatever they want!",
              topics: 44,
              posts: 236,
              recents: [
                `Bebop Publishing will release a limited edition of "Justice"`,
                `This is the first image of the new "Multiverse" movie!`,
                `What actor do you think should play the new Captain?`,
              ],
            },
            {
              avatar:
                "https://odindesignthemes.com/vikinger/img/forum/category/08.png",
              title: "comics",
              description:
                "Everything about the gaming world! News, reviews, upcoming games and more!",
              topics: 23,
              posts: 109,
              recents: [
                `Come and discuss that new "Power X" transformation`,
                `Hunter's manga chapter 526 will release in December`,
                `A new animation studio will take over after this month`,
              ],
            },
          ],
          discussions: [
            {
              pinned: true,
              category: `comics`,
              title: `Let's discuss the current state of the Comics Cinematic Universe`,
              pages: 46,
              author: {
                avatar: `https://odindesignthemes.com/vikinger/img/avatar/04.jpg`,
                fullname: `sarah diamond`,
              },
              timestamp: `2 months ago`,
              voices: 398,
              replies: 941,
              recent: {
                author: {
                  avatar: `https://odindesignthemes.com/vikinger/img/avatar/07.jpg`,
                  fullname: `sarah diamond`,
                },
                timestamp: `1 hour, 36 minutes ago`,
              },
              posts: [
                {
                  text: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/02.jpg",
                    fullname: "Sarah Diamond",
                    account: `@sarahdiamond`,
                    role: `organizer`,
                  },
                  timestamp: "April 15, 2019 at 4:05 am",
                },
                {
                  text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/09.jpg",
                    fullname: "Destroy Dex",
                    account: `@destroy dex`,
                    role: `participant`,
                  },
                  timestamp: "April 15, 2019 at 10:33 am",
                },
              ],
            },
            {
              title: `Bebop Publishing will release a limited edition of "Justice"`,
              category: `comics`,
              author: {
                avatar:
                  "https://odindesignthemes.com/vikinger/img/avatar/03.jpg",
                fullname: "Bearded Wonder",
              },
              timestamp: "5 hours ago",
              voices: 19,
              replies: 24,
              recent: {
                author: {
                  avatar:
                    "https://odindesignthemes.com/vikinger/img/avatar/07.jpg",
                  fullname: "Nick Grissom",
                },
                timestamp: "2 mins ago",
              },
              pages: 6,
              posts: [
                {
                  text: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/02.jpg",
                    fullname: "Sarah Diamond",
                    account: `@sarahdiamond`,
                    role: `organizer`,
                  },
                  timestamp: "April 15, 2019 at 4:05 am",
                },
                {
                  text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/09.jpg",
                    fullname: "Destroy Dex",
                    account: `@destroy dex`,
                    role: `participant`,
                  },
                  timestamp: "April 15, 2019 at 10:33 am",
                },
              ],
            },
            {
              title: `Come and discuss that new "Power X" transformation"`,
              category: `comics`,
              author: {
                avatar:
                  "https://odindesignthemes.com/vikinger/img/avatar/01.jpg",
                fullname: "Crimson Thunder",
              },
              timestamp: "1 hour ago",
              voices: 8,
              replies: 11,
              recent: {
                author: {
                  avatar:
                    "https://odindesignthemes.com/vikinger/img/avatar/02.jpg",
                  fullname: "Marina Valentine",
                },
                timestamp: "31 mins ago",
              },
              posts: [
                {
                  text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/09.jpg",
                    fullname: "Destroy Dex",
                    account: `@destroy dex`,
                    role: `organizer`,
                  },
                  initiated: "April 15, 2019 at 10:33 am",
                },
              ],
            },
            {
              title: `This is the first image of the new "Multiverse" movie!"`,
              author: {
                avatar:
                  "https://odindesignthemes.com/vikinger/img/avatar/07.jpg",
                fullname: "Nick Grissom",
              },
              timestamp: "14 hours ago",
              voices: 26,
              replies: 33,
              recent: {
                author: {
                  avatar:
                    "https://odindesignthemes.com/vikinger/img/avatar/03.jpg",
                  fullname: "Bearded Wonder",
                },
                timestamp: "1 hour, 7 minutes ago",
              },
            },
          ],
        },
        {
          avatar:
            "https://odindesignthemes.com/vikinger/img/forum/category/03.png",
          title: "cosplayers of the world",
          description:
            "A place for the community to talk and chat about whatever they want!",
          topics: 19,
          posts: 56,
          recents: [
            "Introduce yourself and show us your cosplays!",
            "Show your progress. Post a photo of your first and last cosplay",
            "Tips on how to build a resistant yet light armor",
          ],
          categories: [
            {
              avatar:
                "https://odindesignthemes.com/vikinger/img/forum/category/07.png",
              title: "comics",
              description:
                "A place for the community to talk and chat about whatever they want!",
              topics: 44,
              posts: 236,
              recents: [
                `Bebop Publishing will release a limited edition of "Justice"`,
                `This is the first image of the new "Multiverse" movie!`,
                `What actor do you think should play the new Captain?`,
              ],
            },
            {
              avatar:
                "https://odindesignthemes.com/vikinger/img/forum/category/08.png",
              title: "comics",
              description:
                "Everything about the gaming world! News, reviews, upcoming games and more!",
              topics: 23,
              posts: 109,
              recents: [
                `Come and discuss that new "Power X" transformation`,
                `Hunter's manga chapter 526 will release in December`,
                `A new animation studio will take over after this month`,
              ],
            },
          ],
          discussions: [
            {
              pinned: true,
              category: `comics`,
              title: `Let's discuss the current state of the Comics Cinematic Universe`,
              pages: 46,
              author: {
                avatar: `https://odindesignthemes.com/vikinger/img/avatar/04.jpg`,
                fullname: `sarah diamond`,
              },
              timestamp: `2 months ago`,
              voices: 398,
              replies: 941,
              recent: {
                author: {
                  avatar: `https://odindesignthemes.com/vikinger/img/avatar/07.jpg`,
                  fullname: `sarah diamond`,
                },
                timestamp: `1 hour, 36 minutes ago`,
              },
              posts: [
                {
                  text: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/02.jpg",
                    fullname: "Sarah Diamond",
                    account: `@sarahdiamond`,
                    role: `organizer`,
                  },
                  timestamp: "April 15, 2019 at 4:05 am",
                },
                {
                  text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/09.jpg",
                    fullname: "Destroy Dex",
                    account: `@destroy dex`,
                    role: `participant`,
                  },
                  timestamp: "April 15, 2019 at 10:33 am",
                },
              ],
            },
            {
              title: `Bebop Publishing will release a limited edition of "Justice"`,
              category: `comics`,
              author: {
                avatar:
                  "https://odindesignthemes.com/vikinger/img/avatar/03.jpg",
                fullname: "Bearded Wonder",
              },
              timestamp: "5 hours ago",
              voices: 19,
              replies: 24,
              recent: {
                author: {
                  avatar:
                    "https://odindesignthemes.com/vikinger/img/avatar/07.jpg",
                  fullname: "Nick Grissom",
                },
                timestamp: "2 mins ago",
              },
              pages: 6,
              posts: [
                {
                  text: `consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/02.jpg",
                    fullname: "Sarah Diamond",
                    account: `@sarahdiamond`,
                    role: `organizer`,
                  },
                  timestamp: "April 15, 2019 at 4:05 am",
                },
                {
                  text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/09.jpg",
                    fullname: "Destroy Dex",
                    account: `@destroy dex`,
                    role: `participant`,
                  },
                  timestamp: "April 15, 2019 at 10:33 am",
                },
              ],
            },
            {
              title: `Come and discuss that new "Power X" transformation"`,
              category: `comics`,
              author: {
                avatar:
                  "https://odindesignthemes.com/vikinger/img/avatar/01.jpg",
                fullname: "Crimson Thunder",
              },
              timestamp: "1 hour ago",
              voices: 8,
              replies: 11,
              recent: {
                author: {
                  avatar:
                    "https://odindesignthemes.com/vikinger/img/avatar/02.jpg",
                  fullname: "Marina Valentine",
                },
                timestamp: "31 mins ago",
              },
              posts: [
                {
                  text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
                  author: {
                    avatar:
                      "https://odindesignthemes.com/vikinger/img/avatar/09.jpg",
                    fullname: "Destroy Dex",
                    account: `@destroy dex`,
                    role: `organizer`,
                  },
                  initiated: "April 15, 2019 at 10:33 am",
                },
              ],
            },

            {
              title: `This is the first image of the new "Multiverse" movie!"`,
              author: {
                avatar:
                  "https://odindesignthemes.com/vikinger/img/avatar/07.jpg",
                fullname: "Nick Grissom",
              },
              timestamp: "14 hours ago",
              voices: 26,
              replies: 33,
              recent: {
                author: {
                  avatar:
                    "https://odindesignthemes.com/vikinger/img/avatar/03.jpg",
                  fullname: "Bearded Wonder",
                },
                timestamp: "1 hour, 7 minutes ago",
              },
            },
          ],
        },
      ],
      category: false,
      room: false,
    };
  },
  watch: {
    $route(to) {
      // TODO : refactor code to usebale
      //console.log(to)
      if (!to.params.category) {
        this.category = false;
      } else {
        const { categories, dclean } = this;
        const category = categories.find(
          (category) =>
            dclean(category.title).toLowerCase() ===
            to.params.category?.toLowerCase()
        );
        this.category = category ? category : false;
        if (to.params.sub && category) {
          const room = category.discussions.find(
            (discussion) =>
              dclean(discussion.title).toLowerCase() ===
              to.params.sub?.toLowerCase()
          );
          this.room = room ? room : false;
        } else {
          this.room = false;
        }
      }
    },
  },
  /* eslint-disable no-unused-vars */
  beforeRouteEnter(to, from, next) {
    // TODO : refactor code to usebale
    next((vm) => {
      if (!to.params.category) {
        vm.category = false;
      } else {
        const { categories, dclean } = vm;
        const category = categories.find(
          (category) =>
            dclean(category.title).toLowerCase() ===
            to.params.category?.toLowerCase()
        );
        vm.category = category ? category : false;
        if (to.params.sub && category) {
          const room = category.discussions.find(
            (discussion) =>
              dclean(discussion.title).toLowerCase() ===
              to.params.sub?.toLowerCase()
          );
          vm.room = room ? room : false;
        } else {
          vm.room = false;
        }
      }
    });
  },
};
</script>
