<template>
  <v-card class="rounded-lg" flat>
    <v-card-text class="pa-5">
      <v-form>
        <v-row>
            <v-col cols="12" sm="8">
                <h1>
                    <span class="subtitle-1 font-weight-bold text-capitalize"> {{ lang(`forums`) }} </span> <br>
                    <span class="caption font-weight-regular text-capitalize"> {{ lang(`last category added`) }} </span>
                    <span class="caption font-weight-regular text-capitalize dm__primary--text"> {{ lang(`the jukebox`) }} </span>
                    <span class="caption font-weight-regular text-capitalize"> {{ lang(`2 weeks ago`) }} </span>
                </h1>
            </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              class="rounded-lg text-capitalize"
              hide-details
              :label="lang(`search forums`)"
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