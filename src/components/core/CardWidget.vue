<template>
  <v-card flat>
    <v-card-title class="py-0 px-0">
      <slot name="header" v-bind:title="title">
        <span class="text-capitalize subtitle-2">{{ lang(title) }}</span>
        <v-spacer />
        <slot name="menu" v-bind:menuItems="menuItems">
          <v-menu offset-overflow offset-y left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>{{ menuIcon }}</v-icon>
              </v-btn>
            </template>
            <v-list
              class="dm-feed-post-list"
              dense
              min-width="150px"
              single-line
            >
              <v-list-item
                class="py-0"
                v-for="item in menuItems"
                :key="item"
                link
              >
                <v-list-item-title
                  class="caption font-weight-medium text-capitalize"
                >
                  {{ !Array.isArray(item) ? item : item.text }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </slot>
      </slot>
    </v-card-title>
    <slot />
    <v-card-actions>
      <slot name="foot"> </slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      default: "",
      type: String,
    },
    menuIcon: {
      default: "mdi-dots-horizontal",
      type: String,
    },
    menuItems: {
      default: () => {
        return [
          {
            text: "settings",
          },
        ];
      },
      type: Array,
    },
  },
};
</script>