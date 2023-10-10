<template>
<v-container>
    <v-row>
        <v-col cols="12">
            <v-row>
                <v-col cols="12">
                    <v-group-filters />
                </v-col>
            </v-row>
            <v-row>
                <template
                    v-for="(group, index) in groups"
                >
                    <v-col cols="12" sm="4" :key="index">
                        <v-group-card :content="group"/>
                    </v-col>
                </template>
            </v-row>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import vGroupFilters from "./components/GroupFilters.vue";
import vGroupCard from "./components/GroupCard.vue";
export default {
    components:{
        vGroupFilters, vGroupCard
    },
    data() {
        return {
            
      groups: [
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "street artists",
          subtitle: "sharing the art",
          overview: {
            members: 900,
            posts: 105,
            visits: 213,
          },
          author: "soliver mazo",
        },
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "twitch streamers",
          subtitle: "sharing the art",
          overview: {
            members: 300,
            posts: 25,
            visits: 16,
          },
          author: "soliver mazo",
        },
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "street dancers",
          subtitle: "sharing the art",
          overview: {
            members: 300,
            posts: 25,
            visits: 16,
          },
          author: "soliver mazo",
        },
        {
          banner: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "gaming hub",
          subtitle: "sharing the art",
          overview: {
            members: 300,
            posts: 25,
            visits: 16,
          },
          author: "soliver mazo",
        },
      ],
        }
    }
}
</script>

<style lang="scss">

</style>