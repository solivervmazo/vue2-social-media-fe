<template>
  <div>
    <v-card-widget
      class="rounded-lg pa-5"
      :menu-items="['settings']"
      title="latest item"
    >
      <v-item-card class="mt-3"  :content="item" />
    </v-card-widget>
  </div>
</template>

<script>
import vItemCard from "../components/ItemCard.vue";
export default {
  components: {
    vItemCard,
  },
  props: {
    item: {
      default: function () {
        return this.$store.getters["marketplace/GET_LATEST"];
      },
      type: Object,
    },
  },
};
</script>
