<template>
  <div class="dm-manage-groups-settings">
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{ lang(`groups`) }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <h1 class="text-capitalize">{{ lang(`invitations`) }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex align-start">
          <v-card class="rounded-lg ma-2" flat>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="120px"
              max-width="280px"
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
                <v-col cols="4">
                  <h1 class="font-weight-bold dm__secondary4--text caption">951</h1>
                  <span class="caption font-weight-regular text-capitalize">
                    {{ lang(`members`) }}
                  </span>
                </v-col>
                <v-divider inset vertical></v-divider>
                <v-col cols="4">
                  <h1 class="font-weight-bold dm__secondary4--text caption">408</h1>
                  <span class="caption font-weight-regular text-capitalize">
                    {{ lang(`posts`) }}
                  </span>
                </v-col>
                <v-divider inset vertical></v-divider>
                <v-col cols="4">
                  <h1 class="font-weight-bold dm__secondary4--text caption">9.2k</h1>
                  <span class="caption font-weight-regular text-capitalize">
                    {{ lang(`visits`) }}
                  </span>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-btn
                    block
                    color="dm__info"
                    outlined
                    class="
                      rounded-lg
                      text-capitalize
                      caption
                      font-weight-medium
                      my-2
                    "
                    dark
                    x-large
                  >
                    <v-icon> mdi-account-multiple-plus-outline </v-icon>
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <v-btn
                    block
                    color="dm__error"
                    outlined
                    class="
                      rounded-lg
                      text-capitalize
                      caption
                      font-weight-medium
                      my-2
                    "
                    dark
                    x-large
                  >
                    <v-icon> mdi-account-multiple-minus-outline </v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider/>
            <v-card-actions>
              <v-list class="py-0 my-0">
                <v-list-item dense>
                  <v-list-item-avatar size="32">
                    <v-img
                      src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                    />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      <small>
                        <span class="text-capitalize font-weight-regular">{{ lang(`invited by`) }}</span><br>
                        <span class="font-weight-medium">Soliver Mazo</span>
                      </small>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-actions>
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