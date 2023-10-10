<template>
  <v-list-item one-line dense>
    <v-list-item-avatar color="dm__primary">
      <span class="white--text font-weight-medium">{{ `SM` }}</span>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>
        {{ `Soliver V Mazo` }}
      </v-list-item-title>
      <v-list-item-subtitle>
        {{ `@solivermazo` }}
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon small @click="$store.dispatch('auth/signOut')" v-bind="attrs" v-on="on"><v-icon small>mdi-location-exit</v-icon></v-btn>
        </template>
        <span class="text-capitalize"><small>{{ lang(`signout`) }}</small></span>
      </v-tooltip>
    </v-list-item-action>
  </v-list-item>
</template>
<script>
export default {
  methods: {}
};
</script>