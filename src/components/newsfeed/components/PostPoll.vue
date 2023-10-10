<template>
  <div class="dm-post-poll">
    <v-card class="rounded-lg ma-3 pa-3" rounded flat elevation="1">
      <v-card-title>
        <span class="subtitle-1 font-weight-medium">
          What do you wanna see in my upcoming videos? <br />
          <span class="body-2 font-weight-regular grey--text">
            Poll ends in 5 days
          </span>
        </span>
      </v-card-title>
      <v-card-text>
        <v-radio-group >
          <v-radio
            v-for="n in 3"
            :key="n"
            :label="`Radio ${n}`"
            :value="n"
            large
          ></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-card-actions>
          <v-row>
              <v-col cols="4">
                <v-btn block color="dm__info" class="caption text-capitalize rounded-lg" dark rounded>{{ lang(`vote now`) }}</v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn block color="dm__secondary4--text" class="caption text-capitalize rounded-lg" dark rounded>{{ lang(`see results`) }}</v-btn>
              </v-col>
          </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>
