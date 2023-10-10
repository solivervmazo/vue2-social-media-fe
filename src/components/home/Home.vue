<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-card class="mt-10 pa-10 transparent" flat>
        <v-card-text class="py-10">
          <v-row>
            <v-col class="pb-0 text-center white--text" cols="12">{{ lang('welcome') }}</v-col>
            <v-col cols="12">
              <h1 class="text-center text-uppercase white--text">dreamax</h1>
            </v-col>
            <v-col class="d-sm-none d-md-flex mt-0">
              <p class="text-center text-uppercase white--text">
                {{ lang(`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ipsum dui, blandit eget leo nec, dapibus fermentum
                metus. Nam tempor blandit quam, sed tincidunt odio eleifend
                eget. Nam gravida magna nibh, vel pretium sapien volutpat in.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Aenean risus ipsum, semper eu
                pellentesque non, accumsan sit amet tortor. Nullam quis ante
                odio. Sed lacinia accumsan libero eu rutrum.`) }}  
                
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pt-10 text-center" cols="12">
              <v-btn-toggle class="rounded-lg" rounded>
                <v-btn class="px-10" :to="{ name: 'login' }" outlined>{{ lang(`Login`) }}</v-btn>
                <v-btn :to="{ name: 'signup' }" class="px-10" outlined>{{ lang(`Register`) }}</v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col class="pa-10" cols="12" sm="6">
      <div class="d-flex flex-row">
        <v-slide-x-reverse-transition leave-absolute>
          <router-view />
        </v-slide-x-reverse-transition>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      authed: true,
    };
  },
};
</script>

<style lang="scss">
$material-light: (
  "background": #7E57C2,
);
</style>