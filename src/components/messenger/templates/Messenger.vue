<template>
  <v-card
    class="mb-5 pa-0 dm-messenger-max rounded-lg"
    color="white"
    elevation="0"
    height="70vh"
  >
    <v-row no-gutters style="height: 100%">
      <v-col
        class="px-0 flex-grow-0 flex-shrink-0"
        style="min-width: 288px; max-width: 100%"
      >
        <v-navigation-drawer
          color="grey lighten-5"
          absolute
          permanent
          width="300px"
        >
          <v-contacts :search="search" />
          <template v-slot:append>
            <div>
              <v-row>
                <v-col class="pa-7" cols="12">
                  <v-text-field
                    class="rounded-lg text-capitalize"
                    hide-details
                    :label="lang(`search messages...`)"
                    outlined
                    v-model="search"
                    append-icon="mdi-magnify"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </div>
          </template>
        </v-navigation-drawer>
      </v-col>
      <v-col class="pb-0 flex-grow-1 flex-shrink-0" style="max-width: 100%">
        <v-card height="100%" flat>
          <v-app-bar flat color="rgba(0, 0, 0, 0)">
            <v-app-bar-nav-icon class="mx-2">
              <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                </v-img>
              </v-avatar>
            </v-app-bar-nav-icon>
            <v-toolbar-title class="subtitle-2">
              <v-row>
                <v-col class="mt-0 d-flex flex-column">
                  <span>sol sol</span>
                  <v-chip color="success" x-small>{{ lang(`online`) }}</v-chip>
                </v-col>
              </v-row>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu offset-overflow offset-y left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list dense min-width="150px" single-line>
                <v-list-item
                  v-for="item in ['report', 'block', 'mute']"
                  :key="item"
                >
                  <v-list-item-title class="caption font-weight-medium">{{
                    item
                  }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-app-bar>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <div class="d-flex flex-row px-2">
                  <v-avatar size="36">
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                    </v-img>
                  </v-avatar>
                  <div class="mx-2  d-flex flex-column">
                      <div class="pa-2 rounded-lg blue-grey lighten-5 caption">hello</div>
                      <small>Yesterday at 8:36PM</small>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div class="d-flex flex-row-reverse px-2">
                  <v-avatar size="36">
                    <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg">
                    </v-img>
                  </v-avatar>
                  <div class="mx-2  d-flex flex-column">
                      <div class="pa-2 my-2 deep-purple lighten-3 caption rounded-lg white--text">hello</div>
                      <div class="pa-2 my-2 deep-purple lighten-3 caption rounded-lg white--text">hello</div>
                      <small>Yesterday at 8:36PM</small>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions style="position: absolute; bottom: 0px; width: 100%">
            <v-row>
              <v-col class="py-5 px-5">
                <v-text-field
                  class="rounded-lg text-capitalize"
                  hide-details
                  :label="lang(`write a message`)"
                  outlined
                  v-model="search"
                  append-icon="mdi-camera-outline"
                >
                  <template v-slot:append-outer>
                    <v-btn class="mx-3" color="dm__primary" x-large>
                      <v-icon>mdi-send-outline</v-icon>
                    </v-btn>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import vContacts from "../components/Contacts.vue";
export default {
  components: {
    vContacts,
  },
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style lang="scss">
.dm-messenger-max .theme--light.v-list-item:hover {
  border-left: 2px solid var(--v-primary-base);
}

.dm-messenger-max .v-input .v-label {
  line-height: 30px !important;
}

.dm-messenger-max .v-navigation-drawer__append {
  background-color: white !important;
}

.v-input__append-outer {
  margin-top: 0px !important;
}
</style>