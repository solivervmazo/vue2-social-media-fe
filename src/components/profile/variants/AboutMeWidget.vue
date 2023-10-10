<template>
  <div>
    <v-card-widget
      class="rounded-lg pa-5"
      :menu-items="['settings']"
      title="about me"
    >
      <template>
        <v-row class="mt-3">
            <v-col cols="12">
                <p class="caption font-weight-regular"> {{ aboutMe.text }} </p>
            </v-col>
        </v-row>  
        <template v-for="(detail, i) in aboutMe.descriptions">
          <v-row :key="i + $uuid()">
            <v-col class="py-1" cols="4">
              <span
                class="
                  caption
                  font-weight-light
                  text-capitalize
                  dm__secondary4--text
                "
              >
                {{ lang(detail.label) }}
              </span>
            </v-col>
            <v-col class="py-1" cols="8">
              <span
                v-if="!detail.link"
                class="caption font-weight-medium text-capitalize"
              >
                {{ lang(detail.text) }}
              </span>
              <a v-else class="caption font-weight-medium text-capitalize">
                {{ lang(detail.text) }}
              </a>
            </v-col>
          </v-row>
        </template>
      </template>
    </v-card-widget>
  </div>
</template>

<script>
export default {
  props: {
    aboutMe: {
      default: function () {
        return this.$store.getters["profile/GET_PROFILE"]({ key: "aboutMe" });
      },
      type: Object,
    },
  },
};
</script>
