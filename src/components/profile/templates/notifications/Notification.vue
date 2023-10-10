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
              <v-list-item-title class="pt-0" >
                  {{ item.sender }} 
                  <span v-if="item.action === 'comment' " class="text-regular caption">
                      {{ lang(item.message) }} {{ lang(`on your`) }} <a class="font-weigth-medium title-1 cyan--text">{{ lang(item.target)  }}</a>
                  </span>
                  <span v-if="item.action === 'react' " class="text-regular caption">
                      {{ lang(item.message) }} <span v-html="item.emoji + ` reaction `"> {{ lang(`on your`) }} </span> <a class="font-weigth-medium title-1 cyan--text">{{ lang(item.target)  }}</a>
                  </span>
              </v-list-item-title>
              <v-list-item-subtitle
              ><small>{{item.timestamp}}</small></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action class="my-0">
              <v-btn disabled icon>
                <v-icon color="grey lighten-1">{{ item.action == 'react' ? 'mdi-information' : 'mdi-comment-text-outline'}}</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-hover>
</template>

<script>
export default {
    props :{
        item: {
            type: Object ,
            required: true
        }
    }
}
</script>