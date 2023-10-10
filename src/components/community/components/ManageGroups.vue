<template>
  <div class="dm-manage-groups-settings">
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{ lang(`groups`) }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <h1 class="text-capitalize">{{ lang(`manage groups`) }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex align-start">
          <v-card class="rounded-lg ma-2" flat>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="120px"
              max-width="250px"
            >
              <v-card-title class="white--text mt-8">
                <v-avatar size="56">
                  <img
                    alt="user"
                    style="border: 2px solid purple"
                    src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                  />
                </v-avatar>
              </v-card-title>
            </v-img>
            <v-card-text class="text-center">
              <v-row>
                <v-col class="my-2" cols="12">
                  <h1 class="dm__secondary4--text subtitle-2">
                    Developers Of Dark Realm
                  </h1>
                  <span class="caption font-weight-regular">Jaymee eemyaJ</span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-btn
                    block
                    color="dm__secondary"
                    outlined
                    class="
                      rounded-lg
                      text-capitalize
                      caption
                      font-weight-medium
                      my-2
                    "
                    dark
                  >
                    {{ lang(`manage group`) }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      items: [
        {
          banner: false,
          avatar: false,
          title: false,
          author: false,
        },
        {
          banner: "",
          avatar: "",
          title: "",
          author: "soliver mazo",
        },
      ],
    };
  },
};
</script>


<style lang="scss">
.dm-manage-groups-settings .v-input .v-label {
  line-height: 30px !important;
}

</style>