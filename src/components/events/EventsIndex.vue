<template>
  <v-container>
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">
          {{ lang(`get a quiuck look`) }}
        </span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col cols="6">
            <h2 class="text-capitalize">{{ lang(`events calendar`) }}</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-event-filters />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-calendar-card v-on:populate-event="populateEvents" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">
          {{ lang(`see what's next`) }}
        </span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <v-row>
          <v-col cols="6">
            <h2 class="text-capitalize">{{ lang(`upcoming events`) }}</h2>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <template v-for="(ev, index) in events">
            <v-col cols="12" sm="3" :key="index">
              <v-event-card :content="ev" />
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import vEventFilters from "./components/EventFilters.vue";
import vCalendarCard from "./components/CalendarCard.vue";
import vEventCard from "./components/EventCard.vue";
export default {
  components: {
    vEventFilters,
    vCalendarCard,
    vEventCard,
  },
  data() {
    return {
        events: []
    };
  },
  methods: {
      populateEvents: function({ events = []} = {}){
          this.events = events;
      }
  }
};
</script>
