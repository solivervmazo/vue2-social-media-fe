<template>
  <div>
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{ lang(`my profile`) }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col cols="6">
            <h1 class="text-capitalize">{{ lang(`find friends`) }} <span class=" dm__primary--text">3</span></h1>
          </v-col>
          <v-col class="d-flex flex-row justify-end align-end" cols="6">
              <a class="caption px-4 text-capitalize">{{ lang(`find friends`) }}</a>
              <a class="caption text-capitalize">{{ lang(`settings`) }}</a>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-request
          v-for="(item, index) in Object.assign([], items)"
          :key="index"
          :item="item"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import vRequest from "../../profile/templates/friendRequests/FriendRequest.vue";
export default {
  components: {
    vRequest,
  },
  data() {
    return {
      items: [
        {
          sender: "sol maz",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          timestamp: "2 mins ago",
          message: "6 friends in common",
        },
        {
          sender: "jay me",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          timestamp: "2 mins ago",
          message: "2 friends in common",
        },
      ],
    };
  },
};
</script>