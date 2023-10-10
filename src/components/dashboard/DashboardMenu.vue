<template>
  <v-card class="mx-auto">
    <v-list two-line>
      <v-list-item-group>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                {{ lang(`My Profile`) }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-wrap">
                {{
                  lang(
                    `Description on the action what to do,Description on the action what to doDescription on the action what to do`
                  )
                }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </template>
          <template v-slot:prependIcon>
            <v-icon color="cyan lighten-2">mdi-account-circle-outline</v-icon>
          </template>
        </v-list-group>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="cyan lighten-2">mdi-cog-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ lang(`Settings`) }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-wrap">
              {{
                lang(
                  `Description on the action what to do,Description on the action what to doDescription on the action what to do`
                )
              }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>
              <v-btn icon x-small>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-list-item-action-text>
            <v-spacer />
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="cyan lighten-2">mdi-account-group-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ lang(`Groups`) }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-wrap">
              {{
                lang(
                  `Description on the action what to do,Description on the action what to doDescription on the action what to do`
                )
              }}
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>
              <v-btn icon x-small>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-list-item-action-text>
            <v-spacer />
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
