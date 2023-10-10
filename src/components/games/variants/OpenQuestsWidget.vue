<template>
  <div>
    <v-card-widget
      class="rounded-lg pa-5"
      :menu-items="['settings']"
      title="open quest"
    >
      <template v-slot:menu="{ menuItems }">
        <v-menu offset-overflow offset-y left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list class="dm-feed-post-list" dense min-width="150px" single-line>
            <v-list-item
              class="py-0"
              v-for="item in menuItems"
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
      </template>
      <v-list class="mb-5" two-line>
        <template v-for="(item, index) in items">
          <v-list-item :key="index">
            <v-list-item-avatar>
              <v-img
                :src="`https://odindesignthemes.com/vikinger/img/quest/openq-s.png`"
              />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                class="body-2 font-weight-medium"
                v-html="lang(item.title)"
              ></v-list-item-title>
              <v-list-item-subtitle
                class="text-wrap subtitle-1 dm__secondary4--text font-weight-light"
                v-html="lang(item.subtitle)"
              >
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-progress-linear
            color="dm__info"
            :value="item.progress"
            :key="index + `--p`"
          />
        </template>
      </v-list>
      <template>
        <v-row>
          <v-col cols="12">
            <v-btn
              block
              color="dm__info"
              class="caption text-capitalize font-weight-light rounded-lg"
              rounded
              dark
              :to="{ name: `views.quests` }"
            >
              {{ lang(`see all quests`) }}
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </v-card-widget>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Nothing to hide",
          subtitle: "You have completed all your profile information fields",
          progress: 10,
        },
        {
          title: "Social King",
          subtitle:
            "You have linked at least 8 social networks to your profile",
          progress: 50,
        },
        {
          title: "Buffed Profile",
          subtitle: "You have posted every day for at least 30 days in a row",
          progress: 30,
        },
        {
          title: "Hear the People",
          subtitle: "You have created and posted your first poll",
          progress: 20,
        },
        {
          title: "Store Manager",
          subtitle: "You have uploaded at least 10 items in your shop",
          progress: 70,
        },
      ],
    };
  },
};
</script>
