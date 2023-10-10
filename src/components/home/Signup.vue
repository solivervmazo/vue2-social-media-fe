<template>
  <v-slide-x-reverse-transition hide-on-leave leave-absolute>
    <v-col cols="12">
      <v-card class="mt-10 pa-10" max-width="450">
        <v-card-title class="justify-center pb-10">
          {{ lang(`Create your acount`) }}
        </v-card-title>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="12">
                <v-form>
                  <v-row>
                    <v-col class="mb-2" cols="12">
                      <v-text-field
                        autofocus
                        class="rounded-lg"
                        hide-details
                        :label="lang(`Your Email`)"
                        outlined
                      />
                    </v-col>
                    <v-col class="mb-2" cols="12">
                      <v-text-field
                        class="rounded-lg"
                        hide-details
                        :label="lang(`Username`)"
                        outlined
                      />
                    </v-col>
                    <v-col class="mb-2" cols="12">
                      <v-text-field
                        class="rounded-lg"
                        hide-details
                        :label="lang(`Password`)"
                        outlined
                        type="password"
                      />
                    </v-col>
                    <v-col class="mb-2" cols="12">
                      <v-text-field
                        class="rounded-lg"
                        hide-details
                        :label="lang(`Repeat Password`)"
                        outlined
                        type="password"
                      />
                    </v-col>
                    <v-col class="mb-2" cols="12">
                      <v-checkbox
                        color="cyan lighten-2"
                        dense
                        hide-details
                        :label="lang(`Send me news and updates vie email`)"
                      ></v-checkbox>
                    </v-col>
                    <v-col cols="12">
                      <v-btn
                        block
                        class="pa-4 text-normal"
                        color="cyan lighten-2"
                        dark
                        large
                      >
                        {{ lang(`Register Now`) }} !
                      </v-btn>
                    </v-col>
                    <v-col cols="12">
                      <p>
                        {{ lang(`You'll receive confirmation email in your inbox with a
                        link to activate your account. If you have any problems`) }}.
                        <a
                            class="text-lighten2-cyan"
                            :to="{ name: 'login' }"
                        >
                            {{ lang(`Contact us`) }}
                        </a>!
                      </p>
                    </v-col>
                  </v-row>
                </v-form>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-slide-x-reverse-transition>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      username: '',
      password: '',
      confirm: '',
      newsletter: true,
    }
  },
  methods:{
    signup: function(){

    }
  }
}
</script>

<style lang="scss">
.v-text-field--outlined .v-label {
  top: 13px !important;
}
</style>