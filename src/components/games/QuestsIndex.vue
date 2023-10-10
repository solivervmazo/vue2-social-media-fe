<template>
  <v-container>
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">
          {{ lang(`get an early lead`) }}
        </span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col cols="6">
            <h2 class="text-capitalize">{{ lang(`featured quests`) }}</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <template v-for="(quest, index) in featured">
            <v-col cols="12" sm="3" :key="index">
              <v-quest-card :content="quest" />
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{
          lang(`gain experience and level up`)
        }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col cols="6">
            <h2 class="text-capitalize">{{ lang(`browse all quests`) }}</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-quest-filters />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-lg ma-2 transparent py-0 pb-0" flat>
          <v-card-text class="py-0 my-0">
            <v-row>
              <v-col
                class="
                  d-md-flex 
                  d-none
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
    <!-- TODO : mobile responsive -->
    <v-row>
      <template v-for="(quest, index) in quests">
        <v-col cols="12" :key="`${index}__quest`">
          <v-card class="rounded-lg pb-2 py-0 pb-0" flat>
            <v-card-text class="py-0 my-0">
              <v-row>
                <v-col class="d-flex align-center" cols="12" sm="3">
                  <v-list dense one-line>
                    <v-list-item>
                      <v-list-item-avatar class="mt-0">
                        <v-img :src="quest.icon"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-content class="mt-0 pt-0">
                        <v-list-item-title class="pt-0 text-capitalize">
                          {{ lang(quest.title) }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col class="d-flex align-center" cols="12" sm="5">
                  <span class="caption text-wrap">{{
                    lang(quest.description)
                  }}</span>
                </v-col>
                <v-col class="d-md-flex d-none align-center" cols="2">
                  <span class="font-weight-medium">
                    <span class="dm__primary--text font-weight-medium px-2"
                      >+</span
                    >
                    <span class="caption text-wrap font-weight-bold">{{
                      lang(quest.experience)
                    }}</span>
                  </span>
                </v-col>
                <v-col class="d-flex flex-row align-center" cols="12" sm="2">
                  <v-progress-linear
                    striped
                    color="dm__info"
                    :value="quest.progress"
                  />
                  <span class="font-weight-medium">{{ quest.status }}</span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import vQuestCard from "./components/QuestCard.vue";
import vQuestFilters from "./components/QuestFilters.vue";
export default {
  components: {
    vQuestCard,
    vQuestFilters,
  },
  data() {
    return {
      quests: [
        {
          icon: "https://odindesignthemes.com/vikinger/img/quest/completedq-s.png",
          title: "press start!",
          description:
            "Post a status update or any other post for the first time",
          experience: 20,
          progress: 100,
          status: "100%",
        },
        {
          icon: "https://odindesignthemes.com/vikinger/img/quest/openq-s.png",
          title: "nothing to hide",
          description: "You have completed all your profile information fields",
          experience: 40,
          progress: 23,
          status: "23%",
        },
        {
          icon: "https://odindesignthemes.com/vikinger/img/quest/completedq-s.png",
          title: "friendly user",
          description:
            "Give 50 like and/or love reactions on your friends' posts",
          experience: 40,
          progress: 18 / 50,
          status: "18/50%",
        },
      ],
      headers: [
        {
          title: "quest",
          span: 3,
          sm: true,
        },
        {
          title: "description",
          span: 5,
          sm: true,
        },
        {
          title: "experience",
          span: 2,
        },
        {
          title: "progress",
          span: 2,
        },
      ],
      featured: [
        {
          icon: "mdi-medal-outline",
          banner:
            "https://odindesignthemes.com/vikinger/img/quest/cover/01.png",
          title: "Social King",
          subtitle:
            "You have linked at least 8 social networks to your profile",
          progress: 100,
          status: "7/8 completed",
          experience: 20,
        },
        {
          icon: "mdi-medal-outline",
          banner:
            "https://odindesignthemes.com/vikinger/img/quest/cover/02.png",
          title: "Friendly User",
          subtitle: "Give 50 like and/or love reactions on your friends' posts",
          progress: 100,
          status: "50/50 completed",
          experience: 40,
        },
        {
          icon: "mdi-medal-outline",
          banner:
            "https://odindesignthemes.com/vikinger/img/quest/cover/03.png",
          color: "amber accent-2",
          title: "Nothing to Hide",
          subtitle: "You have completed all your profile information fields",
          progress: 67,
          status: "67% completed",
          experience: 60,
        },
        {
          icon: "mdi-medal-outline",
          banner:
            "https://odindesignthemes.com/vikinger/img/quest/cover/04.png",
          color: "indigo darken-2",
          title: "Store Manager",
          subtitle: "You have uploaded at least 10 items in your shop",
          progress: 40,
          status: "5/10 completed",
          experience: 100,
        },
      ],
    };
  },
};
</script>
