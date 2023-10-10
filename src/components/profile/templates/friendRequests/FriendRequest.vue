<template>
  <v-hover v-slot="{ hover }">
    <v-card class="mb-5 rounded-lg" color="white" elevation="0" rounded>
      <v-system-bar color="transparent">
        <v-spacer></v-spacer>
        <v-btn v-if="hover" x-small depressed icon plain>
          <v-icon class="pa-2" color="dm__primary" x-small
            >mdi-circle-outline</v-icon
          >
        </v-btn>
        <v-btn v-if="hover" x-small depressed icon plain>
          <v-icon class="pa-2" color="secondary" x-small
            >mdi-close-thick</v-icon
          >
        </v-btn>
      </v-system-bar>
      <v-card-text class="pt-1">
        <v-list class="pt-0" dense one-line>
          <v-list-item>
            <v-list-item-avatar class="mt-0">
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content class="mt-0 pt-0">
              <v-list-item-title class="pt-0">
                {{ item.sender }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-regular caption">{{
                item.message
              }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action class="my-0 text-nowrap">
              <v-row>
                <v-col cols="12" sm="12">
                  <v-btn color="info" class="mx-2" rounded text outlined>
                    <v-icon class="mx-1">
                      mdi-account-plus-outline
                    </v-icon>
                    <span class="text-capitalize caption">{{
                      lang(`add friend`)
                    }}</span>
                  </v-btn>
                  <v-btn color="error" outlined rounded >
                    <v-icon>
                      mdi-account-minus-outline
                    </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>