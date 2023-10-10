<template>
  <div>
    <v-card class="rounded-lg pa-5" flat rounded>
      <v-card-text class="text-center">
        <v-progress-circular
          class="mb-5"
          :rotate="360"
          :size="100"
          :width="15"
          :value="50"
          color="teal"
        >
          {{ 50 }}%
        </v-progress-circular>
        <h2 class="mb-5">
          <span class="text-capitalize font-weight-medium"
            >{{ lang(`profile completion`) }}
          </span>
          <br />
          <span class="caption font-weight-light text-capitalize">
            {{ lang(`Soliver Mazo`) }}
          </span>
        </h2>
        <p class="font-weight-light mb-5">
          Complete your profile by filling profile info fields, completing
          quests & unlocking badges
        </p>
        <v-row>
          <v-col cols="6">
            <h2 class="mb-5 dm__secondary4--text">
              <span class="text-capitalize font-weight-medium"> 11/13 </span>
              <br />
              <span class="caption font-weight-medium text-capitalize">
                {{ lang(`quests`) }}
              </span>
              <span class="caption grey--text font-weight-medium text-uppercase">
                {{ lang(`completed`) }}
              </span>
            </h2>
            <v-icon large>
                mdi-medal
            </v-icon>
          </v-col>
          <v-divider class="my-10" vertical />
          <v-col cols="6">
            <h2 class="mb-5 dm__secondary4--text">
              <span class="text-capitalize font-weight-medium"> 11/13 </span>
              <br />
              <span class="caption font-weight-medium text-capitalize">
                {{ lang(`quests`) }}
              </span>
              <span class="caption grey--text font-weight-medium text-uppercase">
                {{ lang(`completed`) }}
              </span>
            </h2>
            <v-icon large>
                mdi-medal
            </v-icon>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>