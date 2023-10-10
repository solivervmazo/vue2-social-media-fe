<template>
  <v-card class="mt-10 pa-10" max-width="450">
    <v-card-title class="justify-center pb-10">{{
      lang(`Account Login`)
    }}</v-card-title>
    <v-card-text>
      <v-form>
        <v-row>
          <v-col cols="12">
            <v-text-field
              autofocus
              class="rounded-lg"
              hide-details
              outlined
              :placeholder="lang(`Username or Email`)"
              rounded
            />
          </v-col>
          <v-col cols="12">
            <v-text-field
              class="rounded-lg"
              hide-details
              outlined
              :placeholder="lang(`Username or Email`)"
              rounded
              type="password"
            />
          </v-col>
          <v-col class="mb-2" cols="12">
            <v-row>
              <v-col cols="6">
                <v-checkbox
                  dense
                  hide-details
                  :label="lang(`Forgot Password`)"
                />
              </v-col>
              <v-col class="text-right" cols="6">
                <v-btn plain>{{ lang("Forgot Password") }}?</v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-btn block color="cyan lighten-2" class="pa-4" @click="login">{{
              lang("Login to your Account!")
            }}</v-btn>
          </v-col>
          <v-col cols="12">
            <p class="text-center">
              {{ lang("Login with your social account") }}
            </p>
          </v-col>
          <v-col class="text-center" cols="12">
            <v-btn
              class="ma-2 rounded-lg"
              color="blue darken-3"
              dark
              depressed
              fab
              rounded
              small
            >
              <v-icon small>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              class="ma-2 rounded-lg"
              color="blue lighten-1"
              dark
              depressed
              fab
              rounded
              small
            >
              <v-icon small>mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              class="ma-2 rounded-lg"
              color="deep-purple darken-1"
              dark
              depressed
              fab
              rounded
              small
            >
              <v-icon small>mdi-discord</v-icon>
            </v-btn>
            <v-btn
              class="ma-2 rounded-lg"
              color="red darken-2"
              dark
              depressed
              fab
              rounded
              small
            >
              <v-icon small>mdi-youtube</v-icon>
            </v-btn>
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
      username: "",
    };
  },
  methods: {
    login: function () {
      const {
        $store: { dispatch },
        $router
      } = this;
      dispatch("auth/login");
      $router.push({ name: 'dashboard' });
    },
  },
};
</script>