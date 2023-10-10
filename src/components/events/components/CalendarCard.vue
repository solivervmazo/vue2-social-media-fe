<template>
  <div class="dm-calendar-card">
    <v-card class="rounded-lg" flat rounded width="100%">
      <v-sheet height="64">
        <v-toolbar flat>
          <v-btn
            class="rounded-lg text-capitalize mr-4"
            rounded
            color="dm__primary"
            @click="setToday"
            dark
          >
            {{ lang(`today`) }}
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="prev">
            <v-icon small> mdi-chevron-left </v-icon>
          </v-btn>
          <v-btn fab text small color="grey darken-2" @click="next">
            <v-icon small> mdi-chevron-right </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu offset-overflow offset-y left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn :class=" { 'd-sm-flex d-md-none' : !widget } " icon v-bind="attrs" v-on="on">
                <v-icon> mdi-dots-vertical </v-icon>
              </v-btn>
            </template>
            <v-list
              class="dm-feed-post-list"
              dense
              min-width="150px"
              single-line
            >
              <v-list-item
                class="py-0"
                v-for="(item , index) in views"
                :key="index + $uuid()"
                link
              >
                <v-list-item-title
                  class="caption font-weight-medium text-capitalize"
                >
                  {{ !Array.isArray(item) ? item : item.text }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <div v-if="!widget" class="d-none d-md-flex flex-md-row" height="100%">
            <template v-for="(views, index) in views">
              <v-tooltip bottom :key="index + `-hint`">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="dm__secondary"
                    icon
                    plain
                    v-bind="attrs"
                    v-on="on"
                    @click="type = index"
                  >
                    <v-icon>mdi-grid</v-icon>
                  </v-btn>
                </template>
                <span>{{ lang(views) }}</span>
              </v-tooltip>
            </template>
          </div>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card color="grey lighten-4" min-width="350px" flat>
            <v-toolbar :color="selectedEvent.color" dark>
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary" @click="selectedOpen = false">
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
      <v-card-text>
        <h1 class="dm__secondary4--text text-capitalize font-weight-bold subtitle-1">
          {{
            new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          }}
        </h1>
        <v-list three-line>
          <template v-for="(item, index) in todayEvents()">
            <v-list-item :key="index + `--ca`">
              <v-list-item-content>
                <v-list-item-title
                  class="font-weight-medium text-capitalize"
                  v-html="item.name"
                />
                <v-list-item-subtitle
                  class="blac--text"
                  v-html="item.description"
                />
                <v-list-item-subtitle>
                  <span class="dm__secondary4--text font-weight-medium">
                    {{
                      `${new Date(item.start).toLocaleString("en-US", {
                        hour: "numeric",
                        hour12: true,
                      })}`
                    }}
                  </span>
                  -
                  <span class="dm__secondary4--text font-weight-medium">
                    {{
                      `${new Date(item.end).toLocaleString("en-US", {
                        hour: "numeric",
                        hour12: true,
                      })}`
                    }}
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    widget:{
      default: false,
      type: Boolean
    }
  },
  data: () => ({
    focus: "",
    type: "month",
    views: {
      month: "month",
      week: "week",
      day: "day",
      "4day": "4 days",
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      "blue",
      "indigo",
      "deep-purple",
      "cyan",
      "green",
      "orange",
      "grey darken-1",
    ],
    names: [
      "Meeting",
      "Holiday",
      "PTO",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
    descriptions: [
      "Hi Neko! I'm creating this event to invite you to have breakfast before work. Meet me at Coffebucks.",
      "The biggest party for Twitch streamers! Come and join us at Shenron Arena.",
      "Come to have a great time with us at our artistic painting course! Begginers and experts welcome!",
      "Join us at the CosWorld after party! We'll be eating, drinking and having a great time exchanging experiences",
    ],
    locations: [
      "Downtown Coffeebucks",
      "Shenron Arena",
      "CosWorld Arena",
      "Xavier's Art Center",
    ],
    banners: [
      "https://odindesignthemes.com/vikinger/img/cover/01.jpg",
      "https://odindesignthemes.com/vikinger/img/cover/23.jpg",
      "https://odindesignthemes.com/vikinger/img/cover/40.jpg",
      "https://odindesignthemes.com/vikinger/img/cover/47.jpg",
    ],
  }),
  mounted() {
    this.$refs.calendar.checkChange();
  },
  methods: {
    todayEvents() {
      return this.events.filter(
        (ev) =>
          ev.start.toISOString().substr(0, 10) ==
          new Date().toISOString().substr(0, 10)
      );
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          description:
            this.descriptions[this.rnd(0, this.descriptions.length - 1)],
          location: this.locations[this.rnd(0, this.locations.length - 1)],
          banner: this.banners[this.rnd(0, this.banners.length - 1)],
          timed: !allDay,
        });
      }
      this.$emit("populate-event", { events });
      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
};
</script>