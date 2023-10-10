<template>
  <v-card class="mb-5 rounded-lg">
    <v-card-title class="text-capitalize">
      {{ lang(`email notifications`) }}
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-row v-for="(item, index) in Object.assign([], items)" :key="index">
          <v-col class="justify-space-between pb-0" cols="12" sm="12">
            <div class="d-flex flex-wrap justify-space-between">
              <p class="subtitle-2">
                <span class="dm__secondary4--text text-capitalize">{{ lang(item.title) }}</span><br />
                <span class="text-regular caption">
                  {{
                    lang( item.description )
                  }}
                </span>
              </p>
              <v-switch right></v-switch>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    data() {
        return {
            items : [
                {
                    title: "comments",
                    description: "You'll be notified when someone comments on your posts and/or replies to your comments"
                },
                {
                    title: "tags",
                    description: "These are notifications for when someone tags you in a post of image"
                },
                {
                    title: "friend requests",
                    description: "You'll be notified when someone send you a friend request"
                },
                {
                    title: "groups",
                    description: "These are notifications for activity on groups you created or joined"
                },
                {
                    title: "events",
                    description: "You'll be notified about events you created or added to your calendar"
                },
                {
                    title: "marketplace",
                    description: "These are notifications for marketplace items you posted"
                },
            ]
        }
    }
}
</script>