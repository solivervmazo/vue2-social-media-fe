<template>
  <div>
    <v-card flat>
      <template v-for="(review, index) in reviews.reviews">
        <v-review :review="review" :key="index + $uuid()" />
      </template>
    </v-card>
  </div>
</template>

<script>
import vReview from "../core/Review.vue";
export default {
  components: {
      vReview
  },
  props: {
    reviews: {
      type: Object,
      required: true,
    },
  },
};
</script>