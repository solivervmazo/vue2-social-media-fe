<template>
  <v-navigation-drawer
    class="dm-mini-nav-messenger"
    v-model="drawer"
    app
    clipped
    right
    :mini-variant.sync="panel"
  >
    <v-contacts />
    <template v-slot:append>
      <div>
        <v-row v-if="!panel">
          <v-col class="pa-7" cols="12">
            <v-text-field
              class="rounded-lg"
              hide-details
              :label="lang(`Search contacts...`)"
              outlined
              v-model="search"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-btn
          class="py-6"
          color="cyan lighten-2"
          @click="panel = !panel"
          block
          tile
          dark
        >
          <v-icon left> mdi-message-text </v-icon>
          <span v-if="!panel">{{ lang(`Messages`) }}/{{ lang(`Chat`) }}</span>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import vContacts from "./components/Contacts.vue"
export default {
  components: {
    vContacts
  },
  data() {
    return {
      drawer: true,
      panel: true,
      search: '' ,
    };
  },
};
</script>