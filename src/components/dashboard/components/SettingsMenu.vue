<template>
  <v-card class="dm-settings-menu mx-auto rounded-lg">
    <v-list two-line>
      <v-list-item-group>
        <span
          v-for="(nav, index) in Object.assign([], navigation)"
          :key="index"
        >
          <v-list-group no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title class="subtitle-2 text-capitalize">
                  {{ lang(nav.title) }}
                </v-list-item-title>
                <v-list-item-subtitle class="text-wrap">
                  {{ lang(nav.description) }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </template>
            <template v-slot:prependIcon>
              <v-icon color="cyan lighten-2">{{ nav.icon }}</v-icon>
            </template>
            <v-list-item
              class="dm-list-children-hoverable"
              v-for="(item, itemIndex) in Object.assign([], nav.items)"
              :to="item.url"
              :key="itemIndex"
            >
              <v-list-item-content class="py-0 my-0">
                <v-list-item-title
                  class="py-0 subtitle-2 text-capitalize"
                  v-text="item.title"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-divider></v-divider>
        </span>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      navigation: this.$store.getters["GET_NAVIGATION"]()
    };
  },
  mounted() { },
};
</script>


<style lang="scss">
.v-list--two-line .v-list-item,
.v-list-item--two-line .dm-list-children {
  min-height: 32px;
}
.dm-settings-menu .v-list-item .v-list-item__subtitle,
.theme--light.v-list-item .v-list-item__action-text {
  font-size: 12px !important;
}
.dm-settings-menu .v-list-item__action:last-of-type:not(:only-child),
.v-application--is-ltr .v-list-item__avatar:last-of-type:not(:only-child),
.v-application--is-ltr .v-list-item__icon:last-of-type:not(:only-child) {
  margin-left: 0px;
  margin-right: 0px;
}
.dm-settings-menu .v-list-item .v-list-item__title,
.v-list-item .v-list-item__subtitle {
  font-size: 13px !important;
}

.dm-settings-menu .theme--light.v-list-item.dm-list-children-hoverable:hover {
  padding: 0px 82px;
  transition: padding ease 0.5s;
  .v-list-item__content {
    color: var(--v-primary-base);
  }
}
</style>