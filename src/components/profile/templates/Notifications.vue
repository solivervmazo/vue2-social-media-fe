<template>
  <div>
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{ lang(`my profile`) }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col cols="6">
            <h1 class="text-capitalize">{{ lang(`notifications`) }}</h1>
          </v-col>
          <v-col class="d-flex flex-row justify-end align-end" cols="6">
              <a class="caption px-4 text-capitalize">{{ lang(`mark all as read`) }}</a>
              <a class="caption text-capitalize">{{ lang(`settings`) }}</a>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-notification
          v-for="(item, index) in Object.assign([], items)"
          :key="index"
          :item="item"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import vNotification from "../../profile/templates/notifications/Notification.vue";
export default {
  components: {
    vNotification,
  },
  data() {
    return {
      items: [
        {
          sender: "sol maz",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          timestamp: "2 mins ago",
          message: "left a ",
          action: "react",
          emoji: "&#129304;",
          target: "status update",
        },
        {
          sender: "jay me",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          timestamp: "2 mins ago",
          message: "posted a comment",
          action: "comment",
          target: "photo",
        },
      ],
    };
  },
};
</script>