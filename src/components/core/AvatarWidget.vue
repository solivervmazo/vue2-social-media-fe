<template>
  <v-avatar
    :class="customClass ? customClass : ''"
    :color="!avatar.src ? GetColour(avatar.alt) : null"
    :size="size"
  >
    <slot></slot>
    <img v-if="avatar.src" :src="avatar.src" :alt="avatar.alt" />
    <span v-else class="white--text">
      {{ GetInitials(avatar.alt) }}
    </span>
  </v-avatar>
</template>
<script>
export default {
  props: {
    avatar: {
      default: () => {},
      type: Object,
    },
    customClass: {
      default: "",
      type: String,
    },
    size: {
      default: "48px",
      type: String,
    },
  },
  methods: {
    GetColour(name) {
      var hash = 0;
      if (name.length === 0) return hash;
      for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash;
      }
      var color = "#";
      for (let i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 255;
        color += ("00" + value.toString(16)).substr(-2);
      }
      return color;
    },
    GetInitials(name) {
      const parts = name.split(" ");
      let initials = "";
      for (var i = 0; i < parts.length; i++) {
        if (parts[i].length > 0 && parts[i] !== "") {
          initials += parts[i][0];
        }
      }
      return initials;
    },
  },
};
</script>