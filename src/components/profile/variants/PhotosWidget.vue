<template>
  <div>
    <v-card-widget
      class="rounded-lg pa-5"
      :menu-items="['settings']"
      title="photos"
    >
      <template v-slot:header="{ title }">
        <span class="text-capitalize subtitle-2">
          {{ title }}
          <span class="dm__primary--text mx-1"> {{ photos.length }} </span>
        </span>
      </template>
      <v-card
        class="d-flex align-content-start flex-wrap mt-3"
        flat
        tile
      >
        <v-avatar class="ma-1 rounded-lg" tile rounded v-for="(photo, i) in photos" :key="i + $uuid()">
          <v-img :src="photo" />
        </v-avatar>
      </v-card>
    </v-card-widget>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      photos: [
          'https://odindesignthemes.com/vikinger/img/avatar/01.jpg',
          'https://odindesignthemes.com/vikinger/img/avatar/02.jpg',
          'https://odindesignthemes.com/vikinger/img/avatar/03.jpg',
          'https://odindesignthemes.com/vikinger/img/avatar/04.jpg',
          'https://odindesignthemes.com/vikinger/img/avatar/05.jpg',
          'https://odindesignthemes.com/vikinger/img/avatar/06.jpg',
          'https://odindesignthemes.com/vikinger/img/avatar/07.jpg',
          'https://odindesignthemes.com/vikinger/img/avatar/08.jpg',
          'https://odindesignthemes.com/vikinger/img/avatar/09.jpg',
      ],
    };
  },
};
</script>
