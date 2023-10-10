<template>
  <v-card class="mb-5 rounded-lg">
    <v-card-title class="text-capitalize">
      {{ lang(`password details`) }}
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12" sm="12">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`confirm your current password`)"
              type="password"
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`your new password`)"
              type="password"
              outlined
            />
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`confirm new password`)"
              type="password"
              outlined
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-btn class="text-capitalize rounded-lg" color="information" block dark>
                {{ lang(`forgot your password`) }}?
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn class="text-capitalize rounded-lg" color="dm__primary" block dark>
                {{ lang(`change your password now`) }}!
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>