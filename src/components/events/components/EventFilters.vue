<template>
  <v-card class="rounded-lg" flat>
    <v-card-text class="pa-5">
      <v-form>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`search events`)"
              outlined
            >
                <template v-slot:append-outer>
                    <v-btn color="dm__primary" dark x-large>
                        <v-icon  class="py-0">
                            mdi-magnify
                        </v-icon>
                    </v-btn>
                </template>
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="2">
          </v-col>
          <v-col cols="12" sm="3">
          </v-col>
          <v-col cols="12" sm="3">
            <v-btn block class="rounded-lg" color="dm__primary" dark x-large>
              <span class="text-capitalize caption font-weight-medium">
               + {{ lang(`add new event`) }}!
              </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>


<style lang="scss">
.v-input .v-label {
  line-height: 30px !important;
}
</style>