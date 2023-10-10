<template>
  <div>
    <v-row>
      <v-col class="pa-3 pb-0" cols="12">
        <span class="text-uppercase caption">{{ lang(`my profile`) }}</span>
      </v-col>
      <v-col class="pt-0" cols="12">
        <h1 class="text-capitalize">{{ lang(`social networks`) }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-social-accounts></v-social-accounts>
        <v-twitter-feed></v-twitter-feed>
        <v-channel-faqs></v-channel-faqs>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import vSocialAccounts from "../templates/socialAndStreamSettings/SocialAccounts.vue";
import vTwitterFeed from "../templates/socialAndStreamSettings/TwitterFeed.vue";
import vChannelFaqs from "../templates/socialAndStreamSettings/ChannelFaqs.vue";
export default {
  components: {
    vSocialAccounts,
    vTwitterFeed,
    vChannelFaqs,
  },
};
</script>
