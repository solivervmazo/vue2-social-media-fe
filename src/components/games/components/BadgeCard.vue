<template>
  <div class="dm-game-badge-card">
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-lg" width="100%" flat rounded>
          <v-card-title>
            <!-- <v-icon :color="content.color">{{ content.icon }}</v-icon> -->
            <v-avatar size="40">
              <v-img :src="content.icon2"></v-img>
            </v-avatar>
            <v-chip
              pill
              class="caption font-weight-medium elevation-6"
              color="white"
              :elevation="1"
              style="postion: absolute; left: 63%; top: 0px"
            >
              <span class="dm__primary--text mx-1">+</span>
              <span class="text-capitalize">
                {{ content.experience }} {{ lang(`exp`) }}
              </span>
            </v-chip>
          </v-card-title>
          <v-card-text>
            <v-my-badge 
              :avatar="content.icon"
              :title="content.title"
              :description="content.subtitle"
              :progress="content.progress"
              :status="content.status"
              text-center
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import vMyBadge from "../core/Badge.vue";
export default {
  components:{
    vMyBadge
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
