<template>
  <div class="dm-post-action">
    <v-card class="px-4 rounded-lg" flat>
      <v-row>
        <v-col cols="4">
          <v-btn
            color="dm__secondary"
            class="text-capitalize rounded-lg"
            block
            large
            rounded
            plain
          >
            <v-icon>mdi-thumb-up</v-icon>
            <span
              class="caption font-weight-medium ma-4 pt-1 d-none d-sm-block"
            >
              {{ lang(`react`) }}
            </span>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn
            color="dm__secondary"
            class="text-capitalize rounded-lg"
            block
            large
            rounded
            plain
          >
            <v-icon>mdi-comment-text-outline</v-icon>
            <span class="caption font-weight-medium ma-4 pt-1 d-none d-sm-block">{{
              lang(`comment`)
            }}</span>
          </v-btn>
        </v-col>
        <v-col cols="4">
          <v-btn
            color="dm__secondary"
            class="text-capitalize rounded-lg"
            block
            large
            rounded
            plain
          >
            <v-icon>mdi-share-variant-outline</v-icon>
            <span class="caption font-weight-medium ma-4 pt-1 d-none d-sm-block">{{
              lang(`share`)
            }}</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>


<style lang="scss">
.dm-post-action {
  .v-card {
    background-color: #fafafa !important;
  }
  .theme--light.v-btn {
    &::before {
      background-color: var(--v-dm__secondary-base) !important;
    }
    &:hover {
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      .v-btn__content {
        color: var(--v-dm__secondary4--text-base) !important;
        transition: ease 0.5s;
      }
      .v-icon {
        color: var(--v-dm__primary-base) !important;
        &::after {
          color: var(--v-dm__primary-base) !important;
        }
      }
    }
  }
}
</style>