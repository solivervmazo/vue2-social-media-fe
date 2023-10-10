<template>
  <div class="dm-manage-groups-settings">
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{ lang(`my store`) }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <h1 class="text-capitalize">
          {{ lang(`downloads`) }} <span class="dm__primary--text">3</span>
        </h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-filter />
      </v-col>
    </v-row>
    <v-row class="d-none d-md-flex">
      <v-col cols="12">
        <v-card class="rounded-lg ma-2 transparent py-0 pb-0" flat>
          <v-card-text class="py-0 my-0">
            <v-row>
              <v-col class="d-flex align-center mt-6 font-weight-bold text-capitalize caption py-0 pb-0" cols="12" sm="4">
                {{ lang(`item`) }}
              </v-col>
              <v-col cols="12" sm="4">
                <v-row style="height: 100%">
                  <v-col
                    class="d-flex align-center mt-6 font-weight-bold text-capitalize caption py-0 pb-0"
                    cols="4"
                  >
                    {{ lang(`date`) }}
                  </v-col>
                  <v-col
                    class="d-flex align-center mt-6 font-weight-bold caption py-0 pb-0"
                    cols="4"
                  >
                    <span class="text-capitalize">
                      {{ lang(`license`) }}
                    </span>
                  </v-col>
                  <v-col
                    class="d-flex align-center mt-6 font-weight-bold caption py-0 pb-0"
                    cols="4"
                  >
                    <span class="text-capitalize">
                      {{ lang(`price`) }}
                    </span>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" sm="4">
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="rounded-lg ma-2" flat>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="4">
                <v-list two-line class="py-0 my-0">
                  <v-list-item dense>
                    <v-list-item-avatar class="rounded-lg" rounded size="42">
                      <v-img
                        src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                      />
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ lang(`Gaming Coin Badges Pack`) }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        <span class="text-capitalize font-weight-regular">
                          {{ lang(`Illustrations`) }}
                        </span>
                        <br />
                        <span class="font-weight-medium">Nick Grissom</span>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="12" sm="4">
                <v-row style="height: 100%">
                  <v-col
                    class="d-flex align-center mt-6 font-weight-bold caption"
                    cols="4"
                    >11/14/21</v-col
                  >
                  <v-col
                    class="d-flex align-center mt-6 font-weight-bold caption"
                    cols="4"
                    ><span class="text-capitalize">{{
                      lang(`regular`)
                    }}</span></v-col
                  >
                  <v-col
                    class="d-flex align-center mt-6 font-weight-bold caption"
                    cols="4"
                    ><span class="dm__primary--text">$</span>24</v-col
                  >
                </v-row>
              </v-col>
              <v-col cols="12" sm="4">
                <v-row style="height: 100%">
                  <v-col class="d-flex align-center mt-6" cols="6">
                    <v-btn
                      class="text-capitalize font-weight-medium caption"
                      color="dm__info"
                      dark
                      block
                    >
                      {{ lang(`download`) }}
                    </v-btn>
                  </v-col>
                  <v-col class="d-flex align-center mt-6" cols="6">
                    <v-btn block color="secondary">
                      <v-rating
                        readonly
                        background-color="yellow accent-4"
                        color="yellow accent-4"
                        dense
                        half-increments
                        hover
                        size="9"
                      ></v-rating>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import vFilter from "./downloads/Filter.vue";
export default {
  components: {
    vFilter,
  },
};
</script>


<style lang="scss">
.dm-manage-groups-settings .v-input .v-label {
  line-height: 30px !important;
}
</style>