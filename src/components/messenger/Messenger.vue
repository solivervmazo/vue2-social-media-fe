<template>
  <div>
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{ lang(`my profile`) }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col cols="6">
            <h1 class="text-capitalize">{{ lang(`messages`) }}</h1>
          </v-col>
          <v-col class="d-flex flex-row justify-end align-end" cols="6">
            <a class="caption px-4 text-capitalize">{{
              lang(`mark all as read`)
            }}</a>
            <a class="caption text-capitalize">{{ lang(`settings`) }}</a>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-messenger/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import vMessenger from "./templates/Messenger.vue"
export default {
    components: {
        vMessenger
    }
};
</script>