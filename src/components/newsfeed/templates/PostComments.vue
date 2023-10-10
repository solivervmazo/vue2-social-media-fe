<template>
  <div class="dm-post-comments">
    <v-card class="transparent pa-0" flat>
      <v-card-actions>
        <v-row>
          <v-col cols="6">
            <v-btn class="stacked" color="red" icon>
              <v-icon>mdi-heart-circle</v-icon>
            </v-btn>
            <v-btn class="stacked" color="blue" icon>
              <v-icon>mdi-thumb-up</v-icon>
            </v-btn>
            <v-btn class="stacked" color="yellow" icon>
              <v-icon>mdi-emoticon</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="6">
               <v-btn class="text-capitalize" x-small text>{{ content.participants}} {{ lang(`participants`) }}</v-btn>
          </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-btn class="text-capitalize" x-small text>{{ content.comments}} {{ lang(`comment`) }}</v-btn>
        <v-btn class="text-capitalize" x-small text>{{ content.shares}} {{ lang(`share`) }}</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object ,
      required: true,
    }
  },
  data() {
    return {
      expand: false,
    };
  },
};
</script>

<style lang="scss">
.dm-post-comments {
  .stacked {
    margin-left: -3px;
    box-shadow: 0px 0px 0px 0.8px #fff inset !important;
    &.v-btn--icon {
      &.v-size--default {
        height: auto !important;
        width: auto !important;
      }
    }
  }
}
</style>