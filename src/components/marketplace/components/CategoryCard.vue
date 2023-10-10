<template>
  <div class="dm-game-badge-card">
    <v-row>
      <v-col cols="12">
        <v-card
          class="rounded-lg"
          width="100%"
          height="142"
          flat
          rounded
          :style="{
            background: `url('${content.cover}') no-repeat 100% 0,linear-gradient(90deg,#615dfa,#8d7aff) `,
            height: '142px',
          }"
        >
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <h1>
                  <span class="white--text subtitle-1 text-capitalize font-weight-bold">{{ content.title }}</span>
                  <br />
                  <span class="white--text caption text-capitalize font-weight-light"> {{ content.subtitle }} </span>
                </h1>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="12">
                <v-chip color="white" class="text-capitalize caption font-weight-medium dm__info--text">
                  <span color="transparent"></span>{{ `${content.items} items` }}
                </v-chip>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      avatars: [
        {
          alt: "John Smitt",
          id: 1,
          presence: "Online",
          role: "Frontend Engineer",
          src: null,
        },
        {
          alt: "Joanne Swizzlette",
          id: 2,
          presence: "Away",
          role: "Automation Engineer",
          src: "https://randomuser.me/api/portraits/med/women/3.jpg",
        },
        {
          alt: "Frankie Dowle",
          id: 4,
          presence: "Online",
          role: "Platform Architect",
          src: "https://randomuser.me/api/portraits/med/men/8.jpg",
        },
        {
          alt: "Annette Walker",
          id: 5,
          presence: "Online",
          role: "Head of UX",
          src: "https://randomuser.me/api/portraits/med/women/5.jpg",
        },
        {
          alt: "Danny Quaide",
          id: 6,
          presence: "Offline",
          role: "UI Designer",
          src: "https://randomuser.me/api/portraits/med/men/10.jpg",
        },
        {
          alt: "Paisley Arch",
          id: 7,
          presence: "Holiday",
          role: "Automation Engineer",
          src: "https://randomuser.me/api/portraits/med/women/7.jpg",
        },
        {
          alt: "Kenneth Boomstang",
          id: 8,
          presence: "Online",
          role: "Frontend Engineer",
          src: "https://randomuser.me/api/portraits/med/men/1.jpg",
        },
        {
          alt: "Donna Avery",
          id: 9,
          presence: "Online",
          role: "UX Researcher",
          src: "https://randomuser.me/api/portraits/med/women/2.jpg",
        },
        {
          alt: "Phillip Hargreaves",
          id: 10,
          presence: "Online",
          role: "Head of Quality",
          src: "https://randomuser.me/api/portraits/med/men/11.jpg",
        },
        {
          alt: "Melissa Tushoos",
          id: 11,
          presence: "Online",
          role: "Head of Platform Engineering",
          src: "https://randomuser.me/api/portraits/med/women/4.jpg",
        },
        {
          alt: "Justin Backbeard",
          id: 12,
          presence: "Busy",
          role: "Frontend Engineer",
          src: "https://randomuser.me/api/portraits/med/men/13.jpg",
        },
        {
          alt: "Amy Fullerton",
          id: 13,
          presence: "Busy",
          role: "UI Designer",
          src: "https://randomuser.me/api/portraits/med/women/6.jpg",
        },
        {
          alt: "Angus Dougherty",
          id: 14,
          presence: "Online",
          role: "Backend Engineer",
          src: null,
        },
        {
          alt: "Jess Cransley",
          id: 15,
          presence: "Online",
          role: "UX Advocate",
          src: "https://randomuser.me/api/portraits/med/women/8.jpg",
        },
        {
          alt: "Barry Morgan",
          id: 16,
          presence: "Away",
          role: "Frontend Architect",
          src: "https://randomuser.me/api/portraits/med/men/17.jpg",
        },
        {
          alt: "Warren Deekead",
          id: 17,
          presence: "Online",
          role: "Backend Engineer",
          src: "https://randomuser.me/api/portraits/med/men/19.jpg",
        },
        {
          alt: "Melissa Warmslent",
          id: 18,
          presence: "Holiday",
          role: "DevOps Engineer",
          src: "https://randomuser.me/api/portraits/med/women/12.jpg",
        },
      ],
      stackedLimit: 6,
      stackedMenu: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
$avatar-size: 30px;
$base-unit: 10px;
$border-width: ($base-unit / 4);

.avatars-group {
  &.grid {
    display: grid;
    grid-gap: $base-unit;
    grid-template-columns: repeat(
      auto-fit,
      minmax(($avatar-size + $base-unit), 1fr)
    );
  }

  &.stacked {
    display: flex;
    flex-direction: row;
    direction: ltr;
    max-width: 100%;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;

    > * {
      margin-right: -($base-unit);

      &:last-of-type {
        padding-right: ($base-unit * 2);
      }
    }
  }

  &__item {
    cursor: default;
    transition: all 0.1s ease-out;

    &.more {
      align-items: center;
      display: flex;

      &:hover {
        transform: none;
      }
    }

    // &:hover {
    //   transform: translateY((-($base-unit / 2)));
    //   z-index: 1;
    // }
  }

  .v-avatar {
    box-shadow: 0px 0px 0px $border-width #fff inset;
    //clip-path: polygon(5% 5%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
    img {
      padding: $border-width;
    }

    span {
      align-items: center;
      display: flex;
      font-size: 110%;
      font-weight: 700;
      height: 100%;
      justify-content: center;
      letter-spacing: 0.1rem;
      text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.56);
      width: inherit;
    }
  }
}

.v-avatar.bordered {
  box-shadow: 0px 0px 0px $border-width #fff inset;

  img {
    padding: $border-width;
  }
}

.v-avatar.bordered.small {
  box-shadow: 0px 0px 0px ($border-width - 1) #fff inset;

  img {
    padding: ($border-width - 1);
  }
}

.presence {
  box-shadow: 0px 0px 0px $border-width #fff inset;
  border-radius: 50%;
  bottom: 0px;
  display: block;
  height: ($base-unit * 1.75);
  position: absolute;
  width: ($base-unit * 1.75);
}

.v-avatar.bordered.small {
  .presence {
    box-shadow: 0px 0px 0px ($border-width - 1) #fff inset;
    display: block;
    height: ($base-unit * 1);
    position: absolute;
    width: ($base-unit * 1);
  }
}
</style>